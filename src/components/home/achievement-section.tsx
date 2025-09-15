import { useState, useEffect, useRef } from "react";
import {achievementStats, companyLogos} from "./constants/constants.tsx";

export default function AchievementSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
    const [visibleLogos, setVisibleLogos] = useState<number[]>([]);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Animate counters
                    achievementStats.forEach((stat, index) => {
                        const targetValue = parseInt(stat.number.replace(/[^\d]/g, '')) || 99;
                        let startValue = 0;
                        const increment = targetValue / 60;
                        const timer = setInterval(() => {
                            startValue += increment;
                            if (startValue >= targetValue) {
                                startValue = targetValue;
                                clearInterval(timer);
                            }
                            setCounters(prev => ({
                                ...prev,
                                [index]: Math.floor(startValue)
                            }));
                        }, 50);
                    });

                    // Stagger logo animations
                    companyLogos.forEach((_, index) => {
                        setTimeout(() => {
                            setVisibleLogos(prev => [...prev, index]);
                        }, index * 100 + 800);
                    });
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const formatNumber = (num: number, originalString: string) => {
        if (originalString.includes('+')) {
            if (num >= 1000) return `${Math.floor(num/1000)}k+`;
            return `${num}+`;
        }
        if (originalString.includes('%')) return `${num}%`;
        if (originalString.includes('/')) return originalString;
        return num.toString();
    };

    return (
        <section ref={sectionRef} className="bg-gradient-to-r from-[#FF8A00] to-[#FFB45B] py-16 md:py-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className={`flex items-center justify-center mb-4 gap-2 transition-all duration-1000 ease-out ${isVisible
                        ? 'opacity-100 transform translate-y-0'
                        : 'opacity-0 transform translate-y-8'
                    }`}>
                        <div className={`h-1 bg-white/60 rounded-full transition-all duration-1000 ease-out delay-200 ${isVisible ? 'w-8' : 'w-0'}`}></div>
                        <h2 className={`text-3xl md:text-4xl font-bold text-white text-center transition-all duration-1000 ease-out delay-300 ${isVisible
                            ? 'opacity-100 transform translate-y-0'
                            : 'opacity-0 transform translate-y-4'
                        }`}>
                            Our Achievements
                        </h2>
                        <div className={`h-1 bg-white/60 rounded-full transition-all duration-1000 ease-out delay-200 ${isVisible ? 'w-8' : 'w-0'}`}></div>
                    </div>
                    <p className={`text-lg text-white/90 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-500 ${isVisible
                        ? 'opacity-100 transform translate-y-0'
                        : 'opacity-0 transform translate-y-4'
                    }`}>
                        Numbers that speak to our commitment to excellence and the trust our clients place in us
                    </p>
                </div>

                {/* Stats Counter */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {achievementStats.map((stat, index) => (
                        <div
                            key={index}
                            className={`text-center group transition-all duration-700 ease-out delay-${index * 100} ${isVisible
                                ? 'opacity-100 transform translate-y-0'
                                : 'opacity-0 transform translate-y-8'
                            }`}
                        >
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20">
                                <div className="text-4xl mb-4 group-hover:animate-bounce">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
                                    {formatNumber(counters[index as keyof typeof counters], stat.number)}
                                </div>
                                <div className="text-white/80 font-medium text-lg">
                                    {stat.label}
                                </div>
                                {/* Animated bar */}
                                <div className="mt-4 mx-auto w-0 h-1 bg-white/60 rounded-full group-hover:w-12 transition-all duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Company Logos Section */}
                <div className="text-center">
                    <p className={`text-white/90 text-lg font-medium mb-8 transition-all duration-1000 ease-out delay-700 ${isVisible
                        ? 'opacity-100 transform translate-y-0'
                        : 'opacity-0 transform translate-y-4'
                    }`}>
                        Trusted by industry leaders worldwide
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                        {companyLogos.map((logo, index) => (
                            <div
                                key={logo.name}
                                className={`transition-all duration-500 ease-out ${visibleLogos.includes(index)
                                    ? 'opacity-100 transform translate-y-0 scale-100'
                                    : 'opacity-0 transform translate-y-4 scale-95'
                                }`}
                            >
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
                                    <img
                                        src={logo.url}
                                        alt={logo.name}
                                        className="h-12 w-24 object-cover rounded-lg filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className={`absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full transition-all duration-3000 ease-out delay-1000 ${isVisible ? 'opacity-100 animate-float' : 'opacity-0'}`}></div>
                    <div className={`absolute bottom-32 right-20 w-6 h-6 bg-white/15 rounded-full transition-all duration-3000 ease-out delay-1500 ${isVisible ? 'opacity-100 animate-float' : 'opacity-0'}`}></div>
                    <div className={`absolute top-1/2 left-20 w-2 h-2 bg-white/25 rounded-full transition-all duration-3000 ease-out delay-2000 ${isVisible ? 'opacity-100 animate-float' : 'opacity-0'}`}></div>
                </div>
            </div>
        </section>
    );
}