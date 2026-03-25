import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

const projectsMeta = [
  {
    title: 'IbisPulse',
    tech: ['React', 'TypeScript', 'Spring Boot', 'WebSocket', 'SSE', 'PostgreSQL', 'Redis', 'JWT'],
    github: 'https://github.com/enesibis/crypto-tracker',
    accentColor: '#6366f1',
    gridColor: 'rgba(99,102,241,0.06)',
    glowColor: 'rgba(99,102,241,0.15)',
    tag: 'Full Stack',
    tagBg: 'rgba(99,102,241,0.12)',
    tagBorder: 'rgba(99,102,241,0.3)',
    tagText: '#a5b4fc',
  },
  {
    title: 'IbisSupply',
    tech: ['Ethereum', 'Smart Contracts', 'Solidity', 'AI', 'Blockchain', 'Flutter'],
    github: 'https://github.com/enesibis/IbisSupply',
    accentColor: '#8b5cf6',
    gridColor: 'rgba(139,92,246,0.06)',
    glowColor: 'rgba(139,92,246,0.15)',
    tag: 'Blockchain',
    tagBg: 'rgba(139,92,246,0.12)',
    tagBorder: 'rgba(139,92,246,0.3)',
    tagText: '#c4b5fd',
  },
  {
    title: 'Supply Chain Analytics',
    tech: ['SQL Server', 'T-SQL', 'Power BI', 'Python', 'Stored Procedures'],
    github: 'https://github.com/enesibis/supply-chain-analytics',
    accentColor: '#10b981',
    gridColor: 'rgba(16,185,129,0.06)',
    glowColor: 'rgba(16,185,129,0.15)',
    tag: 'Data Analytics',
    tagBg: 'rgba(16,185,129,0.12)',
    tagBorder: 'rgba(16,185,129,0.3)',
    tagText: '#6ee7b7',
  },
]

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section
      id="projects"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        backgroundImage: `
          linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '70px 70px',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: '#818cf8', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {t.projects.label}
          </p>
          <h2 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-1)', margin: 0 }}>{t.projects.title}</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {projectsMeta.map((project, i) => {
            const item = t.projects.items[i]
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '1.25rem',
                  border: `1px solid var(--border)`,
                  padding: '2rem',
                  backgroundImage: `
                    linear-gradient(${project.gridColor} 1px, transparent 1px),
                    linear-gradient(90deg, ${project.gridColor} 1px, transparent 1px)
                  `,
                  backgroundSize: '32px 32px',
                  backgroundColor: 'var(--card)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${project.accentColor}40` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                <div style={{
                  position: 'absolute', top: -40, right: -40,
                  width: 200, height: 200,
                  background: `radial-gradient(circle, ${project.glowColor} 0%, transparent 70%)`,
                  borderRadius: '50%',
                  pointerEvents: 'none',
                }} />

                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-1)', margin: 0 }}>{project.title}</h3>
                        <span style={{
                          fontSize: '0.7rem', padding: '0.2rem 0.65rem', borderRadius: '9999px',
                          background: project.tagBg, border: `1px solid ${project.tagBorder}`,
                          color: project.tagText, fontWeight: 600, letterSpacing: '0.04em',
                        }}>
                          {project.tag}
                        </span>
                      </div>
                      <p style={{ color: 'var(--text-3)', fontSize: '0.85rem', margin: 0 }}>{item.subtitle}</p>
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.5rem 1.1rem',
                        background: 'var(--badge)',
                        border: '1px solid var(--border-lg)',
                        borderRadius: '0.6rem',
                        color: 'var(--text-2)', fontSize: '0.85rem', fontWeight: 500,
                        textDecoration: 'none', transition: 'all 0.2s',
                        whiteSpace: 'nowrap', flexShrink: 0,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = `${project.accentColor}20`
                        e.currentTarget.style.borderColor = `${project.accentColor}50`
                        e.currentTarget.style.color = 'var(--text-1)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'var(--badge)'
                        e.currentTarget.style.borderColor = 'var(--border-lg)'
                        e.currentTarget.style.color = 'var(--text-2)'
                      }}
                    >
                      <FiGithub size={15} />
                      {t.projects.viewOnGithub}
                    </a>
                  </div>

                  <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {project.tech.map((tech) => (
                      <span key={tech} style={{
                        fontSize: '0.75rem', padding: '0.25rem 0.65rem',
                        background: 'var(--tag)', color: 'var(--text-2)',
                        borderRadius: '0.4rem', border: '1px solid var(--border)',
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
