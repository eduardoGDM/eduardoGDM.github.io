import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Contêiner padrão de largura do site. */
export function Wrap({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-4 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  )
}

/** Rótulo de seção: "01 — Sobre". */
export function SectionLabel({
  index,
  children,
  className,
}: {
  index: string
  children: ReactNode
  className?: string
}) {
  return (
    <p className={cn("label flex items-center gap-3 text-muted", className)}>
      <span className="text-cold">{index}</span>
      <span className="h-px w-6 bg-line" />
      <span>{children}</span>
    </p>
  )
}

/**
 * Cabeçalho de seção: rótulo pequeno + título grande em serifa.
 * `offset` recua o bloco em 2 de 12 colunas no desktop; as seções alternam
 * para quebrar o alinhamento repetido (ver design-system.json > layout.asymmetry).
 */
export function SectionHead({
  index,
  label,
  title,
  offset = false,
  className,
}: {
  index: string
  label: string
  title: ReactNode
  offset?: boolean
  className?: string
}) {
  return (
    <div className={cn(offset && "lg:pl-[16.666%]", className)}>
      <SectionLabel index={index}>{label}</SectionLabel>
      <h2 className="mt-5 text-[clamp(2.6rem,6vw,4.6rem)] leading-[1]">{title}</h2>
    </div>
  )
}
