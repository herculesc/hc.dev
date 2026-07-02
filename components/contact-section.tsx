"use client"

import { useState } from "react"
import { Mail, Send } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./brand-icons"

export function ContactSection() {
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget

    const data = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      mensagem: (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value,
    }

    const response = await fetch("/.netlify/functions/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    if(response.ok){
      setSent(true)
      form.reset()
    } else{
      alert("Erro ao enviar a mensagem")
    }
  }

  return (
    <section id="contato" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-mono text-sm text-accent">05</span>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance md:text-5xl">
          Vamos construir algo com dados?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Estou sempre aberto a conversar sobre novos projetos, colaborações ou
          oportunidades em ciência de dados e IA.
        </p>

        {sent ? (
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-primary/40 bg-primary/10 p-8">
            <p className="font-heading text-lg font-semibold text-primary">
              Mensagem enviada!
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Obrigado pelo contato. Retornarei em breve.
            </p>
          </div>
        ) : (
    
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 grid max-w-xl gap-4 text-left"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nome" id="nome">
                <input
                  id="nome"
                  name="nome"
                  required
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  placeholder="Seu nome"
                />
              </Field>
              <Field label="E-mail" id="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  placeholder="voce@email.com"
                />
              </Field>
            </div>
            <Field label="Mensagem" id="mensagem">
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                placeholder="Conte sobre seu projeto..."
              />
            </Field>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Enviar mensagem
              <Send className="size-4" />
            </button>
          </form>
        )}

        <div className="mt-12 flex items-center justify-center gap-3">
          <SocialLink href="https://github.com/herculesc" label="GitHub">
            <GithubIcon className="size-5" />
          </SocialLink>
          <SocialLink href="www.linkedin.com/in/hércules-carlos-4130a295" label="LinkedIn">
            <LinkedinIcon className="size-5" />
          </SocialLink>
          <SocialLink href="mailto:herculesfreelaml@gmail.com" label="E-mail">
            <Mail className="size-5" />
          </SocialLink>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  children,
}: {
  label: string
  id: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  )
}
