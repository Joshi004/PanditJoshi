import { motion } from 'framer-motion'

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
}

/**
 * Reusable scroll-reveal wrapper.
 * Wraps children in a motion.div that animates when scrolled into view.
 */
export default function AnimatedSection({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  as: Tag = 'div',
}) {
  const MotionTag = motion[Tag] || motion.div

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Container that staggers children animations.
 * Use with AnimatedItem for individual staggered children.
 */
export function StaggerContainer({ children, className = '', staggerDelay = 0.1, delayChildren = 0.1 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Individual item within a StaggerContainer.
 */
export function AnimatedItem({ children, className = '', variant = 'fadeUp' }) {
  return (
    <motion.div className={className} variants={variants[variant]}>
      {children}
    </motion.div>
  )
}
