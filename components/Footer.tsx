import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.logo}>
              <span className={styles.monogram}>LQ</span>
              <div className={styles.logoText}>
                <span className={styles.name}>LUCIANA QUEIROZ</span>
                <span className={styles.title}>Sommelière</span>
              </div>
            </h3>
            <p className={styles.description}>
              Experiências únicas em vinhos e harmonizações, 
              feitas por quem entende do assunto.
            </p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Navegação</h4>
            <nav className={styles.nav}>
              <a href="#home">Home</a>
              <a href="#servicos">Serviços</a>
              <a href="#sobre">Sobre</a>
              <a href="#contato">Contato</a>
            </nav>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Contato</h4>
            <div className={styles.contact}>
              <p>Email: contato@lucianaqueiroz.com</p>
              <p>WhatsApp: (21) 99999-9999</p>
            </div>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Siga meu trabalho</h4>
            <div className={styles.social}>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Vamos começar juntos um projeto?</h2>
          <a href="#contato" className={styles.ctaButton}>
            Conecte-se comigo
          </a>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Luciana Queiroz. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

