'use client';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCode, FaPenNib } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const contactCards = [
  {
    icon: FaGithub,
    href: 'https://github.com/Anthony-mf',
    accent: 'hover:border-white hover:text-white',
    shadow: 'hover:shadow-white/30',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:anthonymarquesfelix@gmail.com',
    accent: 'hover:border-orange-400 hover:text-orange-400',
    shadow: 'hover:shadow-orange-400/30',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/anthmf/',
    accent: 'hover:border-blue-400 hover:text-blue-400',
    shadow: 'hover:shadow-blue-400/30',
  },
  {
    icon: FaPenNib,
    href: '#',
    accent: 'hover:border-pink-400 hover:text-pink-400',
    shadow: 'hover:shadow-pink-400/30',
  },
] as const;

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Git', icon: '📦' },
  { name: 'Figma', icon: '🎯' },
] as const;

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto grid gap-8 xl:grid-cols-[2.6fr_1.4fr]">
        <div className="grid gap-8 lg:grid-cols-[2fr_1.2fr_2fr]">
          <div className="bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-[0px_20px_80px_rgba(0,0,0,0.35)] cursor-pointer hover:scale-101 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 group">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">{t('hero.futureDeveloper')}</p>
              <h2 className="text-4xl font-bold mb-4">
                Anthony <br />MARQUES FELIX
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between text-sm text-gray-400">
              <div>
                <p className="uppercase text-xs tracking-[0.35em] text-gray-500">ex</p>
                <p className="font-semibold text-white mt-1">2025 Cohort</p>
              </div>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-orange-500/80 border border-black flex items-center justify-center text-xs font-semibold">JS</div>
                <div className="w-8 h-8 rounded-full bg-yellow-500/80 border border-black flex items-center justify-center text-xs font-semibold">TS</div>
                <div className="w-8 h-8 rounded-full bg-cyan-500/80 border border-black flex items-center justify-center text-xs font-semibold">UI</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {contactCards.map(({ icon: Icon, href, accent, shadow }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl aspect-square flex flex-col items-center justify-center gap-2 text-gray-400 cursor-pointer hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl ${accent} ${shadow}`}
              >
                <Icon className="w-7 h-7" />
              </a>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-white/10 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative">
            <FaCode className="absolute -top-6 -right-6 text-[200px] text-white/5 rotate-12" />
            <div>
              <p className="uppercase text-xs tracking-[0.35em] text-gray-500 mb-4">2025</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-orange-400">{t('hero.buildingSkills')}</span>
                <br />
                <span className="text-orange-200">{t('hero.forFuture')}</span>
              </h1>
            </div>
            <button className="self-start mt-8 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full border border-white/10 transition-colors text-sm">
              {t('navbar.letsTalk')}
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/80 to-black/70 border border-white/10 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] h-full">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="uppercase text-xs tracking-[0.35em] text-gray-500 mb-1">ex</p>
              <p className="text-gray-400 text-sm">{t('skills.mostUse')}</p>
            </div>
            <span className="text-gray-500 text-xs border border-white/10 rounded-full px-3 py-1">02</span>
          </div>
          <h3 className="text-3xl font-bold mb-8">{t('skills.title')}</h3>
          <div className="grid grid-cols-1 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-2xl border border-white/10 flex items-center gap-4 px-4 py-4 text-gray-200 hover:border-orange-400 hover:text-white transition-all duration-300"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-sm uppercase tracking-widest">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
