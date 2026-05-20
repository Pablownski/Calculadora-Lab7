import { MAX_LENGTH, MAX_VALUE } from '../constants/calculator.constants'

export const isOverflow = (value: number): boolean => value > MAX_VALUE
export const isNegative = (value: number): boolean => value < 0
export const isMaxLength = (str: string): boolean => str.replace('-', '').replace('.', '').length >= MAX_LENGTH
export const hasDecimal = (str: string): boolean => str.includes('.')
export const isDivisionByZero = (divisor: number): boolean => divisor === 0

export const isInvalidResult = (value: number): boolean =>
  isNegative(value) || isOverflow(value) || !isFinite(value)
