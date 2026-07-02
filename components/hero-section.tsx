import Image from "next/image"
import { ArrowDown, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./brand-icons"

export function HeroSection() {
  return (
    <section id="topo" className="relative overflow-hidden px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
      {/* decorative gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-20 size-96 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-40 size-80 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" />
            Disponível para novos projetos
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
            Olá, sou <span className="text-primary">Hércules Carlos</span>.
            <br />
            Transformo dados em{" "}
            <span className="text-accent">decisões inteligentes</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Cientista de Dados e Desenvolvedor de Soluções em IA. Crio modelos de
            machine learning, pipelines de dados e produtos de inteligência
            artificial que geram impacto real para o negócio.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver projetos
              <ArrowDown className="size-4" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Entrar em contato
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <SocialLink href="https://github.com" label="GitHub">
              <GithubIcon className="size-5" />
            </SocialLink>
            <SocialLink href="https://linkedin.com" label="LinkedIn">
              <LinkedinIcon className="size-5" />
            </SocialLink>
            <SocialLink href="mailto:hercules@exemplo.com" label="E-mail">
              <Mail className="size-5" />
            </SocialLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -rotate-6 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/30 blur-sm" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
            <Image
              src="/hercules-avatar.png"
              alt="Retrato de Hércules Carlos"
              width={480}
              height={560}
              className="h-full w-full object-cover"
              priority
            />
          </div>
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
