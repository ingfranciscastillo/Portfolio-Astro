import DOMPurify from 'isomorphic-dompurify';

export const sanitizeInput = (input: string): string => {
  // Configuración estricta de DOMPurify
  const clean = DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // No permitir ninguna etiqueta HTML
    ALLOWED_ATTR: [],
    KEEP_CONTENT: true, // Mantener el contenido de texto
  });
  
  return clean.trim();
};

export const sanitizeFormData = (data: Record<string, any>) => {
  const sanitized: Record<string, any> = {};
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value);
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
};