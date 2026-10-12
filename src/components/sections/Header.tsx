import { identity, type Locale } from "@/data/resume"
import { useI18n } from "@/i18n"
import { Wrap } from "@/components/layout"
import { ThemeToggle } from "@/components/ThemeToggle"
import { cn } from "@/lib/utils"

/** Seletor PT / EN em texto. */
function LangSwitch() {
  const { lang, setLang, t } = useI18n()
  const options: Locale[] = ["pt", "en"]

  return (
    <div role="group" aria-label={t.switchTo} className="label flex items-center gap-1">
      {options.map((opt, i) => (
        <span key={opt} className="flex items-center gap-1">
          {i > 0 && <span className="text-line">/</span>}
          <button
            type="button"
            onClick={() => setLang(opt)}
            aria-pressed={lang === opt}
            lang={opt === "pt" ? "pt-BR" : "en"}
            className={cn(
              "cursor-pointer px-1 py-2 transition-colors",
              lang === opt ? "text-text" : "text-muted hover:text-text"
            )}
          >
            {opt.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )
}

export function Header() {
  const { t } = useI18n()
  const nav = [
    { href: "#sobre", label: t.nav.about },
    { href: "#atuacao", label: t.nav.work },
    { href: "#stack", label: t.nav.stack },
    { href: "#trajetoria", label: t.nav.path },
    { href: "#projetos", label: t.nav.projects },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-night/80 backdrop-blur-md">
      <Wrap className="flex h-16 items-center justify-between gap-4">
        <a href="#topo" className="font-heading text-[1.35rem] leading-none whitespace-nowrap">
          {identity.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Menu">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="label text-muted transition-colors hover:text-text">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <ThemeToggle />
          <LangSwitch />
          <a
            href="#contato"
            className="label hidden border border-line px-4 py-2.5 transition-colors hover:border-cold hover:text-cold sm:block"
          >
            {t.talk}
          </a>
        </div>
      </Wrap>
    </header>
  )
}
