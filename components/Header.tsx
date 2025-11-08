'use client'

import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.monogram}>LQ</span>
          <div className={styles.logoText}>
            <span className={styles.name}>LUCIANA QUEIROZ</span>
            <span className={styles.title}>Sommelière</span>
          </div>
        </div>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a>
          <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
          <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
        </nav>

        <button 
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

