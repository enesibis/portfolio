import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FiArrowUp, FiUsers } from 'react-icons/fi'
import './App.css'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function FadeSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [20, 0, 0, -20])
  const blur = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [2, 0, 0, 2])
  const blurStr = useTransform(blur, (v) => `blur(${v}px)`)

  return (
    <motion.div ref={ref} style={{ opacity, y, filter: blurStr }}>
      {children}
    </motion.div>
  )
}

function AppInner() {
  const [showTop, setShowTop] = useState(false)
  const [visitors, setVisitors] = useState<number | null>(null)
  const { t } = useLanguage()
  const { theme } = useTheme()

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/enesibis.portfolio/visits')
      .then(r => r.json())
      .then(data => setVisitors(data.value))
      .catch(() => {})
  }, [])

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text-1)', minHeight: '100vh', transition: 'background-color 0.3s, color 0.3s' }} data-theme={theme}>
      <Navbar />
      <main>
        <Hero />
        <FadeSection><Experience /></FadeSection>
        <FadeSection><Education /></FadeSection>
        <FadeSection><Skills /></FadeSection>
        <FadeSection><Projects /></FadeSection>
        <FadeSection><Contact /></FadeSection>
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-4)', fontSize: '0.85rem', borderTop: '1px solid var(--border)' }}>
        <p style={{ margin: '0 0 0.5rem' }}>{t.footer.builtBy}</p>
        {visitors !== null && (
          <p style={{ margin: 0, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#334155' }}>
            <FiUsers size={12} />
            {visitors.toLocaleString()} {t.footer.visitors}
          </p>
        )}
      </footer>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              zIndex: 50,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(99,102,241,0.15)',
              border: '1px solid rgba(99,102,241,0.35)',
              color: '#a5b4fc',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 20px rgba(99,102,241,0.2)',
            }}
          >
            <FiArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppInner />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
