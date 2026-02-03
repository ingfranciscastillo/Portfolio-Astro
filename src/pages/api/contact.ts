import type { APIRoute } from "astro";
import {z} from "zod";
import * as brevo from "@getbrevo/brevo";
import { contactFormSchema } from "@/lib/validations/contact";
import { sanitizeFormData } from "@/lib/utils/sanitize";

export const prerender = false;

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  import.meta.env.BREVO_API_KEY
);

// Verificar Turnstile token
async function verifyTurnstileToken(token: string): Promise<boolean> {
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: import.meta.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    }
  );

  const data = await response.json();
  return data.success === true;
}

const requestCounts = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = 5; // 5 requests
  const window = 60 * 60 * 1000; // 1 hora

  const record = requestCounts.get(ip);

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + window });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count++;
  return true;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {

    try {
        const ip = clientAddress || request.headers.get("x-forwarded-for") || "unknown";

        if (!checkRateLimit(ip)) {
            return new Response(
        JSON.stringify({
          success: false,
          message: "Demasiadas solicitudes. Por favor intenta de nuevo más tarde.",
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json" },
        }
        );
        }

        const body = await request.json();

        const sanitizedData = sanitizeFormData(body);

        const validationResult = contactFormSchema.safeParse(sanitizedData);

         if (!validationResult.success) {
            return new Response(
                JSON.stringify({
                success: false,
                error: "Datos inválidos",
                details: validationResult.error.message,
                }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
                );
      }

      const data = validationResult.data;

          if (data.website && data.website.length > 0) {
            console.warn(`[SPAM DETECTED] Honeypot triggered from IP: ${ip}`);
            
            return new Response(
                JSON.stringify({
                success: true,
                message: "Mensaje recibido",
                }),
                {
                status: 200,
                headers: { "Content-Type": "application/json" },
                }
            );
            }

        const isTurnstileValid = await verifyTurnstileToken(data.turnstileToken);

        if (!isTurnstileValid) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Verificación de seguridad fallida",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const timeDiff = Date.now() - data.timestamp;
    if (timeDiff > 60 * 60 * 1000) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Sesión expirada. Recarga la página.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const sendSmtpEmail = new brevo.SendSmtpEmail();

    sendSmtpEmail.subject = `[Portfolio] ${data.subject}`;
    sendSmtpEmail.to = [
      {
        email: import.meta.env.RECIPIENT_EMAIL,
        name: import.meta.env.SENDER_NAME || "Tu Nombre",
      },
    ];
    sendSmtpEmail.sender = {
      email: import.meta.env.SENDER_EMAIL,
      name: "Portfolio Contact Form",
    };
    sendSmtpEmail.replyTo = {
      email: data.email,
      name: data.name,
    };
    sendSmtpEmail.htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f4f4f4; padding: 20px; border-radius: 5px; }
            .content { padding: 20px 0; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Nuevo mensaje desde tu portfolio</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nombre:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${data.email}</div>
              </div>
              ${
                data.phone
                  ? `
              <div class="field">
                <div class="label">Teléfono:</div>
                <div class="value">${data.phone}</div>
              </div>
              `
                  : ""
              }
              <div class="field">
                <div class="label">Asunto:</div>
                <div class="value">${data.subject}</div>
              </div>
              <div class="field">
                <div class="label">Mensaje:</div>
                <div class="value">${data.message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>Este mensaje fue enviado desde el formulario de contacto de tu portfolio.</p>
              <p>IP: ${ip} | Fecha: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Enviar el email
    await apiInstance.sendTransacEmail(sendSmtpEmail);

    // Log exitoso
    console.log(`[SUCCESS] Email sent from ${data.email} (IP: ${ip})`);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado correctamente",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );

    } catch (error) {
        console.error("[API ERROR]", error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error interno del servidor",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
    }
  };