"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

import { z } from "zod";
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

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre es muy corto")
    .max(100, "El nombre es muy largo"),
  email: z.string().email("Correo electrónico inválido"),
  phone: z.string().optional(),
  subject: z
    .string()
    .min(2, "El asunto es muy corto")
    .max(100, "El asunto es muy largo"),
  message: z
    .string()
    .min(10, "El mensaje es muy corto")
    .max(1000, "El mensaje es muy largo"),
});

export default function ContactSection() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values);
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

              <Button type="submit">Enviar</Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}
