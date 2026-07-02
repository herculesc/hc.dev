import { SectionHeading } from "./about-section"

const experiences = [
  {
    period: "2025 — Presente",
    role: "Engenheiro de Soluções em Inteligência Artificial",
    company: "Autonomo",
    description:
      "Desenvolvo soluções utilizando Inteligência Artificial e Machine Learning, com experiência em Python, FastAPI, SQL e PostgreSQL. Atuo no treinamento, avaliação e ajuste de modelos de IA, além da criação de APIs, bancos de dados e integração de sistemas inteligentes aplicados a problemas reais de negócio.",
    tags: ["Python", "FastAPI", "PostgreSQL", "MLOps", "Docker", "Deploy", "LGPD"],
  },
  {
    period: "2024 — 2025",
    role: "Cientista de Dados",
    company: "INPE",
    description:
      "Desenvolvi soluções de IA com Python, Machine Learning e Visão Computacional, focadas em processamento de imagens, classificação, regressão e análise de dados.",
    tags: ["Python", "PyTorch", "Numpy", "Pandas", "Matplotlib", "seaborn"],
  },
  {
    period: "2023 — 2024",
    role: "Assistente de TI",
    company: "Tudo de Bicho",
    description:
      "Desenvolvi soluções em Java e SQL Server para automação, correção de dados e suporte aos processos de vendas, compras, financeiro e fiscal em operações de e-commerce multicanal.",
    tags: ["Java","Python", "SQL Server", "javascript", "HTML5", "CSS3", "Sankhya ERP"],
  },
  {
    period: "2019 — 2021",
    role: "Estagio em Inteligência Artificial",
    company: "INPE",
    description:
      "Desenvolvi um algoritmo de visão computacional para detecção de objetos em drones, VANTs e ARP (Aeronaves Remotamente Pilotadas), utilizando modelos de inteligência artificial para apoio à navegação e prevenção de colisões, identificando obstáculos e áreas restritas como pessoas e zonas não sobrevoáveis.",
    tags: ["Python", "Numpy", "Tensorflow", "Scikit Learning" ,"Keras", "Matplotlib"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" title="Experiência" />

        <div className="mt-10">
          {experiences.map((exp, i) => (
            <div
              key={exp.role}
              className="grid gap-4 border-t border-border py-8 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <div className="font-mono text-sm text-accent">{exp.period}</div>
              <div>
                <h3 className="font-heading text-xl font-semibold">
                  {exp.role}{" "}
                  <span className="text-primary">· {exp.company}</span>
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
                  {exp.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              {i === experiences.length - 1 && (
                <div className="hidden border-b border-border md:col-span-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
