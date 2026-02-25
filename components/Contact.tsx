'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Contact.module.css'

const services = [
    'Carta de vinhos',
    'Harmonização personalizada',
    'Treinamento de equipe',
    'Evento especial',
    'Consultoria estratégica',
    'Outro',
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const [formState, setFormState] = useState<FormState>('idle')
    const [form, setForm] = useState({
        name: '',
        email: '',
        whatsapp: '',
        service: '',
        message: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault()
        setFormState('loading')

        // Simulação de envio — substitua por fetch para seu backend / Resend / Formspree
        await new Promise((r) => setTimeout(r, 1500))
        setFormState('success')
    }

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
    }

    return (
        <section id="contato" className={styles.contact} ref={ref}>
            <div className={styles.container}>
                <motion.div
                    className={styles.inner}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Lado esquerdo — info */}
                    <motion.div className={styles.info} variants={itemVariants}>
                        <span className={styles.eyebrow}>Fale comigo</span>
                        <h2 className={styles.title}>
                            Vamos construir algo <span className={styles.highlight}>incrível</span> juntos?
                        </h2>
                        <p className={styles.subtitle}>
                            Preencha o formulário ou me chame diretamente. Responderei em até 24 horas.
                        </p>

                        <div className={styles.channels}>
                            <a
                                href="mailto:contato@lucianaqueiroz.com"
                                className={styles.channelItem}
                            >
                                <span className={styles.channelIcon}>✉️</span>
                                <div>
                                    <strong>E-mail</strong>
                                    <span>contato@lucianaqueiroz.com</span>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/5521999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.channelItem}
                            >
                                <span className={styles.channelIcon}>💬</span>
                                <div>
                                    <strong>WhatsApp</strong>
                                    <span>(21) 99999-9999</span>
                                </div>
                            </a>

                            <div className={styles.channelItem}>
                                <span className={styles.channelIcon}>📍</span>
                                <div>
                                    <strong>Localização</strong>
                                    <span>Rio de Janeiro, RJ — atendimento remoto e presencial</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Lado direito — formulário */}
                    <motion.div className={styles.formWrapper} variants={itemVariants}>
                        {formState === 'success' ? (
                            <motion.div
                                className={styles.successBox}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <span className={styles.successIcon}>🥂</span>
                                <h3>Mensagem enviada!</h3>
                                <p>Obrigada pelo contato. Retornarei em breve para começarmos algo especial.</p>
                                <button
                                    className={styles.resetBtn}
                                    onClick={() => {
                                        setFormState('idle')
                                        setForm({ name: '', email: '', whatsapp: '', service: '', message: '' })
                                    }}
                                >
                                    Enviar outra mensagem
                                </button>
                            </motion.div>
                        ) : (
                            <div className={styles.form}>
                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <label htmlFor="name">Nome completo *</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Seu nome"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="email">E-mail *</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="seu@email.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <label htmlFor="whatsapp">WhatsApp</label>
                                        <input
                                            id="whatsapp"
                                            name="whatsapp"
                                            type="tel"
                                            placeholder="(00) 00000-0000"
                                            value={form.whatsapp}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="service">Serviço de interesse *</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={form.service}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Selecione...</option>
                                            {services.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="message">Mensagem *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Conte um pouco sobre seu negócio e o que você precisa..."
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <motion.button
                                    className={styles.submitBtn}
                                    onClick={handleSubmit}
                                    disabled={formState === 'loading'}
                                    whileHover={{ scale: formState === 'loading' ? 1 : 1.02 }}
                                    whileTap={{ scale: formState === 'loading' ? 1 : 0.97 }}
                                >
                                    {formState === 'loading' ? (
                                        <span className={styles.spinner} />
                                    ) : (
                                        'Enviar mensagem'
                                    )}
                                </motion.button>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}