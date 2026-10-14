import { cn } from "@/lib/utils"

/**
 * Traço vermelho com leve ondulação, como uma linha puxada à caneta.
 * Usado só em links de ação (ver design-system.json > imperfections.handDrawnStroke).
 * Cresce quando o link pai (com a classe `group`) recebe hover.
 */
export function Stroke({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 8"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
      className={cn(
        "h-2 w-9 shrink-0 text-ember transition-[width] duration-300 group-hover:w-14 motion-reduce:transition-none",
        className
      )}
    >
      <path
        d="M1 4.6C9 3.3 15 5.4 23 4.2s14-1.6 21-.2c5 1 9 .9 15-.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
