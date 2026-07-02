import { SectionHeading } from "./about-section"

const groups = [
  {
    title: "Linguagens & Dados",
    accent: "primary" as const,
    items: ["Python", "SQL", "PostgreSQL","Pandas", "NumPy", "dbt"],
  },
  {
    title: "Machine Learning & IA",
    accent: "accent" as const,
    items: [
      "scikit-learn",
      "TensorFlow",
      "PyTorch",
      "XGBoost",
      "Hugging Face",
      "LangChain",
      "OpenAI",
    ],
  },
  {
    title: "MLOps & Cloud",
    accent: "primary" as const,
    items: ["Docker", "Kubernetes", "MLflow", "AWS", "GCP", "Airflow", "FastAPI"],
  },
  {
    title: "Visualização & BI",
    accent: "accent" as const,
    items: ["Power BI", "Tableau", "Plotly", "Matplotlib"],
  },
]

export function SkillsSection() {
  return (
    <section id="habilidades" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" title="Habilidades" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-heading text-lg font-semibold">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-full border px-3 py-1.5 font-mono text-sm transition-colors ${
                      g.accent === "primary"
                        ? "border-primary/30 bg-primary/10 text-primary hover:bg-primary/20"
                        : "border-accent/30 bg-accent/10 text-accent hover:bg-accent/20"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
