"use client"

import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./brand-icons"

export function ContactSection() {

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


        <div className="mt-12 flex items-center justify-center gap-3">
          <SocialLink href="https://github.com/herculesc" label="GitHub">
            <GithubIcon className="size-5" />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/hércules-carlos-4130a295" label="LinkedIn">
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
