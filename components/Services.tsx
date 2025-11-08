import styles from './Services.module.css'

const services = [
  {
    title: 'Projete seu negócio no mundo dos vinhos de forma estratégica',
    description: 'Vamos entender juntos a melhor estratégia para desenvolver sua carta de vinhos e harmonizações.',
    icon: '🍷'
  },
  {
    title: 'Amplifique a experiência dos seus clientes',
    description: 'Combinamos conhecimento técnico e sensibilidade sob medida para construir uma experiência eficiente, com a sua identidade.',
    icon: '✨'
  },
  {
    title: 'Conte com meu suporte humanizado',
    description: 'Estou preparada para enfrentar novos desafios todos os dias com você, lado a lado.',
    icon: '🤝'
  }
]

export default function Services() {
  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Produtos e serviços que maximizam a experiência do cliente, 
            feito por quem entende do assunto.
          </h2>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.belief}>
          <p className={styles.beliefText}>
            A <span className={styles.beliefHighlight}>Luciana Queiroz</span> acredita que o conhecimento 
            e a paixão pelos vinhos revolucionam experiências e a nossa missão é tornar isso possível para você.
          </p>
        </div>
      </div>
    </section>
  )
}

