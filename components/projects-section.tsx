import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "./brand-icons"
import { SectionHeading } from "./about-section"

const projects = [
  {
    title: "Detecção de Áreas de Mineração",
    description:
      "Modelo de IA para detecção de áreas de mineração industrial com 96% de precisão.",
    image: "/mining_change.png",
    tags: ["Python", "PyTorch", "QGIS", "Sentinel-2"],
    featured: true,
  },
  {
    title: "IA Vision SaaS",
    description:
      "Plataforma SaaS de visão computacional para detecção e contagem de pessoas em tempo real.",
    image: "/IA_vision02.png",
    tags: ["Python", "YOLO", "FastAPI", "PostgreSQL"],
    featured: true,
  },
  {
    title: "Assistente de NLP",
    description:
      "Chatbot de suporte baseado em LLM com RAG, integrando base de conhecimento interna e reduzindo o tempo de resposta em 60%.",
    image: "/project-nlp.png",
    tags: ["LangChain", "OpenAI", "Pinecone"],
    featured: false,
    featured2: true,
  },
  {
    title: "Avaliação de Imóveis com IA",
    description:
      "Sistema de visão computacional para detecção de defeitos em linha de produção industrial em tempo real.",
    image: "/imoveis_IA.png",
    tags: ["Python","Flask", "Tensorflow ", "Keras", "Scikit Learning", "HTML5", "CSS3"],
    featured: false,
  },
  
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" title="Projetos" />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={`Captura do projeto ${p.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {p.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 font-mono text-xs font-medium text-accent-foreground">
                    Destaque
                  </span>
                )}
                {p.featured2 && (
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 font-mono text-xs font-medium text-accent-foreground">
                    Em Desenvolvimento
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-xl font-semibold">{p.title}</h3>
                  <div className="flex shrink-0 gap-2">
                    <a
                      href="https://github.com/herculesc"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Código de ${p.title}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <GithubIcon className="size-5" />
                    </a>
                    <a
                      href="#"
                      aria-label={`Ver ${p.title}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ArrowUpRight className="size-5" />
                    </a>
                  </div>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {p.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
