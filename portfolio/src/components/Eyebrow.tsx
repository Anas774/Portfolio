import type { ReactNode } from 'react'

type EyebrowProps = {
  children: ReactNode
}

export function Eyebrow({ children }: EyebrowProps) {
  return <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[.18em] text-slate-400"><span className="size-2 rounded-full bg-lime-300 shadow-[0_0_14px_#bef264]" />{children}</div>
}
