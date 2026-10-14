import { useI18n } from "@/i18n"
import { SectionHead, Wrap } from "@/components/layout"

export function Capabilities() {
  const { t, data } = useI18n()

  return (
    <section id="atuacao" className="scroll-mt-16 border-t border-line bg-surface py-24 md:py-32">
      <Wrap>
        <SectionHead index="02" label={t.sections.work} title={t.workTitle} />

        <ol className="mt-16 grid gap-x-16 md:grid-cols-2">
          {data.capabilities.map((c, i) => (
            <li key={c.title} className="group grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-8">
              <span className="pt-1.5 text-sm text-muted tabular-nums transition-colors group-hover:text-cold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[1.75rem] leading-tight">{c.title}</h3>
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
