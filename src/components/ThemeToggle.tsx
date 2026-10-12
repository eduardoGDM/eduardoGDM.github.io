import { useState } from "react"
import { useI18n } from "@/i18n"

type Theme = "light" | "dark"

const STORAGE_KEY = "portfolio-theme"
const THEME_COLOR = { light: "#eef0f4", dark: "#060709" }

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.add("theme-swap")
  window.setTimeout(() => root.classList.remove("theme-swap"), 450)
  root.classList.toggle("dark", theme === "dark")
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLOR[theme])
}

/**
 * Alterna escuro (padrão) e claro. O tema inicial é aplicado
 * por um script no index.html, antes de a página aparecer.
 */
export function ThemeToggle() {
  const { t } = useI18n()
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  )

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark"
    applyTheme(next)
    setTheme(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // sem armazenamento: vale só nesta visita
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? t.themeToLight : t.themeToDark}
      className="label cursor-pointer px-1 py-2 text-muted transition-colors hover:text-text"
    >
      {theme === "dark" ? t.themeLight : t.themeDark}
    </button>
  )
}
