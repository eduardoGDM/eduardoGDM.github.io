import { useI18n } from "@/i18n"
import { SectionHead, Wrap } from "@/components/layout"

export function Capabilities() {
  const { t, data } = useI18n()

  return (
    <section id="atuacao" className="scroll-mt-16 border-t border-line bg-surface pt-24 pb-28 md:pt-24 md:pb-32">
      <Wrap>
        <SectionHead index="02" label={t.sections.work} title={t.workTitle} />

        {/* coluna da direita desce 84px: as duas colunas não se espelham */}
        <ol className="mt-16 grid gap-x-16 md:grid-cols-2 md:pb-[84px]">
          {data.capabilities.map((c, i) => (
            <li key={c.title} className="group grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-8 md:even:translate-y-[84px]">
              <span className="pt-1.5 text-sm text-muted tabular-nums transition-colors group-hover:text-cold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[1.8rem] leading-[1.08]">{c.title}</h3>
                <p className="mt-2 text-muted">{c.text}</p>
                <p className="mt-3 text-sm text-cold">{c.tags.join(" · ")}</p>
              </div>
            </li>
          ))}
        </ol>
      </Wrap>
    </section>
  )
}
