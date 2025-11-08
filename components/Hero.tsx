import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Olá, sou a <span className={styles.highlight}>Luciana</span>!
          </h1>
          <h2 className={styles.subtitle}>
            Crio experiências únicas em vinhos e harmonizações para o seu negócio.
          </h2>
          <p className={styles.description}>
            Traduzo sua paixão por vinhos em experiências memoráveis que ampliam a presença 
            do seu estabelecimento. Desde a seleção até a harmonização, desenvolvo tudo de 
            forma personalizada, combinando conhecimento técnico e sensibilidade para aumentar 
            a relevância dos meus clientes no mundo dos vinhos.
          </p>
          <a href="#contato" className={styles.ctaButton}>
            Quero minha experiência
          </a>
        </div>
      </div>
      <div className={styles.wave}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" fill="var(--burgundy)" />
        </svg>
      </div>
    </section>
  )
}

