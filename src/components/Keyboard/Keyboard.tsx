import { Button } from '../Button'
import type { KeyboardProps, KeyConfig, Operation } from '../../types/calculator.types'
import { KEYBOARD_LAYOUT } from '../../constants/calculator.constants'
const resolve = (k: KeyConfig, p: KeyboardProps) => {
  if (k.handler === 'number') return () => p.onNumber(k.value!)
  if (k.handler === 'operation') return () => p.onOperation(k.value as Operation)
  if (k.handler === 'equal') return p.onEqual
  if (k.handler === 'clear') return p.onClear
  if (k.handler === 'toggleSign') return p.onToggleSign
  return p.onDecimal
}
export const Keyboard = (props: KeyboardProps) => (
  <div className="grid grid-cols-4 gap-2 p-3" role="group" aria-label="Calculator keyboard">
    {KEYBOARD_LAYOUT.map(k => (
      <Button key={k.label + k.handler} label={k.label} onClick={resolve(k, props)}
        variant={k.variant} wide={k.wide} aria-label={k.aria} />
    ))}
  </div>
)
