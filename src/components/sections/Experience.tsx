import { useState } from "react"
import type { Job } from "@/data/resume"
import { useI18n } from "@/i18n"
import { SectionHead, Wrap } from "@/components/layout"
import { Button } from "@/components/ui/button"

const VISIBLE = 5

function JobEntry({ job, current }: { job: Job; current: boolean }) {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const hidden = job.highlights.length - VISIBLE
  const items = open ? job.highlights : job.highlights.slice(0, VISIBLE)

  return (
    <li className="grid gap-6 border-t border-line py-12 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-4">
        <p className="label text-muted">
          {job.start} — <span className={current ? "text-ember" : undefined}>{job.end}</span>
        </p>
        <h3 className="mt-3 text-[clamp(2rem,4vw,2.75rem)] leading-none">{job.company}</h3>
        <p className="mt-2 text-cold">{job.role}</p>
      </div>

      <div className="lg:col-span-8">
        {job.intro && <p className="max-w-[62ch]">{job.intro}</p>}

        <ul className={job.intro ? "mt-5 max-w-[62ch] space-y-2" : "max-w-[62ch] space-y-2"}>
          {items.map((h) => (
            <li key={h} className="grid grid-cols-[1.25rem_1fr] text-muted">
              <span aria-hidden>–</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {hidden > 0 && (
          <Button
            variant="ghost"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="label mt-4 h-auto px-0 py-1 text-cold hover:bg-transparent hover:text-text"
          >
            {open ? t.less : t.more(hidden)}
          </Button>
        )}

        <p className="mt-6 text-sm text-muted">{job.tech.join(" · ")}</p>
      </div>
    </li>
  )
}

export function Experience() {
  const { t, data } = useI18n()

  return (
    <section id="trajetoria" className="scroll-mt-16 border-t border-line bg-surface py-24 md:py-32">
      <Wrap>
        <SectionHead index="04" label={t.sections.path} title={t.pathTitle} />

        <ol className="mt-16 border-b border-line">
          {data.experience.map((job, i) => (
            <JobEntry key={job.company} job={job} current={i === 0} />
          ))}
        </ol>
      </Wrap>
    </section>
  )
}
