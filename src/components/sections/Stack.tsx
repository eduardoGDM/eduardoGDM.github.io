import { useI18n } from "@/i18n"
import { SectionHead, Wrap } from "@/components/layout"

export function Stack() {
  const { t, data } = useI18n()

  return (
    <section id="stack" className="scroll-mt-16 border-t border-line py-24 md:py-32">
      <Wrap>
        <SectionHead index="03" label={t.sections.stack} title={t.stackTitle} />

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {data.stack.map((g) => (
            <div key={g.group}>
              <p className="label border-b border-line pb-3 text-cold">{g.group}</p>
              <ul className="mt-4 space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="text-[1.02rem] transition-colors hover:text-cold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
