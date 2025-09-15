import { footerMeta, footerSections } from "./constants/constants.tsx";
import { Link } from "react-router-dom";
import {useEffect, useRef, useState} from "react";

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleSections, setVisibleSections] = useState<number[]>([]);
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Animate sections with staggered delay
                    footerSections.forEach((_, index) => {
                        setTimeout(() => {
                            setVisibleSections(prev => [...prev, index]);
                        }, index * 150);
                    });
                }
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <footer ref={footerRef} className="px-4 py-16 mx-auto max-w-7xl bg-gray-50">
            <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
                {/* Logo & Description */}
                <div className={`col-span-3 transition-all duration-1000 ease-out ${
                    isVisible
                        ? 'opacity-100 transform translate-y-0'
                        : 'opacity-0 transform translate-y-8'
                }`}>
                    <a href="#" title="Home Page" className="flex items-center">
                        {/* SVG Logo here */}
                        <span className="sr-only">Home Page</span>
                    </a>
                    <p className="my-4 text-sm leading-relaxed text-[#565451]">
                        {footerMeta.description}
                    </p>
                </div>

                {/* Dynamic Sections */}
                {footerSections.map((section, idx) => (
                    <nav
                        key={idx}
                        className={`col-span-1 md:col-span-1 lg:col-span-2 transition-all duration-800 ease-out ${
                            visibleSections.includes(idx)
                                ? 'opacity-100 transform translate-y-0'
                                : 'opacity-0 transform translate-y-12'
                        }`}
                        style={{ transitionDelay: `${200 + (idx * 150)}ms` }}
                    >
                        <p className="mb-3 text-xs font-semibold tracking-wider text-[#FF8A00] uppercase">
                            {section.title}
                        </p>
                        {section.links.map((link, i) => (
                            <Link
                                key={i}
                                to={link.href}
                                className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-[#FF8A00]"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                ))}
            </div>

            {/* Bottom Meta */}
            <div className={`flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-200 md:flex-row md:items-center transition-all duration-1000 ease-out delay-700 ${
                isVisible
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-8'
            }`}>
                <p className="mb-2 text-xs text-left text-[#565451] md:mb-0">
                    {footerMeta.tagline}{" "}
                    <Link
                        to={footerMeta.link}
                        className="hover:text-[#FF8A00] font-semibold"
                    >
                        {footerMeta.company_name}
                    </Link>
                </p>
                <p className="mb-0 text-xs text-left text-[#565451] md:mb-0">
                    {footerMeta.copyright}
                </p>
            </div>
        </footer>
    );
}

