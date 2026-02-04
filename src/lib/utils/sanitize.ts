export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  // Sanitización manual sin DOMPurify
  let clean = input
    // Remover tags HTML básicos
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '')
    .replace(/<object[^>]*>.*?<\/object>/gi, '')
    .replace(/<embed[^>]*>/gi, '')
    .replace(/<link[^>]*>/gi, '')
    .replace(/<style[^>]*>.*?<\/style>/gi, '')
    
    // Remover event handlers
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/on\w+\s*=\s*[^\s>]*/gi, '')
    
    // Remover protocolos peligrosos
    .replace(/javascript:/gi, 'removed:')
    .replace(/data:text\/html/gi, 'removed:')
    .replace(/vbscript:/gi, 'removed:')
    
    // Escapar caracteres HTML especiales
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');

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