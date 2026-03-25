import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '0 2rem',
        backgroundImage: `
          linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '20%', left: '15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: '25%', right: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(40px)' }} />
      </div>

      <div style={{ position: 'relative', maxWidth: '860px', width: '100%', textAlign: 'center' }}>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: '#818cf8', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-1)', margin: '0 0 1rem', lineHeight: 1.1 }}
        >
          Enes İbiş
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: 'clamp(1.2rem, 3vw, 1.75rem)', fontWeight: 600, marginBottom: '1.75rem', background: 'linear-gradient(90deg, #818cf8, #a78bfa, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 2.5rem' }}
        >
          {t.hero.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="https://github.com/enesibis"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.5rem', background: '#4f46e5', color: '#fff', borderRadius: '0.75rem', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.2s', border: '1px solid rgba(99,102,241,0.5)' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#4338ca')}
            onMouseLeave={e => (e.currentTarget.style.background = '#4f46e5')}
          >
            <FiGithub size={17} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/enesibis"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.5rem', background: 'var(--card)', color: 'var(--text-2)', borderRadius: '0.75rem', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.2s', border: '1px solid var(--border-lg)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--card-alt)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--card)')}
          >
            <FiLinkedin size={17} /> LinkedIn
          </a>
          <a
            href="mailto:enesibisss0@gmail.com"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.5rem', background: 'var(--card)', color: 'var(--text-2)', borderRadius: '0.75rem', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.2s', border: '1px solid var(--border-lg)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--card-alt)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--card)')}
          >
            <FiMail size={17} /> Email
          </a>
          <a
            href="/portfolio/cv-enesibis.pdf"
            download
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.5rem', background: 'var(--card)', color: '#a78bfa', borderRadius: '0.75rem', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.2s', border: '1px solid rgba(167,139,250,0.2)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(167,139,250,0.12)'; e.currentTarget.style.borderColor = 'rgba(167,139,250,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.borderColor = 'rgba(167,139,250,0.2)' }}
          >
            <FiDownload size={17} /> {t.hero.cv}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)' }}
      >
        <button
          onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-4)', display: 'flex', animation: 'bounce 2s infinite' }}
        >
          <FiArrowDown size={22} />
        </button>
      </motion.div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}
