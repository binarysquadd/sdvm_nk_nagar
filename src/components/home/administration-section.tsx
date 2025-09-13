import { useState, useEffect, useRef } from "react";
import {teamMembers} from "./constants/constants.tsx";

export default function AdministrationSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Stagger the animation of team members
                    teamMembers.forEach((_, index) => {
                        setTimeout(() => {
                            setVisibleItems(prev => [...prev, index]);
                        }, index * 150); // 150ms delay between each item
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

    return (
        <section ref={sectionRef} className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                {/* Header with entrance animation */}
                <div className="text-center mb-12">
                    <div className={`flex items-center justify-center mb-2 gap-2 transition-all duration-1000 ease-out ${isVisible
                            ? 'opacity-100 transform translate-y-0'
                            : 'opacity-0 transform translate-y-8'
                        }`}>
                        <div className={`h-1 bg-[#FF8A00]/60 rounded-full transition-all duration-1000 ease-out delay-200 ${isVisible ? 'w-6' : 'w-0'}`}></div>
                        <div>
                            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 text-center transition-all duration-1000 ease-out delay-300 ${isVisible 
                                ? 'opacity-100 transform translate-y-0'
                                : 'opacity-0 transform translate-y-4'
                                }`}
                            >
                                Administration
                            </h2>
                        </div>
                        <div className={`h-1 bg-[#FF8A00]/60 rounded-full transition-all duration-1000 ease-out delay-200 ${isVisible ? 'w-6' : 'w-0'}`}
                        ></div>
                    </div>
                    <p className={`text-lg text-[#565451] max-w-3xl mx-auto transition-all duration-1000 ease-out delay-500 ${isVisible
                            ? 'opacity-100 transform translate-y-0'
                            : 'opacity-0 transform translate-y-4'
                        }`}>
                        The Administration section provides tools and controls for managing users,
                        monitoring system activity, and configuring key settings. It ensures that
                        administrators can maintain security, oversee operations efficiently, and
                        customize the platform to meet organizational needs.
                    </p>
                </div>

                {/* Team Members Grid */}
                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {teamMembers.map((item, index) => (
                            <li
                                key={item.name}
                                className={`group flex flex-col items-center gap-4 md:gap-5 cursor-pointer transition-all duration-700 ease-out ${visibleItems.includes(index)
                                    ? 'opacity-100 transform translate-y-0 scale-100'
                                    : 'opacity-0 transform translate-y-8 scale-95'
                                }`}
                                style={{ transitionDelay: `${index * 50}ms` }}>
                                {/* Avatar with hover effects */}
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A00] to-[#FFB45B] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-110"></div>
                                    <img
                                        src={item.avatarUrl}
                                        alt={item.name}
                                        className="size-20 md:size-24 rounded-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#FF8A00]/30 border-4 border-transparent group-hover:border-[#FF8A00]/30"
                                    />
                                    {/* Animated ring */}
                                    <div className="absolute inset-0 rounded-full border-2 border-[#FF8A00] opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-125 transition-all duration-500 ease-out"></div>
                                </div>

                                {/* Text content with stagger animation */}
                                <div className="text-center">
                                    <h3
                                        className="
                      text-lg font-semibold text-gray-900 mb-1
                      transition-all duration-300 ease-out
                      group-hover:text-[#FF8A00] group-hover:scale-105
                    "
                                    >
                                        {item.name}
                                    </h3>
                                    <p
                                        className="
                      text-md text-[#565451]
                      transition-all duration-300 ease-out delay-75
                      group-hover:text-gray-700 group-hover:scale-105
                    "
                                    >
                                        {item.title}
                                    </p>

                                    {/* Animated underline */}
                                    <div className="w-0 h-0.5 bg-gradient-to-r from-[#FF8A00] to-[#FFB45B] mx-auto mt-2 group-hover:w-12 transition-all duration-300 ease-out delay-100"></div>
                                </div>

                                {/* Background glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A00]/5 to-[#FFB45B]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out -z-10 scale-110"></div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className={`
              absolute top-1/4 left-10 w-2 h-2 bg-[#FF8A00]/30 rounded-full
              transition-all duration-2000 ease-out delay-1000
              ${isVisible
                            ? 'opacity-100 transform translate-y-0 animate-pulse'
                            : 'opacity-0 transform translate-y-4'
                        }
            `}
                    ></div>
                    <div
                        className={`
              absolute bottom-1/3 right-16 w-3 h-3 bg-[#FFB45B]/20 rounded-full
              transition-all duration-2000 ease-out delay-1200
              ${isVisible
                            ? 'opacity-100 transform translate-y-0 animate-pulse'
                            : 'opacity-0 transform translate-y-4'
                        }
            `}
                    ></div>
                </div>
            </div>
        </section>
    );
}



