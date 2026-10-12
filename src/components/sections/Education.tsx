import { useI18n } from "@/i18n"
import { SectionLabel, Wrap } from "@/components/layout"

export function Education() {
  const { t, data } = useI18n()
  const { education, languages } = data

  return (
    <section className="border-t border-line py-24 md:py-28">
      <Wrap className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <SectionLabel index="06">{t.sections.education}</SectionLabel>
          <h3 className="mt-6 text-[clamp(1.9rem,3.6vw,2.6rem)] leading-tight">{education.course}</h3>
          <p className="mt-2 text-muted">{education.school}</p>
          <p className="label mt-5 text-muted">
            {t.finished} <span className="text-cold">{education.finished}</span>
          </p>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <SectionLabel index="07">{t.sections.languages}</SectionLabel>
          <ul className="mt-8 space-y-7">
            {languages.map((l) => (
              <li key={l.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-heading text-2xl">{l.name}</span>
                  <span className="text-sm text-muted">{l.level}</span>
                </div>
                <div className="mt-3 h-px bg-line" role="img" aria-label={t.levelLabel(l.score)}>
                  <div className="h-px bg-cold" style={{ width: `${(l.score / 5) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Wrap>
    </section>
  )
}
