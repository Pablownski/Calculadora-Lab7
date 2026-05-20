import { useState, useCallback } from 'react'
import type { CalculatorState, Operation } from '../types/calculator.types'
import { calculate } from '../utils/math'
import { isInvalidResult, hasDecimal, isDivisionByZero } from '../utils/validations'
import { truncateDecimal } from '../utils/formatter'
import { ERROR_TEXT, INITIAL_DISPLAY, MAX_LENGTH } from '../constants/calculator.constants'

const INITIAL_STATE: CalculatorState = {
  display: INITIAL_DISPLAY,
  currentValue: INITIAL_DISPLAY,
  previousValue: '',
  operation: null,
  overwrite: false
}

const applyOperation = (prev: string, curr: string, op: Operation): string => {
  const a = parseFloat(prev)
  const b = parseFloat(curr)
  if (op === '÷' && isDivisionByZero(b)) return ERROR_TEXT
  const result = calculate(a, b, op)
  if (isInvalidResult(result)) return ERROR_TEXT
  return truncateDecimal(result)
}

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>(INITIAL_STATE)

  const inputNumber = useCallback((digit: string) => {
    setState(prev => {
      if (prev.display === ERROR_TEXT) return prev
      const base = prev.overwrite ? '' : prev.currentValue === '0' ? '' : prev.currentValue
      const next = base + digit
      const digits = next.replace('-', '').replace('.', '')
      if (digits.length > MAX_LENGTH) return prev
      return { ...prev, currentValue: next, display: next, overwrite: false }
    })
  }, [])

  const inputDecimal = useCallback(() => {
    setState(prev => {
      if (prev.display === ERROR_TEXT) return prev
      const base = prev.overwrite ? '0' : prev.currentValue
      if (hasDecimal(base)) return prev
      const next = base + '.'
      return { ...prev, currentValue: next, display: next, overwrite: false }
    })
  }, [])

  const setOperation = useCallback((op: Operation) => {
    setState(prev => {
      if (prev.display === ERROR_TEXT) return prev
      if (prev.previousValue && prev.operation && !prev.overwrite) {
        const result = applyOperation(prev.previousValue, prev.currentValue, prev.operation)
        if (result === ERROR_TEXT) return { ...INITIAL_STATE, display: ERROR_TEXT }
        return { display: result, currentValue: result, previousValue: result, operation: op, overwrite: true }
      }
      return { ...prev, previousValue: prev.currentValue, operation: op, overwrite: true }
    })
  }, [])

  const calculate_ = useCallback(() => {
    setState(prev => {
      if (!prev.operation || !prev.previousValue) return prev
      if (prev.display === ERROR_TEXT) return prev
      const result = applyOperation(prev.previousValue, prev.currentValue, prev.operation)
      if (result === ERROR_TEXT) return { ...INITIAL_STATE, display: ERROR_TEXT }
      return {
        display: result,
        currentValue: result,
        previousValue: prev.currentValue,
        operation: prev.operation,
        overwrite: true
      }
    })
  }, [])

  const clear = useCallback(() => setState(INITIAL_STATE), [])

  const toggleSign = useCallback(() => {
    setState(prev => {
      if (prev.display === ERROR_TEXT || prev.currentValue === '0') return prev
      const toggled = prev.currentValue.startsWith('-')
        ? prev.currentValue.slice(1)
        : '-' + prev.currentValue
      if (toggled.replace('-', '').replace('.', '').length > MAX_LENGTH) return prev
      return { ...prev, currentValue: toggled, display: toggled }
    })
  }, [])

  return { display: state.display, inputNumber, inputDecimal, setOperation, calculate: calculate_, clear, toggleSign }
}
