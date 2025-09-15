import { useEffect, useRef, useState } from "react";
import { faqs } from "./constants/constants.tsx";

export default function FAQ() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="px-4 pt-20 pb-24 mx-auto max-w-4xl md:px-2"
        >
            {/* Heading with side divs */}
            <div
                className={`flex items-center justify-center mb-12 gap-2 transition-all duration-1000 ease-out ${
                    isVisible
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-0 transform translate-y-8"
                }`}
            >
                <div
                    className={`h-1 bg-[#FF8A00]/60 rounded-full transition-all duration-1000 ease-out delay-200 ${
                        isVisible ? "w-6" : "w-0"
                    }`}
                ></div>
                <h1
                    className={`text-3xl md:text-4xl font-bold text-gray-900 text-center transition-all duration-1000 ease-out delay-300 ${
                        isVisible
                            ? "opacity-100 transform translate-y-0"
                            : "opacity-0 transform translate-y-4"
                    }`}
                >
                    Frequently Asked Questions
                </h1>
                <div
                    className={`h-1 bg-[#FF8A00]/60 rounded-full transition-all duration-1000 ease-out delay-200 ${
                        isVisible ? "w-6" : "w-0"
                    }`}
                ></div>
            </div>

            {/* FAQ Items - one per row */}
            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className={`px-6 py-4 bg-gray-50 rounded-xl shadow-sm border border-gray-100 transition-all duration-700 ease-out ${
                            isVisible
                                ? "opacity-100 transform translate-y-0"
                                : "opacity-0 transform translate-y-6"
                        }`}
                        style={{ transitionDelay: `${idx * 120}ms` }}
                    >
                        <details className="group">
                            <summary className="flex items-center justify-between py-2 font-semibold text-gray-800 cursor-pointer hover:text-[#FF8A00]">
                                <span>{faq.question}</span>
                                <svg
                                    className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-90"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </summary>
                            <p className="mt-3 ml-6 text-gray-600 leading-relaxed">
                                {faq.answer}
                            </p>
                        </details>
                    </div>
                ))}
            </div>
        </section>
    );
}
