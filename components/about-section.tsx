const stats = [
  { value: "7+", label: "Anos de experiência" },
  { value: "20+", label: "Modelos em produção" },
  { value: "15+", label: "Empresas atendidas" },
  { value: "6", label: "Publicações técnicas" },
]

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" title="Sobre mim" />

        <div className="mt-10 grid gap-12 md:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            <p>
              Sou cientista de dados apaixonado por resolver problemas complexos
              com dados e inteligência artificial. Minha jornada começou na
              estatística e evoluiu para o desenvolvimento de soluções de
              machine learning de ponta a ponta — da coleta de dados ao deploy
              em produção.
            </p>
            <p>
              Trabalho na interseção entre <span className="text-foreground">ciência</span>,{" "}
              <span className="text-foreground">engenharia</span> e{" "}
              <span className="text-foreground">negócio</span>, traduzindo
              necessidades reais em modelos preditivos, sistemas de recomendação,
              processamento de linguagem natural e visão computacional.
            </p>
            <p>
              Quando não estou treinando modelos, gosto de compartilhar
              conhecimento em comunidades de dados, contribuir com projetos open
              source e explorar as fronteiras da IA generativa.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="font-heading text-3xl font-bold text-primary">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}
