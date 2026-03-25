import { motion } from 'framer-motion'
import {
  SiSpring, SiReact, SiTypescript, SiPython,
  SiPostgresql, SiDocker, SiGit, SiEthereum,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import { useLanguage } from '../context/LanguageContext'

interface Skill {
  name: string
  nameKey?: string
  icon?: IconType
  color: string
}

const skillGroupsData: { emoji: string; skills: Skill[] }[] = [
  {
    emoji: '⚙️',
    skills: [
      { name: 'Java', color: '#f89820' },
      { name: 'Spring Boot', icon: SiSpring, color: '#6db33f' },
      { name: 'Go', color: '#00add8' },
      { name: 'C', color: '#a8b9cc' },
    ],
  },
  {
    emoji: '🖥️',
    skills: [
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
    ],
  },
  {
    emoji: '📊',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'SQL Server', color: '#cc2927' },
      { name: 'Power BI', color: '#f2c811' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    ],
  },
  {
    emoji: '🛠️',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
      { name: 'Git', icon: SiGit, color: '#f05032' },
    ],
  },
  {
    emoji: '⛓️',
    skills: [
      { name: 'Ethereum', icon: SiEthereum, color: '#627eea' },
      { name: 'Solidity', color: '#363636' },
    ],
  },
  {
    emoji: '🌐',
    skills: [
      { name: '', nameKey: 'lang0', color: '#818cf8' },
      { name: '', nameKey: 'lang1', color: '#60a5fa' },
    ],
  },
]

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" style={{ paddingTop: '7rem', paddingBottom: '7rem', background: 'var(--section-tint)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: '#818cf8', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {t.skills.label}
          </p>
          <h2 style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-1)', margin: 0 }}>{t.skills.title}</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {skillGroupsData.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
              style={{
                backgroundImage: `
                  linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '28px 28px',
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                padding: '1.5rem',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1rem' }}>{group.emoji}</span>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
                  {t.skills.groups[gi]}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {group.skills.map((skill, si) => {
                  const displayName = skill.nameKey
                    ? t.skills.languages[parseInt(skill.nameKey.replace('lang', ''))]
                    : skill.name
                  return (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: gi * 0.06 + si * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.55rem 1rem',
                        background: 'var(--badge)',
                        border: '1px solid var(--border-md)',
                        borderRadius: '0.6rem',
                        cursor: 'default',
                        transition: 'all 0.15s',
                      }}
                    >
                      {skill.icon ? (
                        <skill.icon size={18} color={skill.color} />
                      ) : (
                        <span style={{ width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 800, color: skill.color, background: `${skill.color}20`, borderRadius: '4px' }}>
                          {displayName.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                      <span style={{ color: 'var(--text-2)', fontSize: '0.9rem', fontWeight: 500 }}>{displayName}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
