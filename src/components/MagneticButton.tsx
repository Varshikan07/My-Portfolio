import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
export function MagneticButton({ children, href = '#', variant = 'light' }: { children: ReactNode; href?: string; variant?: 'light' | 'outline' }) {
 return <motion.a href={href} className={`button ${variant}`} whileHover={{ scale: 1.035 }} whileTap={{ scale: .97 }}><span>{children}</span><i>↗</i></motion.a>
}
