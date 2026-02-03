import { z } from "zod";

const suspiciousPatterns = [
  /https?:\/\//gi, // URLs
  /www\./gi, // WWW
  /<script/gi, // Scripts
  /javascript:/gi, // JavaScript protocol
  /on\w+\s*=/gi, // Event handlers
];

const hasSuspiciousContent = (value: string) => {
  return suspiciousPatterns.some(pattern => pattern.test(value));
};

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre es muy corto")
    .max(100, "El nombre es muy largo")
    .refine(val => !hasSuspiciousContent(val), "Contenido no permitido"),
  
  email: z
    .email("Correo electrónico inválido")
    .refine(val => {
      // Validar dominio común
      const validDomains = /\.(com|net|org|edu|gov|io|co|es|mx)$/i;
      return validDomains.test(val.split('@')[1] || '');
    }, "Dominio de email sospechoso"),
  
  phone: z
    .string()
    .optional()
    .refine(val => !val || val.length <= 20, "Teléfono muy largo"),
  
  subject: z
    .string()
    .min(2, "El asunto es muy corto")
    .max(100, "El asunto es muy largo")
    .refine(val => !hasSuspiciousContent(val), "Contenido no permitido"),
  
  message: z
    .string()
    .min(10, "El mensaje es muy corto")
    .max(1000, "El mensaje es muy largo")
    .refine(val => {
      const urlCount = (val.match(/https?:\/\//g) || []).length;
      return urlCount <= 1;
    }, "Demasiados enlaces en el mensaje")
    .refine(val => {
      const repetitivePattern = /(.)\1{10,}/;
      return !repetitivePattern.test(val);
    }, "Contenido sospechoso detectado"),
  
  website: z.string().max(0, "Campo no válido").optional(),
  
  turnstileToken: z.string().min(1, "Verificación de seguridad requerida"),
  
  timestamp: z.number(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;