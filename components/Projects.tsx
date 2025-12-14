'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaXTwitter } from 'react-icons/fa6';
import { IoTerminal } from "react-icons/io5";

const projects = [
    {
        id: 1,
        titleKey: 'projects.apiVinted.title',
        descriptionKey: 'projects.apiVinted.description',
        categoryKey: 'projects.apiVinted.category',
        image: '🛒',
        technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL'],
        github: 'https://github.com/barriefl/SAE401_API_Vinted',
        gradient: 'from-blue-500 to-cyan-500',
        accentColor: '#3B82F6',
    },
    {
        id: 2,
        titleKey: 'projects.homeKit.title',
        descriptionKey: 'projects.homeKit.description',
        categoryKey: 'projects.homeKit.category',
        image: '🏠',
        technologies: ['Python', 'Flask', 'MQTT', 'PostgreSQL'],
        github: 'https://github.com/laetitiaManiglier/HomeKit',
        gradient: 'from-green-500 to-emerald-500',
        accentColor: '#10B981',
    },
    {
        id: 3,
        titleKey: 'projects.projetX.title',
        descriptionKey: 'projects.projetX.description',
        categoryKey: 'projects.projetX.category',
        image: <FaXTwitter />,
        technologies: ['JavaScript', 'PHP', 'HTML', 'CSS', 'Docker'],
        github: 'https://github.com/barriefl/ProjetX_BARRIER_MAULINE_MARQUES-FELIX_SERVONNET',
        gradient: 'from-purple-500 to-pink-500',
        accentColor: '#A855F7',
    },
    {
        id: 4,
        titleKey: 'projects.IoTRaspberry.title',
        descriptionKey: 'projects.IoTRaspberry.description',
        categoryKey: 'projects.IoTRaspberry.category',
        image: <IoTerminal />,
        technologies: ['Python', 'MQTT'],
        github: 'https://github.com/Anthony-mf/IoT_Raspberry',
        gradient: 'from-orange-500 to-red-500',
        accentColor: '#F97316',
    }
];

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section id="projects" className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        {t('projects.pageTitle')}
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        {t('projects.intro')}
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-gradient-to-br from-gray-900/70 to-black/60 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.02] transition-all duration-500 overflow-hidden no-underline"
                            style={{ border: `2px solid ${project.accentColor}20` }}
                        >
                            {/* Gradient Background Effect */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Project Header */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div
                                        className="text-6xl transition-transform duration-300 group-hover:scale-110"
                                        style={{ color: project.accentColor }}
                                    >
                                        {project.image}
                                    </div>
                                    <div className="flex-1">
                                        <p
                                            className="text-sm font-semibold uppercase tracking-wider mb-2"
                                            style={{ color: project.accentColor }}
                                        >
                                            {t(project.categoryKey)}
                                        </p>
                                        <h2 className="text-2xl font-bold mb-2 text-white">{t(project.titleKey)}</h2>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {t(project.descriptionKey)}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300"
                                            style={{
                                                backgroundColor: `${project.accentColor}15`,
                                                border: `1px solid ${project.accentColor}30`,
                                                color: project.accentColor
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Decorative Line */}
                                <div
                                    className={`h-1 rounded-full bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}