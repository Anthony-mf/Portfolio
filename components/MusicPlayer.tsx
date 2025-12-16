'use client';
import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export interface Track {
    audioSrc: string;
    title: string;
    artist: string;
    coverImage?: string;
}

interface MusicPlayerProps {
    tracks: Track[];
    accentColor: string;
}

export default function MusicPlayer({ tracks, accentColor }: MusicPlayerProps) {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.7);
    const [isMuted, setIsMuted] = useState(false);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const currentTrack = tracks[currentTrackIndex];

    // Get previous and next tracks with circular logic
    const getPrevIndex = () => (currentTrackIndex - 1 + tracks.length) % tracks.length;
    const getNextIndex = () => (currentTrackIndex + 1) % tracks.length;

    const prevTrack = tracks[getPrevIndex()];
    const nextTrack = tracks[getNextIndex()];

    // Reset playback when track changes (NOT when play/pause changes)
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.load();
        setCurrentTime(0);

        if (isPlaying) {
            audio.play().catch(() => setIsPlaying(false));
        }
    }, [currentTrackIndex]); // Removed isPlaying from dependencies

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const handleEnded = () => {
            // Auto-play next track
            goToNextTrack();
        };

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [currentTrackIndex, tracks.length]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume;
        }
    }, [volume, isMuted]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        setCurrentTime(newTime);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        setIsMuted(false);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };


    const goToPreviousTrack = () => {
        setSlideDirection('right');
        setTimeout(() => {
            setCurrentTrackIndex(getPrevIndex());
            setTimeout(() => setSlideDirection(null), 50);
        }, 300);
    };

    const goToNextTrack = () => {
        setSlideDirection('left');
        setTimeout(() => {
            setCurrentTrackIndex(getNextIndex());
            setTimeout(() => setSlideDirection(null), 50);
        }, 300);
    };

    const formatTime = (time: number) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="w-full mx-auto mt-6 md:mt-8 mb-6 md:mb-8 px-2 md:px-4">
            <audio ref={audioRef} src={currentTrack.audioSrc} />


            {/* Circular Carousel - Responsive */}
            <div className="relative min-h-[350px] md:min-h-[400px] lg:min-h-[450px] py-4 md:py-6 mb-6 md:mb-8 flex items-center justify-center perspective-1000 overflow-visible">
                <div
                    className={`flex items-center justify-center gap-4 md:gap-8 lg:gap-12 transition-all duration-300 ease-in-out ${slideDirection === 'left' ? 'animate-slide-to-left' :
                        slideDirection === 'right' ? 'animate-slide-to-right' : ''
                        }`}
                >
                    {/* Previous Track (Left) - Responsive */}
                    <div
                        onClick={goToPreviousTrack}
                        className="cursor-pointer transform hover:scale-105 transition-transform duration-300 z-10 hidden sm:block"
                        style={{
                            opacity: 0.5,
                            transform: 'scale(0.75) rotateY(20deg)',
                        }}
                    >
                        <div
                            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm relative"
                            style={{
                                border: `2px solid ${accentColor}30`,
                                background: `linear-gradient(135deg, ${accentColor}10, ${accentColor}05)`
                            }}
                        >
                            <img
                                src={prevTrack.coverImage || '/images/default-cover.png'}
                                alt={prevTrack.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                                <p className="text-white text-sm font-semibold truncate">{prevTrack.title}</p>
                                <p className="text-gray-300 text-xs truncate">{prevTrack.artist}</p>
                            </div>
                        </div>
                    </div>

                    {/* Current Track (Center) - Responsive */}
                    <div
                        className="z-20 transition-transform duration-300"
                        style={{
                            transform: 'scale(1)',
                        }}
                    >
                        <div
                            className="w-48 md:w-56 lg:w-64 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md"
                            style={{
                                background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}05)`,
                                border: `2px solid ${accentColor}50`,
                                boxShadow: `0 20px 60px ${accentColor}30`
                            }}
                        >
                            {/* Album Art */}
                            <div className="relative flex items-center justify-center p-3 md:p-4">
                                {currentTrack.coverImage ? (
                                    <img
                                        src={currentTrack.coverImage}
                                        alt={currentTrack.title}
                                        className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 object-cover rounded-xl"
                                    />
                                ) : (
                                    <div className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl">
                                        <FaPlay className="text-4xl md:text-5xl lg:text-6xl text-gray-600" />
                                    </div>
                                )}
                            </div>

                            {/* Track Info & Controls */}
                            <div className="p-3 md:p-4 pt-0">
                                {/* Track Info */}
                                <div className="text-center mb-3 md:mb-4">
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white truncate">{currentTrack.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-400 truncate">{currentTrack.artist}</p>
                                    <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                                        Track {currentTrackIndex + 1} of {tracks.length}
                                    </p>
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-4">
                                    <input
                                        type="range"
                                        min="0"
                                        max={duration || 0}
                                        value={currentTime}
                                        onChange={handleSeek}
                                        className="w-full h-1 rounded-full appearance-none cursor-pointer progress-bar"
                                        style={{
                                            background: `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${(currentTime / duration) * 100}%, rgba(255,255,255,0.1) ${(currentTime / duration) * 100}%, rgba(255,255,255,0.1) 100%)`
                                        }}
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                                        <span>{formatTime(currentTime)}</span>
                                        <span>{formatTime(duration)}</span>
                                    </div>
                                </div>

                                {/* Controls */}
                                <div className="flex items-center justify-center gap-3 md:gap-4">
                                    {/* Play/Pause Button */}
                                    <button
                                        onClick={togglePlay}
                                        className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                                        style={{
                                            backgroundColor: accentColor,
                                            boxShadow: `0 4px 20px ${accentColor}40`
                                        }}
                                    >
                                        {isPlaying ? (
                                            <FaPause className="text-white text-lg md:text-2xl" />
                                        ) : (
                                            <FaPlay className="text-white text-lg md:text-2xl ml-0.5 md:ml-1" />
                                        )}
                                    </button>

                                    {/* Volume Control */}
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={toggleMute}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {isMuted || volume === 0 ? (
                                                <FaVolumeMute className="text-xl" />
                                            ) : (
                                                <FaVolumeUp className="text-xl" />
                                            )}
                                        </button>
                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.01"
                                            value={isMuted ? 0 : volume}
                                            onChange={handleVolumeChange}
                                            className="w-24 h-1 rounded-full appearance-none cursor-pointer volume-bar"
                                            style={{
                                                background: `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.1) ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.1) 100%)`
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Next Track (Right) - Responsive */}
                    <div
                        onClick={goToNextTrack}
                        className="cursor-pointer transform hover:scale-105 transition-transform duration-300 z-10 hidden sm:block"
                        style={{
                            opacity: 0.5,
                            transform: 'scale(0.75) rotateY(-20deg)',
                        }}
                    >
                        <div
                            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm relative"
                            style={{
                                border: `2px solid ${accentColor}30`,
                                background: `linear-gradient(135deg, ${accentColor}10, ${accentColor}05)`
                            }}
                        >
                            <img
                                src={nextTrack.coverImage || '/images/default-cover.png'}
                                alt={nextTrack.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                                <p className="text-white text-sm font-semibold truncate">{nextTrack.title}</p>
                                <p className="text-gray-300 text-xs truncate">{nextTrack.artist}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }

                @keyframes slideToLeft {
                    0% {
                        transform: translateX(0) scale(1) rotateY(0deg);
                        opacity: 1;
                    }
                    50% {
                        transform: translateX(-30%) scale(0.8) rotateY(-15deg);
                        opacity: 0.5;
                    }
                    100% {
                        transform: translateX(-100%) scale(0.6) rotateY(-30deg);
                        opacity: 0;
                    }
                }

                @keyframes slideToRight {
                    0% {
                        transform: translateX(0) scale(1) rotateY(0deg);
                        opacity: 1;
                    }
                    50% {
                        transform: translateX(30%) scale(0.8) rotateY(15deg);
                        opacity: 0.5;
                    }
                    100% {
                        transform: translateX(100%) scale(0.6) rotateY(30deg);
                        opacity: 0;
                    }
                }

                .animate-slide-to-left {
                    animation: slideToLeft 0.3s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
                }

                .animate-slide-to-right {
                    animation: slideToRight 0.3s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
                }

                .progress-bar::-webkit-slider-thumb {
                    appearance: none;
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    background: white;
                    cursor: pointer;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
                    transition: transform 0.2s;
                }

                .progress-bar::-webkit-slider-thumb:hover {
                    transform: scale(1.2);
                }

                .progress-bar::-moz-range-thumb {
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    background: white;
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
                    transition: transform 0.2s;
                }

                .progress-bar::-moz-range-thumb:hover {
                    transform: scale(1.2);
                }

                .volume-bar::-webkit-slider-thumb {
                    appearance: none;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: white;
                    cursor: pointer;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                }

                .volume-bar::-moz-range-thumb {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: white;
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                }
            `}</style>
        </div>
    );
}
