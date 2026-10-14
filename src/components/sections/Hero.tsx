import { identity } from "@/data/resume"
import { useI18n } from "@/i18n"
import { Wrap } from "@/components/layout"
import { Portrait } from "@/components/Portrait"
import { Stroke } from "@/components/Stroke"

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
          {/* Contraste de voz: primeiro nome em itálico leve, sobrenome em romano pesado */}
          <h1 className="text-[clamp(3.6rem,11vw,7.5rem)] leading-[0.9] tracking-[-0.02em]">
            <span className="block font-normal italic">{first}</span>
            <span className="block pl-[0.35em] text-cold">{rest.join(" ")}</span>
          </h1>

          <p className="label mt-8 text-muted">{t.tagline}</p>
          <p className="mt-4 max-w-md text-[1.05rem] text-muted">{data.profile.headline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
            <a href="#trajetoria" className="group inline-flex items-center gap-4 text-[0.95rem] font-medium">
              {t.seePath}
              <Stroke />
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
          <div className="relative w-full max-w-[20rem] sm:max-w-[22rem] lg:mr-6">
            {/* moldura "fora de registro", como impressão desalinhada */}
            <span
              className="absolute inset-0 translate-x-3.5 translate-y-[18px] rotate-[1.2deg] border border-cold/45"
              aria-hidden
            />
            <Portrait className="relative w-full" />
          </div>
        </div>
      </Wrap>
    </section>
  )
}
