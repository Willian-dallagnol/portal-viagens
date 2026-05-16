'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { pt, en } from '../data/i18n'
import styles from '../styles/Layout.module.css'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<'pt' | 'en'>('pt')
  const pathname = usePathname()
  const t = lang === 'pt' ? pt : en

  const navLinks = [
    { href: '/', label: t.inicio },
    { href: '/destinos', label: t.destinos },
    { href: '/contato', label: t.contato },
  ]

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.menu}>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? styles.active : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <h1>{t.portal}</h1>
        <div className={styles.langToggle}>
          <button
            onClick={() => setLang('pt')}
            className={lang === 'pt' ? styles.langActive : styles.langBtn}
            aria-pressed={lang === 'pt'}
          >
            PT
          </button>
          <button
            onClick={() => setLang('en')}
            className={lang === 'en' ? styles.langActive : styles.langBtn}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} {t.portal}</p>
      </footer>
    </div>
  )
}

export default Layout
