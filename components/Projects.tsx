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
    },
    {
        id: 2,
        titleKey: 'projects.homeKit.title',
        descriptionKey: 'projects.homeKit.description',
        categoryKey: 'projects.homeKit.category',
        image: '🏠',
        technologies: ['Python', 'Flask', 'MQTT', 'PostgreSQL'],
        github: 'https://github.com/laetitiaManiglier/HomeKit',
    },
    {
        id: 3,
        titleKey: 'projects.projetX.title',
        descriptionKey: 'projects.projetX.description',
        categoryKey: 'projects.projetX.category',
        image: <FaXTwitter />,
        technologies: ['JavaScript', 'PHP', 'HTML', 'CSS', 'Docker'],
        github: 'https://github.com/barriefl/ProjetX_BARRIER_MAULINE_MARQUES-FELIX_SERVONNET',
    },
    {
        id: 4,
        titleKey: 'projects.IoTRaspberry.title',
        descriptionKey: 'projects.IoTRaspberry.description',
        categoryKey: 'projects.IoTRaspberry.category',
        image: <IoTerminal />,
        technologies: ['Python', 'MQTT'],
        github: 'https://github.com/Anthony-mf/IoT_Raspberry',
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
                        <div
                            key={project.id}
                            className="bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition-all duration-300"
                        >
                            {/* Project Header */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="text-6xl">{project.image}</div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                                        {t(project.categoryKey)}
                                    </p>
                                    <h2 className="text-2xl font-bold mb-2">{t(project.titleKey)}</h2>
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
                                        className="px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-sm text-orange-400"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}