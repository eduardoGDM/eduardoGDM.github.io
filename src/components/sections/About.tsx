import { useI18n } from "@/i18n"
import { SectionLabel, Wrap } from "@/components/layout"

export function About() {
  const { t, data } = useI18n()
  const { profile, experience, education, languages } = data
  const facts = [
    { k: t.facts.now, v: `${experience[0].role}, ${experience[0].company}` },
    { k: t.facts.education, v: `${t.educationFact}, ${education.short}` },
    { k: t.facts.languages, v: languages.map((l) => `${l.name} ${l.level.toLowerCase()}`).join(" · ") },
  ]

  return (
    <section id="sobre" className="scroll-mt-16 border-t border-line py-24 md:py-32">
      <Wrap className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionLabel index="01">{t.sections.about}</SectionLabel>
          <dl className="mt-10 space-y-6">
            {facts.map((f) => (
              <div key={f.k}>
                <dt className="label text-muted">{f.k}</dt>
                <dd className="mt-1.5 text-[1rem]">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-8">
          <blockquote className="border-l-2 border-cold pl-6 font-heading text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.15] italic">
            {profile.pullQuote}
          </blockquote>
          <div className="mt-12 max-w-2xl space-y-5 text-muted">
            {profile.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  )
}
