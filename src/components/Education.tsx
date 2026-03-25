import { motion } from 'framer-motion'
import { FiBook } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

const educationMeta = [
  {
    school: 'Karabük University',
    period: '2021 — 2026',
    location: 'Karabük, Türkiye',
    current: true,
    tags: ['Java', 'Spring Boot', 'Go', 'Python', 'SQL', 'Blockchain'],
  },
  {
    school: 'Osman Ulubaş Anadolu Lisesi',
    period: '2017 — 2021',
    location: 'Kayseri, Türkiye',
    current: false,
    tags: [] as string[],
  },
]

export default function Education() {
  const { t } = useLanguage()

  return (
    <section
      id="education"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        background: 'var(--section-tint)',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: '#818cf8', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {t.education.label}
          </p>
          <h2 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-1)', margin: 0 }}>{t.education.title}</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {educationMeta.map((meta, i) => {
            const item = t.education.items[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                style={{
                  position: 'relative',
                  borderRadius: '1rem',
                  padding: '1.25rem 1.5rem',
                  border: `1px solid ${meta.current ? 'rgba(99,102,241,0.25)' : 'var(--border)'}`,
                  background: meta.current ? 'rgba(99,102,241,0.06)' : 'var(--card)',
                  transition: 'all 0.3s',
                }}
              >
                {meta.current && (
                  <div style={{
                    position: 'absolute',
                    left: 0, top: '1rem', bottom: '1rem',
                    width: '3px',
                    background: 'linear-gradient(to bottom, #6366f1, #8b5cf6)',
                    borderRadius: '0 4px 4px 0',
                  }} />
                )}

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flex: 1 }}>
                    <FiBook size={16} color="#818cf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-1)', margin: 0 }}>{item.degree}</h3>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', whiteSpace: 'nowrap', flexShrink: 0, paddingTop: '0.125rem' }}>{meta.period}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem', paddingLeft: '1.6rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <p style={{ fontSize: '0.875rem', color: '#818cf8', fontWeight: 500, margin: 0 }}>{meta.school}</p>
                    {meta.current && (
                      <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.6rem', background: 'rgba(99,102,241,0.15)', color: '#a5b4fc', borderRadius: '9999px', border: '1px solid rgba(99,102,241,0.25)' }}>
                        {t.education.current}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-3)', whiteSpace: 'nowrap', flexShrink: 0 }}>{meta.location}</p>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.6, marginBottom: meta.tags.length ? '0.75rem' : 0, paddingLeft: '1.6rem' }}>{item.description}</p>

                {meta.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingLeft: '1.6rem' }}>
                    {meta.tags.map((tag) => (
                      <span key={tag} style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', background: 'var(--badge)', color: 'var(--text-2)', borderRadius: '0.4rem', border: '1px solid var(--border)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
