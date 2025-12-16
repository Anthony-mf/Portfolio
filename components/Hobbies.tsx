'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaGamepad, FaMusic, FaPen, FaBook, FaTimes } from 'react-icons/fa';
import { GiKickScooter, GiClapperboard } from "react-icons/gi";
import { useState, useEffect } from 'react';
import { IconType } from 'react-icons';
import MusicPlayer from './MusicPlayer';
import ImageCarousel from './ImageCarousel';

interface Hobby {
    icon: IconType;
    titleKey: string;
    descriptionKey: string;
    expandedDescriptionKey: string;
    color: string;
    videos?: string;
    image?: string;
    audio?: string;
    images?: string[];
}

const hobbies: Hobby[] = [
    {
        icon: GiKickScooter,
        titleKey: 'hobbies.scooter.title',
        descriptionKey: 'hobbies.scooter.description',
        expandedDescriptionKey: 'hobbies.scooter.expandedDescription',
        color: '#FF6B6B',
        videos: '/videos/Trott_Video.mp4'
    },
    {
        icon: FaGamepad,
        titleKey: 'hobbies.gaming.title',
        descriptionKey: 'hobbies.gaming.description',
        expandedDescriptionKey: 'hobbies.gaming.expandedDescription',
        color: '#4ECDC4',
        images: [
            '/images/games/Minecraft.webp',
            '/images/games/Forza_Horizon_5.webp',
            '/images/games/Skate.webp'
        ]
    },
    {
        icon: FaMusic,
        titleKey: 'hobbies.music.title',
        descriptionKey: 'hobbies.music.description',
        expandedDescriptionKey: 'hobbies.music.expandedDescription',
        color: '#95E1D3',
        audio: 'true'
    },
    {
        icon: FaPen,
        titleKey: 'hobbies.drawing.title',
        descriptionKey: 'hobbies.drawing.description',
        expandedDescriptionKey: 'hobbies.drawing.expandedDescription',
        color: '#F38181',
        images: [
            '/images/drawings/Deadpool.webp',
            '/images/drawings/Ban.webp',
            '/images/drawings/Apitrini.webp'
        ]
    },
    {
        icon: GiClapperboard,
        titleKey: 'hobbies.audiovisual.title',
        descriptionKey: 'hobbies.audiovisual.description',
        expandedDescriptionKey: 'hobbies.audiovisual.expandedDescription',
        color: '#AA96DA',
        images: [
            '/images/posters/Dr_Stone.webp',
            '/images/posters/Ready_Player_One.webp',
            '/images/posters/Umbrella_Academy.webp'
        ]
    },
    {
        icon: FaBook,
        titleKey: 'hobbies.reading.title',
        descriptionKey: 'hobbies.reading.description',
        expandedDescriptionKey: 'hobbies.reading.expandedDescription',
        color: '#FCBAD3',
        image: '/images/books/Chair_De_Poule.webp'
    },
];

