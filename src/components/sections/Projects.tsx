import { useI18n } from "@/i18n"
import { SectionHead, Wrap } from "@/components/layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Projects() {
  const { t, data } = useI18n()
  const projects = data.projects

  return (
    <section id="projetos" className="scroll-mt-16 border-t border-line py-24 md:py-32">
      <Wrap>
        <SectionHead index="05" label={t.sections.projects} title={t.projectsTitle} />
        <p className="mt-5 max-w-xl text-muted">{t.projectsIntro}</p>

        <Tabs defaultValue={projects[0].id} className="mt-14 gap-0">
          <TabsList
            variant="line"
            aria-label={t.projectTabs}
            className="grid h-auto w-full grid-cols-1 gap-x-10 rounded-none p-0 group-data-horizontal/tabs:h-auto sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((p, i) => (
              <TabsTrigger
                key={p.id}
                value={p.id}
                className="h-auto w-full flex-none cursor-pointer justify-start gap-3 rounded-none border-0 border-b border-line px-0 pt-4 pb-3 text-left font-heading text-[clamp(1.25rem,2.2vw,1.55rem)] font-medium text-muted hover:text-text focus-visible:ring-0 data-active:text-text dark:text-muted dark:data-active:text-text after:bg-ember group-data-horizontal/tabs:after:bottom-[-1px] group-data-horizontal/tabs:after:h-px"
              >
                <span className="font-sans text-xs tabular-nums text-cold">{String(i + 1).padStart(2, "0")}</span>
                {p.tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {projects.map((p) => (
            <TabsContent key={p.id} value={p.id} className="pt-12 text-base">
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-5">
                  <p className="label text-cold">{p.kind}</p>
                  <h3 className="mt-4 text-[clamp(2rem,4vw,2.75rem)] leading-[1.05]">{p.title}</h3>
                  <p className="mt-5 text-muted">{p.summary}</p>

                  <dl className="mt-8 space-y-5 border-t border-line pt-6">
                    <div>
                      <dt className="label text-muted">{t.audience}</dt>
                      <dd className="mt-1.5">{p.audience}</dd>
                    </div>
                    {p.tech.length > 0 && (
                      <div>
                        <dt className="label text-muted">{t.tech}</dt>
                        <dd className="mt-1.5 text-cold">{p.tech.join(" · ")}</dd>
                      </div>
                    )}
                  </dl>

                  {p.links.length > 0 && (
                    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-3 text-[0.95rem] font-medium"
                        >
                          {l.label}
                          <span className="h-px w-6 bg-ember transition-all duration-300 group-hover:w-10" aria-hidden />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-7">
                  <p className="label text-muted">{t.features}</p>
                  <ol className="mt-4 grid gap-x-10 sm:grid-cols-2">
                    {p.features.map((f, i) => (
                      <li key={f.title} className="border-t border-line py-6">
                        <span className="text-sm text-cold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                        <h4 className="mt-2 font-heading text-[1.5rem] leading-tight">{f.title}</h4>
                        <p className="mt-2 text-muted">{f.text}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Wrap>
    </section>
  )
}
