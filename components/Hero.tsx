'use client';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiHtml5, SiCss3, SiJavascript, SiReact, SiPostgresql } from 'react-icons/si';
import { TbBrandCSharp, TbFileCv } from 'react-icons/tb';
import { useLanguage } from '@/contexts/LanguageContext';
import Typewriter from './Typewriter';
import { DiMsqlServer } from 'react-icons/di';


const skills = [
  {
    icon: SiHtml5,
    color: '#E34F26',
  },
  {
    icon: SiCss3,
    color: '#1572B6',
  },
  {
    icon: SiJavascript,
    color: '#F7DF1E',
  },
  {
    icon: TbBrandCSharp,
    color: '#68217A',
  },
  {
    icon: SiReact,
    color: '#61DAFB',
  },
  {
    icon: SiNextdotjs,
    color: '#FFFFFF',
  },
  {
    icon: SiMongodb,
    color: '#47A248',
  },
  {
    icon: SiPostgresql,
    color: '#336791',
  },
  {
    icon: DiMsqlServer,
    color: '#FFFFFF',
  }
] as const;

const projects = [
  {
    title: 'Meditation Course',
    category: 'Web Application',
    image: '🧘',
  },
  {
    title: 'E-commerce Platform',
    category: 'Full Stack',
    image: '🛒',
  },
] as const;

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Ligne 1 - Colonne 1: About - 2 colonnes */}
          <a href="/about" className="lg:col-span-2 bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500 cursor-pointer max-h-80 no-underline">
            <div className="mb-8">
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
          <a href="/skills" className="lg:col-span-1 bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-6 flex flex-col justify-between shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500 cursor-pointer max-h-80 no-underline">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">{t('skills.title')}</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-3"
                  >
                    <Icon className="text-4xl" style={{ color: skill.color }} />
                  </div>
                );
              })}
            </div>
          </a>

          {/* Ligne 2 - Colonne 1: Projects - 1 colonne */}
          <a href="/projects" className="lg:col-span-1 bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] hover:shadow-orange-500/20 hover:border-orange-500 transition-all duration-300 no-underline block">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{t('projects.title')}</h3>
              </div>
            </div>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        {project.category}
                      </p>
                      <h4 className="text-sm font-semibold">{project.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </a>

          {/* Ligne 2 - Colonne 2: Hobbies - 1 colonne */}
          <a href="/hobbies" className="lg:col-span-1 bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] hover:shadow-orange-500/20 hover:border-orange-500 transition-all duration-300 flex flex-col justify-between no-underline">
            <div className="mb-8">
              <h3 className="text-2xl font-bold">{t('hobbies.title')}</h3>
            </div>
          </a>

          {/* Row 2 - Column 3: Experiences - 2 colonnes */}
          <a href="/experiences" className="lg:col-span-2 bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] hover:shadow-orange-500/20 hover:border-orange-500 transition-all duration-300 flex flex-col justify-between max-h-80 no-underline">
            <div className="mb-8">
              <h3 className="text-2xl font-bold">{t('experiences.title')}</h3>
            </div>
          </a>
        </div>
      </div>
    </section >
  );
}
