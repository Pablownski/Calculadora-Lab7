import { Display } from '../Display'
import { Keyboard } from '../Keyboard'
import { GlassCard } from '../Layout/GlassCard'
import { useCalculator } from '../../hooks/useCalculator'
export const Calculator = () => {
  const { display, inputNumber, inputDecimal, setOperation, calculate, clear, toggleSign } = useCalculator()
  return (
    <GlassCard>
      <Display value={display} />
      <Keyboard onNumber={inputNumber} onOperation={setOperation} onEqual={calculate}
        onClear={clear} onToggleSign={toggleSign} onDecimal={inputDecimal} />
    </GlassCard>
  )
}
