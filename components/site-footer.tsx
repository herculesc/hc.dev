export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <p>
          <span className="font-mono text-primary">HC</span> · Hércules Carlos —{" "}
          {new Date().getFullYear()}
        </p>
        <p>Desenvolvido com Next.js & dados.</p>
      </div>
    </footer>
  )
}
