import { useState } from "react"
import { identity } from "@/data/resume"
import { useI18n } from "@/i18n"
import { cn } from "@/lib/utils"

/** Foto em cores, com leve sombra na base. Sem foto, mostra as iniciais. */
export function Portrait({ className }: { className?: string }) {
  const { t } = useI18n()
  const [failed, setFailed] = useState(!identity.photo)

  return (
    <figure className={cn("group relative aspect-[4/5] overflow-hidden border border-line bg-deep-2", className)}>
      {failed ? (
        <div className="flex size-full items-center justify-center font-heading text-8xl text-cold">EG</div>
      ) : (
        <>
          <img
            src={identity.photo}
            alt={t.photoAlt}
            onError={() => setFailed(true)}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <span className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night/60 to-transparent" aria-hidden />
        </>
      )}
    </figure>
  )
}
