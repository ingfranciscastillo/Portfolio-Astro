import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import Turnstile from "react-turnstile";
import { sanitizeFormData } from "@/lib/utils/sanitize";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useEffect, useState } from "react";

const TurnstileWidget = ({
  onVerify,
  onError,
  onExpire,
}: {
  onVerify: (token: string) => void;
  onError: () => void;
  onExpire: () => void;
}) => {
  const [widgetId, setWidgetId] = useState<string | null>(null);

  useEffect(() => {
    // Cargar script de Turnstile
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      // Renderizar widget cuando el script se carga
      if ((window as any).turnstile) {
        const id = (window as any).turnstile.render("#cf-turnstile", {
          sitekey: import.meta.env.PUBLIC_TURNSTILE_SITE_KEY,
          callback: onVerify,
          "error-callback": onError,
          "expired-callback": onExpire,
          theme: "light", // o "dark"
        });
        setWidgetId(id);
      }
    };

    document.body.appendChild(script);

    return () => {
      // Limpiar cuando se desmonte
      if (widgetId && (window as any).turnstile) {
        (window as any).turnstile.remove(widgetId);
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <div id="cf-turnstile"></div>;
};

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [formLoadTime, setFormLoadTime] = useState<number>(0);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      website: "",
      turnstileToken: "",
      timestamp: 0,
    },
  });

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  async function onSubmit(values: ContactFormData) {
    try {
      setIsSubmitting(true);

      setSubmitStatus({ type: null, message: "" });

      if (!turnstileToken) {
        setSubmitStatus({
          type: "error",
          message: "Por favor completa la verificación de seguridad",
        });
        setIsSubmitting(false);
        return;
      }

      const timeDiff = Date.now() - formLoadTime;
      if (timeDiff < 3000) {
        setSubmitStatus({
          type: "error",
          message: "Por favor tómate un momento para completar el formulario",
        });
        setIsSubmitting(false);
        return;
      }

      const sanitizedData = sanitizeFormData({
        ...values,
        turnstileToken,
        timestamp: Date.now(),
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje");
      }

      // Éxito
      setSubmitStatus({
        type: "success",
        message: "¡Mensaje enviado correctamente! Te responderé pronto.",
      });

      form.reset();
      setTurnstileToken("");
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Error al enviar el mensaje. Intenta de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contacto" className="py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          Contactame!
        </h1>
        <p className="mt-4 text-center">
          ¿Tienes preguntas o necesitas ayuda? ¡Estamos aquí para ayudarte!
        </p>

        <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
          <div>
            <h2 className="text-xl font-semibold">¿Listo para comenzar?</h2>
            <p className="mt-4 text-sm">
              Contactame y te responderé lo antes posible.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Juan Pérez" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <FormControl>
                      <Input placeholder="juan.perez@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Asunto</FormLabel>
                    <FormControl>
                      <Input placeholder="Asunto del mensaje" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Escribe tu mensaje aquí..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <div
                    style={{ position: "absolute", left: "-9999px" }}
                    aria-hidden="true"
                  >
                    <Input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      {...field}
                    />
                  </div>
                )}
              />

              <div className="flex justify-center">
                <TurnstileWidget
                  onVerify={(token) => {
                    setTurnstileToken(token);
                    form.setValue("turnstileToken", token);
                  }}
                  onError={() => {
                    setTurnstileToken("");
                    form.setValue("turnstileToken", "");
                  }}
                  onExpire={() => {
                    setTurnstileToken("");
                    form.setValue("turnstileToken", "");
                  }}
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`rounded-md p-4 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                      : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}
