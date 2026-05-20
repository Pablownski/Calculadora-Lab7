import { Button } from '../Button'
import type { Operation } from '../../types/calculator.types'

interface Props {
  onOperation: (op: Operation) => void
}

const OPS: { label: string; op: Operation }[] = [
  { label: '+', op: '+' },
  { label: '−', op: '-' },
  { label: '×', op: '×' },
  { label: '÷', op: '÷' },
  { label: '%', op: '%' }
]

export const OperationButtons = ({ onOperation }: Props) => (
  <>
    {OPS.map(({ label, op }) => (
      <Button
        key={op}
        label={label}
        onClick={() => onOperation(op)}
        variant="operation"
        aria-label={`operation ${op}`}
      />
    ))}
  </>
)
