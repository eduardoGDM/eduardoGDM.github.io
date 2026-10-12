import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { resume, type Locale, type Resume } from "@/data/resume"

// Textos fixos da interface (o conteúdo do currículo fica em data/resume.ts).
const ui = {
  pt: {
    nav: { about: "Sobre", work: "Atuação", stack: "Stack", path: "Trajetória", projects: "Projetos" },
    talk: "Contato",
    tagline: "Full Stack · Web & Mobile",
    seePath: "Ver trajetória",
    downloadCv: "Baixar currículo (PDF)",
    sections: {
      about: "Sobre",
      work: "Atuação",
      stack: "Stack",
      path: "Trajetória",
      projects: "Projetos",
      education: "Formação",
      languages: "Idiomas",
      contact: "Contato",
    },
    facts: { now: "Agora", education: "Formação", languages: "Idiomas" },
    educationFact: "Eng. de Computação",
    offline: "Fora do código",
    since: "Desde",
    routine: "Rotina",
    workTitle: "O que eu faço",
    stackTitle: "Ferramentas",
    pathTitle: "Onde já trabalhei",
    projectsTitle: "Projetos pessoais",
    projectsIntro: "Sistemas que idealizei e desenvolvi por conta própria, do problema real à solução.",
    projectTabs: "Escolha um projeto",
    audience: "Para quem",
    features: "O que o sistema faz",
    tech: "Tecnologias",
    current: "Atual",
    more: (n: number) => `Mais ${n} entregas`,
    less: "Mostrar menos",
    finished: "Concluído em",
    levelLabel: (n: number) => `Nível ${n} de 5`,
    contactTitle: ["Vamos construir algo", "juntos?"],
    writeTo: "Escreva para",
    copy: "Copiar e-mail",
    copied: "Copiado",
    copyHint: "Copia o endereço para colar onde quiser",
    copiedHint: "Está na sua área de transferência",
    backTop: "Voltar ao topo",
    photoAlt: "Foto de Eduardo Gonçalves",
    switchTo: "Read in English",
    themeDark: "Escuro",
    themeLight: "Claro",
    themeToDark: "Ativar tema escuro",
    themeToLight: "Ativar tema claro",
  },
  en: {
    nav: { about: "About", work: "Work", stack: "Stack", path: "Experience", projects: "Projects" },
    talk: "Contact",
    tagline: "Full Stack · Web & Mobile",
    seePath: "See experience",
    downloadCv: "Download résumé (PDF, Portuguese)",
    sections: {
      about: "About",
      work: "Work",
      stack: "Stack",
      path: "Experience",
      projects: "Projects",
      education: "Education",
      languages: "Languages",
      contact: "Contact",
    },
    facts: { now: "Now", education: "Education", languages: "Languages" },
    educationFact: "Computer Engineering",
    offline: "Off the clock",
    since: "Since",
    routine: "Routine",
    workTitle: "What I do",
    stackTitle: "Tools",
    pathTitle: "Where I've worked",
    projectsTitle: "Personal projects",
    projectsIntro: "Systems I conceived and built on my own, from a real problem to a working solution.",
    projectTabs: "Choose a project",
    audience: "Built for",
    features: "What it does",
    tech: "Tech",
    current: "Current",
    more: (n: number) => `${n} more`,
    less: "Show less",
    finished: "Graduated",
    levelLabel: (n: number) => `Level ${n} of 5`,
    contactTitle: ["Let's build something", "together?"],
    writeTo: "Write to",
    copy: "Copy e-mail",
    copied: "Copied",
    copyHint: "Copies the address so you can paste it anywhere",
    copiedHint: "It's on your clipboard",
    backTop: "Back to top",
    photoAlt: "Photo of Eduardo Gonçalves",
    switchTo: "Ler em português",
    themeDark: "Dark",
    themeLight: "Light",
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme",
  },
}

type UI = (typeof ui)["pt"]

type I18n = { lang: Locale; setLang: (l: Locale) => void; t: UI; data: Resume }

const I18nContext = createContext<I18n | null>(null)

const STORAGE_KEY = "portfolio-lang"

function initialLang(): Locale {
  // Prioridade: ?lang= na URL > escolha salva > idioma do navegador.
  const param = new URLSearchParams(window.location.search).get("lang")
  if (param === "pt" || param === "en") return param
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "pt" || saved === "en") return saved
  } catch {
    // armazenamento indisponível: segue para o idioma do navegador
  }
  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en"
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en"
    document.title =
      lang === "pt"
        ? "Eduardo Gonçalves — Desenvolvedor Full Stack"
        : "Eduardo Gonçalves — Full Stack Developer"
  }, [lang])

  function setLang(next: Locale) {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignora: a troca continua valendo nesta visita
    }
    const url = new URL(window.location.href)
    url.searchParams.set("lang", next)
    window.history.replaceState(null, "", url)
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t: ui[lang], data: resume[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n precisa estar dentro de <I18nProvider>")
  return ctx
}
