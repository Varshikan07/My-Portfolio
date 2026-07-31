import { motion } from 'framer-motion'
type Props = { eyebrow: string; title: string; copy?: string }
export function SectionHeading({ eyebrow, title, copy }: Props) { return <motion.header className="section-heading" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .7 }}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</motion.header> }
