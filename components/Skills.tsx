'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiMongodb, SiPostgresql, SiNodedotjs } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';

const skillCategories = [
    {
        category: 'Frontend',
        skills: [
            { icon: SiHtml5, name: 'HTML5', color: '#E34F26', level: 90 },
            { icon: SiCss3, name: 'CSS3', color: '#1572B6', level: 85 },
            { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E', level: 85 },
            { icon: SiTypescript, name: 'TypeScript', color: '#3178C6', level: 80 },
            { icon: SiReact, name: 'React', color: '#61DAFB', level: 85 },
            { icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF', level: 80 },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { icon: SiNodedotjs, name: 'Node.js', color: '#339933', level: 75 },
            { icon: TbBrandCSharp, name: 'C#', color: '#68217A', level: 70 },
        ],
    },
    {
        category: 'Database',
        skills: [
            { icon: SiMongodb, name: 'MongoDB', color: '#47A248', level: 75 },
            { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791', level: 70 },
            { icon: DiMsqlServer, name: 'SQL Server', color: '#FFFFFF', level: 65 },
        ],
    },
];

export default function Skills() {
    const { t } = useLanguage();

    return (
        <section id="skills" className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        {t('skills.pageTitle')}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                        {t('skills.intro')}
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="space-y-12">
                    {skillCategories.map((category, idx) => (
                        <div key={idx}>
                            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                                {t(`skills.${category.category.toLowerCase()}`)}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.skills.map((skill, skillIdx) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={skillIdx}
                                            className="bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-6 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.02] transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <Icon className="text-5xl" style={{ color: skill.color }} />
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold">{skill.name}</h3>
                                                    <p className="text-sm text-gray-400">{skill.level}%</p>
                                                </div>
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="w-full bg-gray-800 rounded-full h-2">
                                                <div
                                                    className="h-2 rounded-full transition-all duration-1000"
                                                    style={{
                                                        width: `${skill.level}%`,
                                                        background: `linear-gradient(to right, ${skill.color}, ${skill.color}80)`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