export default function Hobbies() {
    const { t } = useLanguage();
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        <section id="hobbies" className="pt-20 md:pt-24 pb-6 md:pb-8 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="mb-6 md:mb-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                        {t('hobbies.pageTitle')}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        {t('hobbies.intro')}
                    </p>
                </div>

                {/* Hobbies Grid - Responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {hobbies.map((hobby, idx) => {
                        const Icon = hobby.icon;
                        const isExpanded = expandedIndex === idx;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <div key={idx} className="relative">
                                <div
                                    onClick={() => setExpandedIndex(idx)}
                                    onMouseEnter={() => setHoveredIndex(idx)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={`
                                        bg-gradient-to-br from-gray-900/70 to-black/60 rounded-3xl p-8 
                                        shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.02] transition-all duration-300 group
                                        cursor-pointer
                                        ${isExpanded ? 'opacity-0 pointer-events-none' : ''}
                                    `}
                                    style={{
                                        backgroundColor: `${hobby.color}20`,
                                        border: isHovered
                                            ? `2px solid ${hobby.color}`
                                            : '2px solid rgba(255, 255, 255, 0.1)',
                                    }}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div
                                            className="w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                                            style={{ backgroundColor: `${hobby.color}20`, border: `2px solid ${hobby.color}40` }}
                                        >
                                            <Icon className="text-4xl" style={{ color: hobby.color }} />
                                        </div>

                                        <h3 className="text-2xl font-bold mb-4">{t(hobby.titleKey)}</h3>
                                        <p className="text-gray-400 leading-relaxed">{t(hobby.descriptionKey)}</p>
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
                        className="relative w-full max-w-4xl max-h-[85vh] mt-20 mb-4 mx-4 animate-expandCard"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{ height: 'calc(85vh - 6rem)' }} className="bg-gradient-to-br from-gray-900/95 to-black/90 border border-white/20 rounded-3xl pt-16 md:pt-20 px-4 md:px-6 pb-8 md:pb-12 shadow-[0px_40px_120px_rgba(0,0,0,0.6)] overflow-y-scroll overflow-x-hidden scrollbar-custom">
                            {/* Close Button */}
                            <button
                                onClick={() => setExpandedIndex(null)}
                                className="absolute top-4 md:top-6 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group hover:cursor-pointer z-50"
                                aria-label="Close"
                            >
                                <FaTimes className="text-xl md:text-2xl text-white/70 group-hover:text-white transition-colors" />
                            </button>

                            {/* Content */}
                            <div className="flex flex-col items-center text-center">
                                <div
                                    className="w-32 h-32 rounded-full flex items-center justify-center mb-8 animate-pulse"
                                    style={{
                                        backgroundColor: `${hobbies[expandedIndex].color}20`,
                                        border: `3px solid ${hobbies[expandedIndex].color}60`,
                                        boxShadow: `0 0 40px ${hobbies[expandedIndex].color}40`
                                    }}
                                >
                                    {(() => {
                                        const Icon = hobbies[expandedIndex].icon;
                                        return <Icon className="text-6xl" style={{ color: hobbies[expandedIndex].color }} />;
                                    })()}
                                </div>

                                <h2 className="text-5xl font-bold mb-6">
                                    {t(hobbies[expandedIndex].titleKey)}
                                </h2>

                                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                    {t(hobbies[expandedIndex].expandedDescriptionKey || hobbies[expandedIndex].descriptionKey)}
                                </p>

                                {/* Additional decorative elements */}
                                <div className="mt-4 flex">
                                    <div
                                        className="w-16 h-1 rounded-full"
                                        style={{ backgroundColor: hobbies[expandedIndex].color }}
                                    />
                                </div>

                                {/* Media Section - Audio, Video or Image */}
                                {hobbies[expandedIndex].audio ? (
                                    <MusicPlayer
                                        tracks={[
                                            {
                                                audioSrc: '/audio/September_Audio.mp3',
                                                title: 'September',
                                                artist: 'Earth, Wind & Fire',
                                                coverImage: '/images/covers/September.webp'
                                            },
                                            {
                                                audioSrc: '/audio/Thunderstruck_Audio.mp3',
                                                title: 'Thunderstruck',
                                                artist: 'AC/DC',
                                                coverImage: '/images/covers/Thunderstruck.webp'
                                            },
                                            {
                                                audioSrc: '/audio/God\'s_Plan_Audio.mp3',
                                                title: "God's Plan",
                                                artist: 'Drake',
                                                coverImage: '/images/covers/God\'s_Plan.webp'
                                            }
                                        ]}
                                        accentColor={hobbies[expandedIndex].color}
                                    />
                                ) : hobbies[expandedIndex].images ? (
                                    <ImageCarousel
                                        items={hobbies[expandedIndex].images!.map((imgSrc, idx) => {
                                            // Define titles and subtitles based on hobby type
                                            let titles: string[] = [];
                                            let subtitles: string[] = [];

                                            if (hobbies[expandedIndex].titleKey === 'hobbies.audiovisual.title') {
                                                titles = ['Dr. Stone', 'Ready Player One', 'Umbrella Academy'];
                                                subtitles = ['Anime', 'Film', 'Série'];
                                            } else if (hobbies[expandedIndex].titleKey === 'hobbies.gaming.title') {
                                                titles = ['Minecraft', 'Forza Horizon 5', 'Skate'];
                                                subtitles = ['Sandbox', 'Racing', 'Sports'];
                                            } else if (hobbies[expandedIndex].titleKey === 'hobbies.drawing.title') {
                                                titles = ['Deadpool', 'Ban Et Elaine', 'Apitrini'];
                                                subtitles = ['Marvel', 'The Seven Deadly Sins', 'Pokemon'];
                                            }

                                            return {
                                                imageSrc: imgSrc,
                                                title: titles[idx] || 'Image',
                                                subtitle: subtitles[idx]
                                            };
                                        })}
                                        accentColor={hobbies[expandedIndex].color}
                                    />
                                ) : hobbies[expandedIndex].videos ? (
                                    <video
                                        src={hobbies[expandedIndex].videos}
                                        controls
                                        className="w-[15vw] h-[40vh] mx-auto mt-12 md:mt-16 rounded-2xl shadow-2xl"
                                        style={{ border: `2px solid ${hobbies[expandedIndex].color}40` }}
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                ) : hobbies[expandedIndex].image ? (
                                    <img
                                        src={hobbies[expandedIndex].image}
                                        alt={t(hobbies[expandedIndex].titleKey)}
                                        className="w-full h-60 max-w-lg mx-auto mt-12 md:mt-16 rounded-2xl shadow-2xl"
                                        style={{ border: `2px solid ${hobbies[expandedIndex].color}40` }}
                                    />
                                ) : null}
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

                /* Custom Scrollbar Styles */
                :global(.scrollbar-custom) {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(251, 146, 60, 0.5) rgba(255, 255, 255, 0.1);
                }

                :global(.scrollbar-custom::-webkit-scrollbar) {
                    width: 8px;
                }

                :global(.scrollbar-custom::-webkit-scrollbar-track) {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }

                :global(.scrollbar-custom::-webkit-scrollbar-thumb) {
                    background: rgba(251, 146, 60, 0.5);
                    border-radius: 10px;
                }

                :global(.scrollbar-custom::-webkit-scrollbar-thumb:hover) {
                    background: rgba(251, 146, 60, 0.7);
                }
            `}</style>
        </section>
    );
}
