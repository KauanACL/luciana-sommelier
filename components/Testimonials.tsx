'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    text: 'A Luciana foi a melhor parceira que já tivemos aqui no restaurante. Além de excelente profissional, virou amiga. Fizemos diversos projetos com ela, desde a seleção da carta até harmonizações especiais e ficou tudo ótimo. O que diferencia ela de outros profissionais é o pós-atendimento. É encantador!',
    author: 'Rodrigo Belém',
    role: 'Diretor | Restaurante Bom Prato',
    initials: 'RB',
  },
  {
    text: 'Eu trabalho com a Luciana há mais de um ano e ela é muito boa, focada na excelência das entregas e atendimento. Com o objetivo de ajudar, atender e desenvolver produtos que melhorem o meu negócio e isso não tem preço.',
    author: 'Elias Maman',
    role: 'Empresário | Vinícola Premium',
    initials: 'EM',
  },
  {
    text: 'Falar da Luciana é muito fácil, pois só tenho elogios a fazer. O que mais impressiona é a qualidade, não só de entrega que é realmente impressionante superando todas as expectativas, mas também pelo tratamento com o cliente, atenciosa e disponível.',
    author: 'Amanda Magalhães',
    role: 'Co-fundadora | Bistrô Oslo',
    initials: 'AM',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section className={styles.testimonials} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>O que estão falando sobre mim.</h2>
          <p className={styles.subtitle}>
            Conheça um pouco mais sobre a minha experiência de atendimento.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            >
              <div className={styles.quote} aria-hidden="true">&ldquo;</div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">{t.initials}</div>
                <div>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}