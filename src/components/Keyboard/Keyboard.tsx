import { Button } from '../Button'
import type { KeyboardProps } from '../../types/calculator.types'

export const Keyboard = ({ onNumber, onOperation, onEqual, onClear, onToggleSign, onDecimal }: KeyboardProps) => (
  <div className="grid grid-cols-4 gap-2 p-3" role="group" aria-label="Calculator keyboard">
    <Button label="C" onClick={onClear} variant="special" aria-label="clear" />
    <Button label="+/−" onClick={onToggleSign} variant="special" aria-label="toggle sign" />
    <Button label="%" onClick={() => onOperation('%')} variant="special" aria-label="operation %" />
    <Button label="÷" onClick={() => onOperation('÷')} variant="operation" aria-label="operation ÷" />

    <Button label="7" onClick={() => onNumber('7')} variant="number" />
    <Button label="8" onClick={() => onNumber('8')} variant="number" />
    <Button label="9" onClick={() => onNumber('9')} variant="number" />
    <Button label="×" onClick={() => onOperation('×')} variant="operation" aria-label="operation ×" />

    <Button label="4" onClick={() => onNumber('4')} variant="number" />
    <Button label="5" onClick={() => onNumber('5')} variant="number" />
    <Button label="6" onClick={() => onNumber('6')} variant="number" />
    <Button label="−" onClick={() => onOperation('-')} variant="operation" aria-label="operation -" />

    <Button label="1" onClick={() => onNumber('1')} variant="number" />
    <Button label="2" onClick={() => onNumber('2')} variant="number" />
    <Button label="3" onClick={() => onNumber('3')} variant="number" />
    <Button label="+" onClick={() => onOperation('+')} variant="operation" aria-label="operation +" />

    <Button label="0" onClick={() => onNumber('0')} variant="number" wide aria-label="0" />
    <Button label="." onClick={onDecimal} variant="number" aria-label="decimal" />
    <Button label="=" onClick={onEqual} variant="equal" aria-label="equals" />
  </div>
)
