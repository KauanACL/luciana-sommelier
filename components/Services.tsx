'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Services.module.css'

const services = [
  {
    title: 'Projete seu negócio no mundo dos vinhos de forma estratégica',
    description: 'Vamos entender juntos a melhor estratégia para desenvolver sua carta de vinhos e harmonizações.',
    icon: '🍷',
  },
  {
    title: 'Amplifique a experiência dos seus clientes',
    description: 'Combinamos conhecimento técnico e sensibilidade sob medida para construir uma experiência eficiente, com a sua identidade.',
    icon: '✨',
  },
  {
    title: 'Conte com meu suporte humanizado',
    description: 'Estou preparada para enfrentar novos desafios todos os dias com você, lado a lado.',
    icon: '🤝',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="servicos" className={styles.services} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Produtos e serviços que maximizam a experiência do cliente,{' '}
            feito por quem entende do assunto.
          </h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 14px 36px rgba(106, 27, 61, 0.18)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className={styles.icon} aria-hidden="true">{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.belief}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className={styles.beliefText}>
            A <span className={styles.beliefHighlight}>Luciana Queiroz</span> acredita que o conhecimento
            e a paixão pelos vinhos revolucionam experiências e a nossa missão é tornar isso possível para você.
          </p>
        </motion.div>
      </div>
    </section>
  )
}