import type { Operation, KeyConfig } from '../types/calculator.types'

export const MAX_LENGTH = 9
export const MAX_VALUE = 999999999
export const ERROR_TEXT = 'ERROR'
export const INITIAL_DISPLAY = '0'

export const OPERATIONS: Operation[] = ['+', '-', '×', '÷', '%']

export const KEYBOARD_LAYOUT: KeyConfig[] = [
  { label: 'C', variant: 'special', handler: 'clear', aria: 'clear' },
  { label: '+/−', variant: 'special', handler: 'toggleSign', aria: 'toggle sign' },
  { label: '%', variant: 'special', handler: 'operation', value: '%', aria: 'operation %' },
  { label: '÷', variant: 'operation', handler: 'operation', value: '÷', aria: 'operation ÷' },
  { label: '7', variant: 'number', handler: 'number', value: '7' },
  { label: '8', variant: 'number', handler: 'number', value: '8' },
  { label: '9', variant: 'number', handler: 'number', value: '9' },
  { label: '×', variant: 'operation', handler: 'operation', value: '×', aria: 'operation ×' },
  { label: '4', variant: 'number', handler: 'number', value: '4' },
  { label: '5', variant: 'number', handler: 'number', value: '5' },
  { label: '6', variant: 'number', handler: 'number', value: '6' },
  { label: '−', variant: 'operation', handler: 'operation', value: '-', aria: 'operation -' },
  { label: '1', variant: 'number', handler: 'number', value: '1' },
  { label: '2', variant: 'number', handler: 'number', value: '2' },
  { label: '3', variant: 'number', handler: 'number', value: '3' },
  { label: '+', variant: 'operation', handler: 'operation', value: '+', aria: 'operation +' },
  { label: '0', variant: 'number', handler: 'number', value: '0', wide: true, aria: '0' },
  { label: '.', variant: 'number', handler: 'decimal', aria: 'decimal' },
  { label: '=', variant: 'equal', handler: 'equal', aria: 'equals' }
]
