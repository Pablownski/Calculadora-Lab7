import { MAX_LENGTH } from '../constants/calculator.constants'

export const truncateDecimal = (value: number): string => {
  const str = String(Number(value.toFixed(8)))
  return str.length > MAX_LENGTH ? str.slice(0, MAX_LENGTH) : str
}

export const formatDisplay = (value: string): string => {
  if (value.length <= MAX_LENGTH) return value
  return value.slice(0, MAX_LENGTH)
}
