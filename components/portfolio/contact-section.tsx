"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Reveal } from "./reveal"
import { SectionIntro } from "./section-intro"
import { contactEmail } from "./projects"

type MessageDraft = { href: string; name: string } | null

export function ContactSection() {
  const [draft, setDraft] = useState<MessageDraft>(null)

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const message = String(formData.get("message") ?? "").trim()
    const subject = encodeURIComponent(`Contacto desde la web — ${name}`)
    const body = encodeURIComponent(`Hola, soy ${name} (${email}).\n\n${message}`)
    setDraft({ href: `mailto:${contactEmail}?subject=${subject}&body=${body}`, name })
  }

  return (
    <section className="contact-section" id="contacto" aria-labelledby="contact-heading">
      <div className="section-wrap contact-layout">
        <Reveal className="contact-copy">
          <SectionIntro
            eyebrow="¿LO HACEMOS REALIDAD?"
            title="Tu próxima idea empieza con un hola."
            description="Cuéntame qué tienes en mente. Estoy disponible para proyectos freelance y colaboraciones con intención."
            id="contact-heading"
          />
          <a className="contact-email" href={`mailto:${contactEmail}`}>
            <span className="contact-icon"><Mail aria-hidden="true" /></span>
            <span><small>ESCRÍBEME DIRECTAMENTE</small><strong>{contactEmail}</strong></span>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-socials" role="group" aria-label="Perfiles sociales">
            <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" aria-label="GitHub, perfil de muestra">
              <span className="social-mark social-mark-github" aria-hidden="true">GH</span> GitHub <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/tu-usuario/" target="_blank" rel="noreferrer" aria-label="LinkedIn, perfil de muestra">
              <span className="social-mark social-mark-linkedin" aria-hidden="true">in</span> LinkedIn <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <p className="contact-links-note">El correo y los perfiles son de muestra: sustitúyelos por tus datos.</p>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={100}>
          <form className="contact-form" onSubmit={prepareEmail}>
            <FieldGroup>
              <div className="form-row">
                <Field>
                  <FieldLabel htmlFor="contact-name">Tu nombre</FieldLabel>
                  <Input id="contact-name" name="name" autoComplete="name" placeholder="¿Cómo te llamas?" required maxLength={100} />
                </Field>
                <Field>
                  <FieldLabel htmlFor="contact-email">Tu email</FieldLabel>
                  <Input id="contact-email" name="email" type="email" autoComplete="email" placeholder="tu@email.com" required maxLength={254} />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="contact-message">Cuéntame tu idea</FieldLabel>
                <Textarea id="contact-message" name="message" placeholder="Un poco de contexto, objetivos o lo que te gustaría construir…" required minLength={10} maxLength={3000} rows={5} />
              </Field>
            </FieldGroup>
            <div className="form-submit-row">
              <p>Al enviar, se preparará un correo en tu aplicación de email.</p>
              <Button className="button-primary" type="submit">
                Preparar mensaje <Send aria-hidden="true" data-icon="inline-end" />
              </Button>
            </div>
            {draft ? (
              <p className="form-success" role="status">
                Gracias, {draft.name}. <a href={draft.href}>Abre tu correo para enviar el mensaje <ArrowUpRight aria-hidden="true" /></a>
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
