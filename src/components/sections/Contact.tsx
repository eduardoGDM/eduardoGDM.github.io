import { useState } from "react"
import { identity } from "@/data/resume"
import { useI18n } from "@/i18n"
import { SectionLabel, Wrap } from "@/components/layout"
import { Stroke } from "@/components/Stroke"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export function Contact() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(identity.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${identity.email}`
    }
  }

  const socials = [
    { label: "LinkedIn", href: identity.links.linkedin },
    { label: "GitHub", href: identity.links.github },
  ]

  return (
    <section id="contato" className="relative scroll-mt-16 overflow-hidden border-t border-line bg-deep pt-24 pb-10 text-on-deep md:pt-32">
      <Wrap>
        <SectionLabel index="08">{t.sections.contact}</SectionLabel>

        <h2 className="mt-8 max-w-4xl text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.015em]">
          {t.contactTitle[0]} <span className="text-cold italic">{t.contactTitle[1]}</span>
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="label text-muted">{t.writeTo}</p>
            <a
              href={`mailto:${identity.email}`}
              className="link-line mt-3 inline-block font-heading text-[clamp(1.5rem,3.8vw,2.6rem)] break-all hover:text-cold"
            >
              {identity.email}
            </a>
            <div className="mt-6">
              <Tooltip>
                <TooltipTrigger
                  onClick={copyEmail}
                  className="label cursor-pointer border border-line px-4 py-2.5 transition-colors hover:border-cold hover:text-cold"
                >
                  {copied ? t.copied : t.copy}
                </TooltipTrigger>
                <TooltipContent className="bg-night text-text">{copied ? t.copiedHint : t.copyHint}</TooltipContent>
              </Tooltip>
            </div>
          </div>

          <ul className="md:col-span-4 md:pt-8">
            {socials.map((s) => (
              <li key={s.label} className="border-b border-line">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between py-4 font-heading text-2xl transition-colors hover:text-cold"
                >
                  {s.label}
                  <Stroke />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer className="mt-24 flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {identity.fullName}
          </p>
          <a href="#topo" className="link-line hover:text-text">
            {t.backTop}
          </a>
        </footer>
      </Wrap>
    </section>
  )
}
