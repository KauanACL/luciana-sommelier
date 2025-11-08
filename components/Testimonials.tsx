import styles from './Testimonials.module.css'

const testimonials = [
  {
    text: 'A Luciana foi a melhor parceira que já tivemos aqui no restaurante. Além de excelente profissional, virou amiga. Fizemos diversos projetos com ela, desde a seleção da carta até harmonizações especiais e ficou tudo ótimo. O que diferencia ela de outros profissionais é o pós-atendimento. É encantador! Se importa tanto com o cliente que faz parecer que também faz parte da equipe!',
    author: 'Rodrigo Belém',
    role: 'Diretor | Restaurante Bom Prato'
  },
  {
    text: 'Eu trabalho com a Luciana há mais de um ano e ela é muito boa, focada na excelência das entregas e atendimento. Com o objetivo de ajudar, atender e desenvolver produtos que melhorem o meu negócio e isso não tem preço.',
    author: 'Elias Maman',
    role: 'Empresário | Vinícola Premium'
  },
  {
    text: 'Falar da Luciana é muito fácil, pois só tenho elogios a fazer. O que mais impressiona é a qualidade, não só de entrega que é realmente impressionante superando todas as expectativas pelo nível elevadíssimo, mas também pelo tratamento com o cliente, atenciosa, disponível para resolver nossos problemas, fazendo os ajustes necessários nos fazendo sentir especiais.',
    author: 'Amanda Magalhães',
    role: 'Co-fundadora | Bistrô Oslo'
  }
]

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          O que estão falando sobre mim.
        </h2>
        <p className={styles.subtitle}>
          Conheça um pouco mais sobre a minha experiência de atendimento.
        </p>
        
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.quote}>&ldquo;</div>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.author}>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

