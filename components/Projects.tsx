'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        titleKey: 'projects.meditation.title',
        descriptionKey: 'projects.meditation.description',
        category: 'Web Application',
        image: '🧘',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        github: 'https://github.com/Anthony-mf',
        demo: '#',
    },
    {
        id: 2,
        titleKey: 'projects.ecommerce.title',
        descriptionKey: 'projects.ecommerce.description',
        category: 'Full Stack',
        image: '🛒',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        github: 'https://github.com/Anthony-mf',
        demo: '#',
    },
    {
        id: 3,
        titleKey: 'projects.portfolio.title',
        descriptionKey: 'projects.portfolio.description',
        category: 'Web Application',
        image: '💼',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        github: 'https://github.com/Anthony-mf',
        demo: '#',
    },
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
                    <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
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
                                        {project.category}
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

                            {/* Links */}
                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    <FaGithub className="text-xl" />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-xl hover:opacity-90 transition-all text-black font-semibold"
                                >
                                    <FaExternalLinkAlt className="text-lg" />
                                    <span>Demo</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
