import { motion, AnimatePresence } from 'framer-motion'
import type { DisplayProps } from '../../types/calculator.types'
import { ERROR_TEXT } from '../../constants/calculator.constants'
const isErr = (v: string) => v === ERROR_TEXT
const anim = (v: string) => isErr(v) ? { opacity: 1, y: 0, x: [0, -8, 8, -6, 6, 0] } : { opacity: 1, y: 0 }
const cls = (v: string) => [
  'font-mono font-bold select-none leading-none',
  v.length > 7 ? 'text-2xl' : 'text-4xl',
  isErr(v) ? 'text-red-400 drop-shadow-[0_0_12px_rgba(248,113,113,0.8)]' : 'text-white'
].join(' ')
export const Display = ({ value }: DisplayProps) => (
  <div className="w-full px-4 py-3 flex items-end justify-end" aria-label="Calculator display" role="status">
    <AnimatePresence mode="wait">
      <motion.span key={value} initial={{ opacity: 0, y: -10 }} animate={anim(value)}
        exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className={cls(value)}>
        {value}
      </motion.span>
    </AnimatePresence>
  </div>
)
