import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

const socialsMeta = [
  {
    key: 'github',
    label: 'GitHub',
    href: 'https://github.com/enesibis',
    icon: FiGithub,
    color: 'var(--text-1)',
    bg: 'var(--badge)',
    border: 'var(--border-md)',
    hoverBg: 'var(--card-alt)',
    hoverBorder: 'var(--border-lg)',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/enesibis',
    icon: FiLinkedin,
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.07)',
    border: 'rgba(96,165,250,0.2)',
    hoverBg: 'rgba(96,165,250,0.14)',
    hoverBorder: 'rgba(96,165,250,0.4)',
  },
  {
    key: 'email',
    label: 'enesibisss0@gmail.com',
    href: 'mailto:enesibisss0@gmail.com',
    icon: FiMail,
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.07)',
    border: 'rgba(167,139,250,0.2)',
    hoverBg: 'rgba(167,139,250,0.14)',
    hoverBorder: 'rgba(167,139,250,0.4)',
  },
]

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `
          linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '70px 70px',
      }}
    >
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 400,
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 2rem', textAlign: 'center', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p style={{ color: '#818cf8', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {t.contact.label}
          </p>
          <h2 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-1)', margin: '0 0 1.25rem' }}>
            {t.contact.title}
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            {t.contact.description}
          </p>

          <motion.a
            href="mailto:enesibisss0@gmail.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.85rem 2rem',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              color: '#fff', borderRadius: '0.85rem',
              fontWeight: 600, fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 0 30px rgba(99,102,241,0.25)',
              marginBottom: '3rem',
              border: '1px solid rgba(99,102,241,0.4)',
            }}
          >
            <FiMail size={20} />
            {t.contact.sayHello}
          </motion.a>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {socialsMeta.map((s) => (
              <motion.a
                key={s.key}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.6rem 1.1rem',
                  background: s.bg,
                  border: `1px solid ${s.border}`,
                  borderRadius: '0.75rem',
                  color: s.color, fontSize: '0.875rem', fontWeight: 500,
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = s.hoverBg
                  e.currentTarget.style.borderColor = s.hoverBorder
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = s.bg
                  e.currentTarget.style.borderColor = s.border
                }}
              >
                <s.icon size={16} />
                {s.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
