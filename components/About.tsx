'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './About.module.css'

const stats = [
    { value: '10+', label: 'Anos de experiência' },
    { value: '200+', label: 'Projetos realizados' },
    { value: '50+', label: 'Estabelecimentos atendidos' },
    { value: '98%', label: 'Clientes satisfeitos' },
]

const certifications = [
    'WSET Level 3 Award in Wines',
    'Court of Master Sommeliers',
    'Associação Brasileira de Sommeliers',
    'Certificação em Harmonização Avançada',
]

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    }

    return (
        <section id="sobre" className={styles.about} ref={ref}>
            <div className={styles.container}>
                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Coluna da foto / identidade */}
                    <motion.div className={styles.imageCol} variants={itemVariants}>
                        <div className={styles.photoWrapper}>
                            <div className={styles.photoPlaceholder}>
                                <span className={styles.monogram}>LQ</span>
                            </div>
                            <div className={styles.photoBadge}>
                                <span>✦</span> Sommelière Certificada
                            </div>
                        </div>

                        <div className={styles.certifications}>
                            <h4 className={styles.certTitle}>Certificações</h4>
                            <ul className={styles.certList}>
                                {certifications.map((cert, i) => (
                                    <li key={i} className={styles.certItem}>
                                        <span className={styles.certDot} />
                                        {cert}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Coluna do texto */}
                    <motion.div className={styles.textCol} variants={itemVariants}>
                        <motion.span className={styles.eyebrow} variants={itemVariants}>
                            Sobre mim
                        </motion.span>
                        <motion.h2 className={styles.title} variants={itemVariants}>
                            Paixão por vinhos transformada em{' '}
                            <span className={styles.highlight}>resultados reais</span> para o seu negócio.
                        </motion.h2>
                        <motion.p className={styles.text} variants={itemVariants}>
                            Sou Luciana Queiroz, sommelière com mais de uma década dedicada ao universo dos vinhos.
                            Minha trajetória passou por grandes restaurantes, hotéis boutique e vinícolas premium,
                            o que me deu uma visão única — tanto do lado técnico quanto do lado do cliente.
                        </motion.p>
                        <motion.p className={styles.text} variants={itemVariants}>
                            Hoje, canalizo toda essa experiência para ajudar estabelecimentos a construírem uma
                            identidade sólida no mundo dos vinhos: desde a curadoria da carta até treinamentos
                            de equipe e eventos de harmonização. Cada projeto é tratado com personalidade própria,
                            porque acredito que o vinho certo conta a história certa.
                        </motion.p>

                        {/* Stats */}
                        <motion.div className={styles.stats} variants={containerVariants}>
                            {stats.map((stat, i) => (
                                <motion.div key={i} className={styles.statItem} variants={itemVariants}>
                                    <span className={styles.statValue}>{stat.value}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.a
                            href="#contato"
                            className={styles.cta}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Vamos conversar
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}