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
    <section id="sobre" className="scroll-mt-16 border-t border-line pt-24 pb-28 md:pt-28 md:pb-36">
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
          {/* aspas penduradas fora da margem do texto */}
          <blockquote className="relative font-heading text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.15] font-medium italic">
            <span className="absolute top-0 -left-[0.45em] text-cold" aria-hidden>
              “
            </span>
            {profile.pullQuote}
          </blockquote>
          <div className="mt-12 max-w-2xl space-y-5 text-muted">
            {profile.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-16">
            <p className="label text-cold">{t.offline}</p>
            <p className="mt-4 max-w-2xl text-muted">{profile.offline.intro}</p>
            <ul className="mt-8 grid gap-x-10 sm:grid-cols-3">
              {profile.offline.items.map((h) => (
                <li key={h.name} className="border-t border-line py-5">
                  <p className="label text-muted">
                    {h.since ? (
                      <>
                        {t.since} <span className="text-cold tabular-nums">{h.since}</span>
                      </>
                    ) : (
                      t.routine
                    )}
                  </p>
                  <p className="mt-2 font-heading text-[1.75rem] leading-tight">{h.name}</p>
                  <p className="mt-1 text-[0.95rem] text-muted">{h.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrap>
    </section>
  )
}
