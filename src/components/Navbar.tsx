import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

const sectionIds = ['about', 'experience', 'education', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const { t, lang, setLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #6366f1, #a78bfa)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 100,
        }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'center', padding: '1rem 1.5rem' }}
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.25rem',
          padding: '0.4rem 0.75rem',
          borderRadius: '9999px',
          border: `1px solid var(--border-md)`,
          background: scrolled ? 'var(--navbar-scrolled)' : 'var(--navbar)',
          backdropFilter: 'blur(16px)',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.2)' : 'none',
          transition: 'all 0.3s',
        }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ fontSize: '1rem', fontWeight: 700, color: '#818cf8', letterSpacing: '-0.02em', background: 'none', border: 'none', cursor: 'pointer', padding: '0.3rem 0.75rem', borderRadius: '9999px', flexShrink: 0 }}
          >
            enes.
          </button>

          <div style={{ width: '1px', height: '1rem', background: 'var(--border-lg)', margin: '0 0.25rem' }} />

          {t.nav.links.map((link, i) => {
            const id = sectionIds[i]
            const isActive = activeSection === id
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  fontSize: '0.85rem',
                  color: isActive ? 'var(--text-1)' : 'var(--text-2)',
                  background: isActive ? 'rgba(99,102,241,0.15)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  fontWeight: isActive ? 600 : 500,
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-1)'
                    ;(e.currentTarget as HTMLElement).style.background = 'var(--card-alt)'
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-2)'
                    ;(e.currentTarget as HTMLElement).style.background = 'none'
                  }
                }}
              >
                {link}
              </button>
            )
          })}

          <div style={{ width: '1px', height: '1rem', background: 'var(--border-lg)', margin: '0 0.25rem' }} />

          {/* Language toggle */}
          <div style={{ display: 'inline-flex', borderRadius: '9999px', background: 'var(--badge)', border: '1px solid var(--border-md)', overflow: 'hidden' }}>
            {(['en', 'tr'] as const).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                  transition: 'all 0.2s',
                  background: lang === l ? 'rgba(99,102,241,0.3)' : 'transparent',
                  color: lang === l ? '#c7d2fe' : 'var(--text-3)',
                  borderRadius: '9999px',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '30px',
              height: '30px',
              borderRadius: '9999px',
              border: '1px solid var(--border-md)',
              background: 'var(--badge)',
              color: theme === 'dark' ? '#fbbf24' : '#6366f1',
              cursor: 'pointer',
              transition: 'all 0.2s',
              flexShrink: 0,
              marginLeft: '0.1rem',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--card-alt)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--badge)' }}
          >
            {theme === 'dark' ? <FiSun size={14} /> : <FiMoon size={14} />}
          </button>
        </div>
      </motion.header>
    </>
  )
}
