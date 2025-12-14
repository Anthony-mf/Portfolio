'use client';
import { FaGithub, FaLinkedin, FaEnvelope, FaGamepad, FaMusic, FaPen, FaBook, FaProjectDiagram, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { GiKickScooter, GiClapperboard } from 'react-icons/gi';
import { TbFileCv } from 'react-icons/tb';
import { useLanguage } from '@/contexts/LanguageContext';
import Typewriter from './Typewriter';

export default function Hero() {
  const { t, language } = useLanguage();

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
      accent: 'hover:border-red-400 hover:text-red-400',
      shadow: 'hover:shadow-red-400/30',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/anthmf/',
      accent: 'hover:border-blue-400 hover:text-blue-400',
      shadow: 'hover:shadow-blue-400/30',
    },
    {
      icon: TbFileCv,
      href: t('misc.cvLink'),
      accent: 'hover:border-green-400 hover:text-green-400',
      shadow: 'hover:shadow-green-400/30',
    },
  ];

  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Grille asymétrique : Ligne 1 [2fr_1fr_1fr], Ligne 2 [1fr_1fr_2fr] */}
        <div className="grid grid-cols-4 gap-8">

          {/* Ligne 1 - Colonne 1: About - 2 colonnes */}
          <a href="/about" className="lg:col-span-2 bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500 cursor-pointer max-h-80 no-underline">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1 mb-8">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  <Typewriter
                    texts={[t('hero.alternant'), t('hero.futureDeveloper')]}
                    typingDelay={100}
                    deletingDelay={50}
                    pauseDelay={2000}
                  />
                </p>
                <h1 className="text-3xl font-bold mb-3">
                  Anthony<br />
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                    MARQUES FELIX
                  </span>
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {t('hero.description')}
                </p>
              </div>

              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-gradient-to-r from-orange-400 to-yellow-500 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-500 p-1 rounded-full">
                    <div className="w-full h-full rounded-full overflow-hidden bg-black">
                      <img
                        src="/images/Profile.webp"
                        alt="Anthony Marques Felix"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Ligne 1 - Colonne 2: Contacts (2x2) - 1 colonne */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-8">
            {contactCards.map(({ icon: Icon, href, accent, shadow }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl aspect-square flex items-center justify-center text-gray-400 cursor-pointer hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl max-w-36 max-h-36 ${accent} ${shadow}`}
              >
                <Icon className="w-10 h-10" />
              </a>
            ))}
          </div>

          {/* Ligne 1 - Colonne 3 : Skills Icons - 1 colonne */}
          <a href="/skills" className="lg:col-span-1 bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-6 flex flex-col shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500 cursor-pointer max-h-80 no-underline">
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-2xl font-bold">{t('skills.title')}</h3>
            </div>
            <div className="flex items-center justify-center flex-1">
              <div className="grid grid-cols-3 gap-3">
                {['C1', 'C2', 'C3', 'C4', 'C5', 'C6'].map((skill, index) => {
                  const gradients = [
                    'from-blue-500 to-cyan-500',
                    'from-purple-500 to-pink-500',
                    'from-green-500 to-emerald-500',
                    'from-orange-500 to-red-500',
                    'from-yellow-500 to-amber-500',
                    'from-indigo-500 to-blue-500'
                  ];
                  return (
                    <div
                      key={skill}
                      className={`rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center shadow-lg`}
                      style={{
                        width: '64px',
                        height: '64px',
                        minWidth: '64px',
                        minHeight: '64px'
                      }}
                    >
                      <span className="font-bold text-white" style={{ fontSize: '24px' }}>{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </a>

          {/* Ligne 2 - Colonne 1: Strengths - 1 colonne */}
          <a href="/strengths" className="lg:col-span-1 bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] hover:shadow-orange-500/20 hover:border-orange-500 transition-all duration-300 no-underline block">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-center">{t('strengths.title')}</h3>
            </div>
            <div className="space-y-4">
              {['strengths.tabs.digital', 'strengths.tabs.languages', 'strengths.tabs.softSkills'].map((strength, index) => (
                <div key={index} className="flex justify-center gap-4">
                  <div>
                    <p className="w-52 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-orange-400 to-yellow-500 text-black">
                      {t(strength)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </a>

          {/* Ligne 2 - Colonne 2: Hobbies - 1 colonne */}
          <a href="/hobbies" className="lg:col-span-1 bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] hover:shadow-orange-500/20 hover:border-orange-500 transition-all duration-300 flex flex-col no-underline">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-center">{t('hobbies.title')}</h3>
            </div>
            <div className="flex items-center justify-center flex-1">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: GiKickScooter, color: '#FF6B6B' },
                  { icon: FaGamepad, color: '#4ECDC4' },
                  { icon: FaMusic, color: '#95E1D3' },
                  { icon: FaPen, color: '#F38181' },
                  { icon: GiClapperboard, color: '#AA96DA' },
                  { icon: FaBook, color: '#FCBAD3' }
                ].map((hobby, index) => {
                  const Icon = hobby.icon;
                  return (
                    <div
                      key={index}
                      className="rounded-full flex items-center justify-center shadow-lg"
                      style={{
                        width: '64px',
                        height: '64px',
                        minWidth: '64px',
                        minHeight: '64px',
                        backgroundColor: `${hobby.color}20`,
                        border: `2px solid ${hobby.color}40`
                      }}
                    >
                      <Icon className="text-3xl" style={{ color: hobby.color }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </a>

          {/* Row 2 - Column 3: Experiences - 2 colonnes */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between max-h-80">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-8">{t('experiences.title')}</h3>

              {/* Experience Pills */}
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/experiences/projects"
                  className="group relative px-8 py-4 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 no-underline overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative text-lg font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center gap-3">
                    <FaProjectDiagram className="text-xl" />
                    {t('projects.title')}
                  </span>
                </a>

                <a
                  href="/experiences/jobs"
                  className="group relative px-8 py-4 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-green-500/30 hover:border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 no-underline overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative text-lg font-semibold text-white group-hover:text-green-400 transition-colors flex items-center gap-3">
                    <FaBriefcase className="text-xl" />
                    {t('jobs.title')}
                  </span>
                </a>

                <a
                  href="/experiences/internship"
                  className="group relative px-8 py-4 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 no-underline overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative text-lg font-semibold text-white group-hover:text-purple-400 transition-colors flex items-center gap-3">
                    <FaGraduationCap className="text-xl" />
                    {t('internships.title')}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >
  );
}
