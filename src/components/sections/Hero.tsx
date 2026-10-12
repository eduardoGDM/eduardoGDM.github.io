import { identity } from "@/data/resume"
import { useI18n } from "@/i18n"
import { Wrap } from "@/components/layout"
import { Portrait } from "@/components/Portrait"

export function Hero() {
  const { t, data } = useI18n()
  const [first, ...rest] = identity.name.split(" ")

  return (
    <section id="topo" className="relative overflow-hidden">
      {/* painel azul à direita, com a borda esquerda se dissolvendo no preto */}
      <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-deep lg:block" aria-hidden>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[var(--fade)] to-transparent" />
      </div>

      <Wrap className="relative grid items-center gap-12 py-12 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-12 lg:py-20">
        <div className="reveal order-2 lg:order-1 lg:col-span-7">
          <h1 className="text-[clamp(3.6rem,11vw,7.25rem)] leading-[0.92] tracking-[-0.015em]">
            <span className="block">{first}</span>
            <span className="block text-cold">{rest.join(" ")}</span>
          </h1>

          <p className="label mt-8 text-muted">{t.tagline}</p>
          <p className="mt-4 max-w-md text-[1.05rem] text-muted">{data.profile.headline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
            <a href="#trajetoria" className="group inline-flex items-center gap-4 text-[0.95rem] font-medium">
              {t.seePath}
              <span className="h-px w-8 bg-ember transition-all duration-300 group-hover:w-14" aria-hidden />
            </a>
            <a href={identity.cvPdf} download className="link-line text-[0.95rem] text-muted hover:text-text">
              {t.downloadCv}
            </a>
          </div>
        </div>

        <div
          className="reveal order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end"
          style={{ animationDelay: "120ms" }}
        >
          <Portrait className="w-full max-w-[20rem] sm:max-w-[22rem]" />
        </div>
      </Wrap>
    </section>
  )
}
