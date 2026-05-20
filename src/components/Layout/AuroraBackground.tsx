import type { ReactNode } from 'react'

interface Props { children: ReactNode }

const AURORA_CLS = [
  'absolute inset-0 animate-aurora bg-[length:400%_400%]',
  'bg-gradient-to-br from-purple-950 via-slate-950 to-cyan-950 opacity-80'
].join(' ')

const ORBS = [
  'absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl animate-pulse',
  'absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-600/15 blur-3xl animate-pulse delay-1000'
]

export const AuroraBackground = ({ children }: Props) => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 p-4">
    <div className={AURORA_CLS} />
    {ORBS.map((cls, i) => <div key={i} className={cls} />)}
    <div className="relative z-10 w-full">{children}</div>
  </div>
)
