import type { ReactNode } from 'react'

interface Props { children: ReactNode }

export const GlassCard = ({ children }: Props) => (
  <div
    className={[
      'relative w-full max-w-sm mx-auto rounded-3xl overflow-hidden',
      'bg-white/5 backdrop-blur-xl',
      'border border-white/10',
      'shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)]'
    ].join(' ')}
  >
    {children}
  </div>
)
