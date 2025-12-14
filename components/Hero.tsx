'use client';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaGamepad, FaMusic, FaPen, FaBook, FaProjectDiagram, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { GiKickScooter, GiClapperboard } from 'react-icons/gi';
import { TbFileCv } from 'react-icons/tb';
import { useLanguage } from '@/contexts/LanguageContext';
import Typewriter from './Typewriter';

export default function Hero() {
  const { t, language } = useLanguage();
  const [showCopiedNotification, setShowCopiedNotification] = useState(false);

  const handleEmailClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    const email = 'anthonymarquesfelix@gmail.com';

    // Essayer d'ouvrir le client email
    try {
      // Vérifier si le navigateur peut gérer mailto:
      window.location.href = `mailto:${email}`;

      // Attendre un peu pour voir si ça fonctionne
      await new Promise(resolve => setTimeout(resolve, 100));

      // Si on arrive ici sans erreur, on copie quand même l'email en backup
      navigator.clipboard.writeText(email).then(() => {
        setShowCopiedNotification(true);
        setTimeout(() => setShowCopiedNotification(false), 3000);
      });
    } catch (error) {
      // Si mailto: échoue, copier l'email
      e.preventDefault();
      navigator.clipboard.writeText(email).then(() => {
        setShowCopiedNotification(true);
        setTimeout(() => setShowCopiedNotification(false), 3000);
      });
    }
  };

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
      isEmail: true,
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
    <section className="pt-20 md:pt-32 pb-8 md:pb-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Grille responsive : Mobile (1 col), Tablette (2 cols), Desktop (4 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">

          {/* Ligne 1 - Colonne 1: About - 2 colonnes sur desktop, pleine largeur sur mobile */}
          <a href="/about" className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500 cursor-pointer max-h-none md:max-h-80 no-underline">
            <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-6">
              <div className="flex-1 mb-4 md:mb-8 w-full">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  <Typewriter
                    texts={[t('hero.alternant'), t('hero.futureDeveloper')]}
                    typingDelay={100}
                    deletingDelay={50}
                    pauseDelay={2000}
                  />
                </p>
                <h1 className="text-2xl md:text-3xl font-bold mb-3">
                  Anthony<br />
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                    MARQUES FELIX
                  </span>
                </h1>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                  {t('hero.description')}
                </p>
              </div>

              {/* Profile Photo - Plus petite sur mobile */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-gradient-to-r from-orange-400 to-yellow-500 shadow-lg">
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

          {/* Ligne 1 - Colonne 2: Contacts (2x2) - Responsive */}
          <div className="md:col-span-1 lg:col-span-1 grid grid-cols-2 gap-3 md:gap-4 lg:gap-8">
            {contactCards.map(({ icon: Icon, href, accent, shadow, isEmail }) => (
              <a
                key={href}
                href={href}
                onClick={isEmail ? handleEmailClick : undefined}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className={`bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl aspect-square flex items-center justify-center text-gray-400 cursor-pointer hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl w-full max-w-none md:max-w-36 max-h-none md:max-h-36 ${accent} ${shadow}`}
              >
                <Icon className="w-8 h-8 md:w-10 md:h-10" />
              </a>
            ))}
          </div>

          {/* Ligne 1 - Colonne 3 : Skills Icons - Responsive */}
          <a href="/skills" className="md:col-span-1 lg:col-span-1 bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-4 md:p-6 flex flex-col shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500 cursor-pointer max-h-none md:max-h-80 no-underline">
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

          {/* Ligne 2 - Colonne 1: Strengths - Responsive */}
          <a href="/strengths" className="md:col-span-1 lg:col-span-1 bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] hover:shadow-orange-500/20 hover:border-orange-500 transition-all duration-300 no-underline block">
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

          {/* Ligne 2 - Colonne 2: Hobbies - Responsive */}
          <a href="/hobbies" className="md:col-span-1 lg:col-span-1 bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] hover:shadow-orange-500/20 hover:border-orange-500 transition-all duration-300 flex flex-col no-underline">
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

          {/* Ligne 2 - Colonne 3: Experiences - Responsive */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] hover:shadow-orange-500/20 hover:border-orange-500 transition-all duration-300 flex flex-col justify-between max-h-none md:max-h-80 no-underline">
            <div className="mb-4 md:mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">{t('experiences.title')}</h3>

              {/* Experience Pills - Responsive */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center">
                <a
                  href="/experiences/projects"
                  className="group relative px-4 md:px-6 lg:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 no-underline overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative text-base md:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center justify-center gap-2 md:gap-3">
                    <FaProjectDiagram className="text-lg md:text-xl" />
                    {t('projects.title')}
                  </span>
                </a>

                <a
                  href="/experiences/jobs"
                  className="group relative px-4 md:px-6 lg:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-green-500/30 hover:border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 no-underline overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative text-base md:text-lg font-semibold text-white group-hover:text-green-400 transition-colors flex items-center justify-center gap-2 md:gap-3">
                    <FaBriefcase className="text-lg md:text-xl" />
                    {t('jobs.title')}
                  </span>
                </a>

                <a
                  href="/experiences/internships"
                  className="group relative px-4 md:px-6 lg:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 no-underline overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative text-base md:text-lg font-semibold text-white group-hover:text-purple-400 transition-colors flex items-center justify-center gap-2 md:gap-3">
                    <FaGraduationCap className="text-lg md:text-xl" />
                    {t('internships.title')}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Email Copied Notification - Responsive */}
        {showCopiedNotification && (
          <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 animate-slide-up max-w-[calc(100vw-2rem)] md:max-w-none">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 md:px-6 md:py-4 rounded-2xl shadow-2xl flex items-center gap-2 md:gap-3 border border-green-400/30">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-semibold text-sm md:text-base">Email copié dans le presse-papier !</span>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes slide-up {
            from {
              transform: translateY(100px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-slide-up {
            animation: slide-up 0.3s ease-out;
          }
        `}</style>
      </div >
    </section >
  );
}
