import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const experienceMeta = [
  { company: 'Çimko Çimento ve Beton', period: 'Feb 2026 — Present', location: 'Gaziantep, Türkiye', current: true, tags: ['SQL Server', 'T-SQL', 'Power BI', 'Python'] },
  { company: 'OBSS', period: 'Jul 2025 — Aug 2025', location: 'Ankara, Türkiye', current: false, tags: ['Java', 'Spring Boot', 'Spring Security', 'React', 'OAuth 2.0'] },
  { company: 'enoca', period: 'Dec 2024 — May 2025', location: 'Istanbul, Türkiye · Remote', current: false, tags: ['Java', 'Spring Boot', 'SAP Hybris', 'SOLR', 'REST API'] },
  { company: 'Karabük University', period: 'Aug 2024 — Sep 2024', location: 'Karabük, Türkiye', current: false, tags: ['Go', 'Fiber', 'HTML', 'CSS', 'MVC'] },
  { company: 'Partech Unmanned Ground Vehicle · Teknofest', period: 'Oct 2024 — Dec 2025', location: 'Türkiye', current: false, tags: ['Leadership', 'System Integration', 'Software Development'] },
  { company: 'Google Developer Student Clubs Karabuk', period: 'Jan 2024 — Jun 2024', location: 'Karabük, Türkiye', current: false, tags: [] as string[] },
]

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section
      id="experience"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        backgroundImage: `
          linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
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
            {t.experience.label}
          </p>
          <h2 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-1)', margin: 0 }}>{t.experience.title}</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {experienceMeta.map((meta, i) => {
            const item = t.experience.items[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
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

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.25rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-1)', margin: 0 }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', whiteSpace: 'nowrap', flexShrink: 0, paddingTop: '0.125rem' }}>{meta.period}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: item.description || meta.tags.length ? '0.75rem' : 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <p style={{ fontSize: '0.875rem', color: '#818cf8', fontWeight: 500, margin: 0 }}>{meta.company}</p>
                    {meta.current && (
                      <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.6rem', background: 'rgba(99,102,241,0.15)', color: '#a5b4fc', borderRadius: '9999px', border: '1px solid rgba(99,102,241,0.25)' }}>
                        {t.experience.current}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-3)', whiteSpace: 'nowrap', flexShrink: 0 }}>{meta.location}</p>
                </div>

                {item.description && (
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.6, marginBottom: meta.tags.length ? '0.75rem' : 0 }}>{item.description}</p>
                )}

                {meta.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
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
