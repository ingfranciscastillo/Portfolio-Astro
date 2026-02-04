import { Section } from "./Section";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  IconMail,
  IconBrandInstagram,
  IconCalendar,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { useState } from "react";

export default function ContactSection() {
  const user = import.meta.env.PUBLIC_CONTACT_USER;
  const domain = import.meta.env.PUBLIC_CONTACT_DOMAIN;
  const email = `${user}@${domain}`;
  const calUrl = "https://cal.com/ingfranciscastillo";
  const linkedinUrl = "https://linkedin.com/in/ingfranciscastillo";

  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <Section
      id="contacto"
      title="¡Contáctame!"
      subtitle="Elige el canal que te resulte más cómodo."
      contentClassName="mx-auto"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Email */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Email</CardTitle>
            <CardDescription className="mt-2 text-sm text-muted-foreground">
              Propuestas, preguntas o colaboración.
            </CardDescription>

            <CardAction>
              <IconMail className="h-6 w-6 text-muted-foreground" />
            </CardAction>
          </CardHeader>

          <CardContent>
            <p className="font-mono text-sm text-muted-foreground">{email}</p>
          </CardContent>

          <CardFooter className="mt-6 flex gap-3">
            <Button onClick={copyEmail} className="flex-1">
              {copied ? "¡Copiado!" : "Copiar correo"}
            </Button>
            <Button variant="outline" asChild className="flex-1">
              <a href={`mailto:${email}`}>Escribir</a>
            </Button>
          </CardFooter>
        </Card>

        {/* Cal.com */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Agenda una llamada
            </CardTitle>
            <CardDescription className="mt-2 text-sm text-muted-foreground">
              Reserva 15 minutos en mi calendario.
            </CardDescription>

            <CardAction>
              <IconCalendar className="h-6 w-6 text-muted-foreground" />
            </CardAction>
          </CardHeader>

          <CardContent className="mt-6 flex flex-col">
            <Button asChild className="w-full">
              <a href={calUrl} target="_blank" rel="noopener noreferrer">
                Agendar en Cal.com
              </a>
            </Button>

            <p className="mt-3 text-xs text-muted-foreground">
              Ideal para proyectos y entrevistas.
            </p>
          </CardContent>
        </Card>

        {/* LinkedIn */}
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">LinkedIn</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Mensaje directo y networking.
              </p>
            </div>
            <IconBrandLinkedin className="h-6 w-6 text-muted-foreground" />
          </div>

          <div className="mt-6">
            <Button variant="outline" asChild className="w-full gap-2">
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                Abrir perfil
              </a>
            </Button>

            <p className="mt-3 text-xs text-muted-foreground">
              Recomendado si buscas contratarme.
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
}
