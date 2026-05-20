import type { ButtonVariant } from '../../types/calculator.types'

export const variantClasses: Record<ButtonVariant, string> = {
  number: [
    'bg-white/10 hover:bg-white/20 text-white',
    'border border-white/10 hover:border-white/25',
    'hover:shadow-[0_0_16px_rgba(255,255,255,0.15)]'
  ].join(' '),
  operation: [
    'bg-purple-500/20 hover:bg-purple-500/35 text-purple-300',
    'border border-purple-500/25 hover:border-purple-400/40',
    'hover:shadow-[0_0_16px_rgba(168,85,247,0.35)]'
  ].join(' '),
  equal: [
    'bg-gradient-to-br from-purple-600 to-cyan-500 text-white',
    'border border-purple-400/30',
    'hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]'
  ].join(' '),
  special: [
    'bg-white/8 hover:bg-white/15 text-slate-300',
    'border border-white/8 hover:border-white/20'
  ].join(' ')
}
