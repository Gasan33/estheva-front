import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';

export default function Index({ data, isActive, setSelectedIndicator }) {
  console.log(data)
  const { name, path, id } = data;

  return (
    <motion.div className={styles.link} onMouseEnter={() => { setSelectedIndicator(href) }} custom={id} variants={slide} initial="initial" animate="enter" exit="exit">
      <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={styles.indicator}></motion.div>
      <Link href={path}>{name}</Link>
    </motion.div>
  )
}