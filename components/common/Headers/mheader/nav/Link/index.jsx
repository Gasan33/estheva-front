import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';

export default function Index({ data, isActive, setSelectedIndicator }) {
  const { name, path, id, cat } = data;

  return (
    <motion.div className={styles.link} custom={id} variants={slide} initial="initial" animate="enter" exit="exit">
      <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={styles.indicator}></motion.div>
      <Link href={cat ? {
        pathname: `/treatments/categories/${path}`,
        query: { id: id, name: name }
      } : path}>{name}</Link>
    </motion.div>
  )
}