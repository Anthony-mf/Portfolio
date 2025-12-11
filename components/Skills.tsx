'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaCode, FaRocket, FaServer, FaDatabase, FaUsers, FaProjectDiagram, FaChevronDown, FaTimes } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useState, useEffect } from 'react';

interface Competency {
    code: string;
    titleKey: string;
    descriptionKey: string;
    icon: IconType;
    gradient: string;
    accentColor: string;
    levelsKey: string;
}

const competencies: Competency[] = [
    {
        code: 'CE1',
        titleKey: 'skills.ce1.title',
        descriptionKey: 'skills.ce1.description',
        icon: FaCode,
        gradient: 'from-blue-500 to-cyan-500',
        accentColor: '#3B82F6',
        levelsKey: 'ce1'
    },
    {
        code: 'CE2',
        titleKey: 'skills.ce2.title',
        descriptionKey: 'skills.ce2.description',
        icon: FaRocket,
        gradient: 'from-purple-500 to-pink-500',
        accentColor: '#A855F7',
        levelsKey: 'ce2'
    },
    {
        code: 'CE3',
        titleKey: 'skills.ce3.title',
        descriptionKey: 'skills.ce3.description',
        icon: FaServer,
        gradient: 'from-green-500 to-emerald-500',
        accentColor: '#10B981',
        levelsKey: 'ce3'
    },
    {
        code: 'CE4',
        titleKey: 'skills.ce4.title',
        descriptionKey: 'skills.ce4.description',
        icon: FaDatabase,
        gradient: 'from-orange-500 to-red-500',
        accentColor: '#F97316',
        levelsKey: 'ce4'
    },
    {
        code: 'CE5',
        titleKey: 'skills.ce5.title',
        descriptionKey: 'skills.ce5.description',
        icon: FaProjectDiagram,
        gradient: 'from-yellow-500 to-amber-500',
        accentColor: '#EAB308',
        levelsKey: 'ce5'
    },
    {
        code: 'CE6',
        titleKey: 'skills.ce6.title',
        descriptionKey: 'skills.ce6.description',
        icon: FaUsers,
        gradient: 'from-indigo-500 to-blue-500',
        accentColor: '#6366F1',
        levelsKey: 'ce6'
    }
];

export default function Skills() {
    const { t } = useLanguage();
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    // Handle escape key to close expanded card
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && expandedIndex !== null) {
                setExpandedIndex(null);
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [expandedIndex]);

    // Prevent body scroll when card is expanded
    useEffect(() => {
        if (expandedIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [expandedIndex]);

    return (
        <section id="skills" className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        {t('skills.pageTitle')}
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        {t('skills.intro')}
                    </p>
                </div>

                {/* Competencies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                    {competencies.map((comp, idx) => {
                        const Icon = comp.icon;
                        const isExpanded = expandedIndex === idx;

                        return (
                            <div key={idx} className="relative">
                                <div
                                    onClick={() => setExpandedIndex(idx)}
                                    className={`group relative bg-gradient-to-br from-gray-900/70 to-black/60 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.03] transition-all duration-500 overflow-hidden cursor-pointer flex flex-col
                                        ${isExpanded ? 'opacity-0 pointer-events-none' : ''}`}
                                    style={{
                                        border: `2px solid ${comp.accentColor}20`,
                                        height: '480px'
                                    }}
                                >
                                    {/* Gradient Background Effect */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${comp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Code Badge */}
                                        <div
                                            className={`flex items-center justify-center rounded-2xl bg-gradient-to-br ${comp.gradient} mb-6 shadow-lg flex-shrink-0`}
                                            style={{
                                                width: '64px',
                                                height: '64px',
                                                minWidth: '64px',
                                                minHeight: '64px'
                                            }}
                                        >
                                            <span className="font-bold text-white" style={{ fontSize: '24px' }}>{comp.code}</span>
                                        </div>

                                        {/* Icon */}
                                        <div className="mb-6">
                                            <Icon
                                                className="text-6xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                                                style={{ color: comp.accentColor }}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold mb-4 text-white">
                                            {t(comp.titleKey)}
                                        </h3>

                                        {/* Description - Fixed height */}
                                        <div className="h-28 mb-4 overflow-hidden flex-grow-0">
                                            <p className="text-gray-400 leading-relaxed">
                                                {t(comp.descriptionKey)}
                                            </p>
                                        </div>

                                        {/* Click to expand hint */}
                                        <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors mt-auto">
                                            <span>Voir les détails</span>
                                            <FaChevronDown className="text-xs" />
                                        </div>

                                        {/* Decorative Line */}
                                        <div
                                            className={`mt-6 h-1 rounded-full bg-gradient-to-r ${comp.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Expanded Card Overlay */}
            {expandedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn"
                    onClick={() => setExpandedIndex(null)}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

                    {/* Expanded Card */}
                    <div
                        className="relative w-full h-full max-w-5xl max-h-[90vh] m-4 animate-expandCard"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-gradient-to-br from-gray-900/95 to-black/90 border border-white/20 rounded-3xl p-8 h-full shadow-[0px_40px_120px_rgba(0,0,0,0.6)] overflow-y-auto">
                            {/* Close Button */}
                            <button
                                onClick={() => setExpandedIndex(null)}
                                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group z-10"
                                aria-label="Close"
                            >
                                <FaTimes className="text-2xl text-white/70 group-hover:text-white transition-colors" />
                            </button>

                            {/* Header */}
                            <div className="flex items-center gap-6 mb-8">
                                <div
                                    className={`rounded-2xl bg-gradient-to-br ${competencies[expandedIndex].gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                                    style={{ width: '88px', height: '88px' }}
                                >
                                    <span className="text-4xl font-bold text-white">{competencies[expandedIndex].code}</span>
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold text-white mb-2">
                                        {t(competencies[expandedIndex].titleKey)}
                                    </h2>
                                    <p className="text-gray-400 text-lg">
                                        {t(competencies[expandedIndex].descriptionKey)}
                                    </p>
                                </div>
                            </div>

                            {/* Levels */}
                            <div className="space-y-6">
                                {[1, 2, 3].map((level) => {
                                    // Check if this level exists for this competency
                                    const levelTitle = t(`skills.levels.${competencies[expandedIndex].levelsKey}.level${level}.title`);
                                    const levelKey = `skills.levels.${competencies[expandedIndex].levelsKey}.level${level}.title`;

                                    // Skip if level doesn't exist (returns the key itself when translation is missing)
                                    if (levelTitle === levelKey) return null;

                                    return (
                                        <div
                                            key={level}
                                            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-white/10"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${competencies[expandedIndex].gradient} flex items-center justify-center shadow-md flex-shrink-0`}
                                                >
                                                    <span className="text-xl font-bold text-white">N{level}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white">
                                                    {levelTitle}
                                                </h3>
                                            </div>

                                            {/* AC List - Only for Level 3 */}
                                            {level === 3 && (
                                                <ul className="space-y-3 ml-16">
                                                    {t(`skills.levels.${competencies[expandedIndex].levelsKey}.level${level}.ac`)
                                                        .split('|')
                                                        .map((ac, acIdx) => (
                                                            <li key={acIdx} className="flex items-start gap-3">
                                                                <div
                                                                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                                                    style={{ backgroundColor: competencies[expandedIndex].accentColor }}
                                                                />
                                                                <span className="text-gray-300 leading-relaxed">{ac.trim()}</span>
                                                            </li>
                                                        ))}
                                                </ul>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes expandCard {
                    from {
                        transform: scale(0.8);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }

                .animate-expandCard {
                    animation: expandCard 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
            `}</style>
        </section>
    );
}
