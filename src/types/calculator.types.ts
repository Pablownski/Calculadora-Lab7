export type Operation = '+' | '-' | '×' | '÷' | '%'

export type ButtonVariant = 'number' | 'operation' | 'equal' | 'special'

export interface CalculatorState {
  display: string
  currentValue: string
  previousValue: string
  operation: Operation | null
  overwrite: boolean
}

export interface ButtonProps {
  label: string
  onClick: () => void
  variant?: ButtonVariant
  wide?: boolean
  'aria-label'?: string
}

export interface DisplayProps {
  value: string
}

export interface KeyboardProps {
  onNumber: (n: string) => void
  onOperation: (op: Operation) => void
  onEqual: () => void
  onClear: () => void
  onToggleSign: () => void
  onDecimal: () => void
}
