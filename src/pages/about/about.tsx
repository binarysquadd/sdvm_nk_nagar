import { useEffect, useRef, useState } from "react";

export default function About() {
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
        <section ref={sectionRef} className="px-6 py-16 md:py-24 bg-white">
            <div className="container mx-auto max-w-6xl">
                {/* Heading with divider lines */}
                <div
                    className={`flex items-center justify-center mb-8 md:mb-12 gap-2 transition-all duration-1000 ease-out ${
                        isVisible
                            ? "opacity-100 transform translate-y-0"
                            : "opacity-0 transform translate-y-6"
                    }`}
                >
                    <div
                        className={`h-1 bg-[#FF8A00]/60 rounded-full transition-all duration-1000 ease-out delay-200 ${
                            isVisible ? "w-6" : "w-0"
                        }`}
                    ></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        About Us
                    </h2>
                    <div
                        className={`h-1 bg-[#FF8A00]/60 rounded-full transition-all duration-1000 ease-out delay-200 ${
                            isVisible ? "w-6" : "w-0"
                        }`}
                    ></div>
                </div>

                {/* Subheading */}
                <p className="mb-12 text-lg text-[#565451] text-center max-w-3xl mx-auto">
                    We are dedicated to providing quality education, innovative research,
                    and a vibrant student community. Our mission is to empower learners
                    with knowledge and skills to shape a brighter future.
                </p>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image */}
                    <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop"
                        alt="About Us"
                        className="rounded-2xl shadow-lg object-cover w-full h-full bg-[#FF8A00]"
                    />

                    {/* Right Side - Text */}
                    <div
                        className={`transition-all duration-1000 ease-out delay-500 ${
                            isVisible
                                ? "opacity-100 transform translate-y-0"
                                : "opacity-0 transform translate-y-6"
                        }`}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Who We Are
                        </h3>
                        <p className="text-[#565451] mb-6 leading-relaxed">
                            Our institution is built on a foundation of excellence,
                            collaboration, and innovation. With state-of-the-art facilities,
                            expert faculty, and a supportive environment, we strive to provide
                            students with the best opportunities for growth.
                        </p>

                        <ul className="space-y-3 text-[#565451]">
                            <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FF8A00] text-white text-sm">
                  ✓
                </span>
                                World-class faculty and staff
                            </li>
                            <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FF8A00] text-white text-sm">
                  ✓
                </span>
                                Cutting-edge research and innovation
                            </li>
                            <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FF8A00] text-white text-sm">
                  ✓
                </span>
                                Strong community engagement and values
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-8 bg-gray-50 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition">
                        <h4 className="text-xl font-semibold text-[#FF8A00] mb-3">
                            Our Mission
                        </h4>
                        <p className="text-[#565451] leading-relaxed">
                            To deliver high-quality education and research opportunities that
                            nurture innovation, leadership, and social responsibility among
                            students and faculty.
                        </p>
                    </div>
                    <div className="p-8 bg-gray-50 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition">
                        <h4 className="text-xl font-semibold text-[#FF8A00] mb-3">
                            Our Vision
                        </h4>
                        <p className="text-[#565451] leading-relaxed">
                            To be recognized as a global leader in education and research,
                            shaping the future through creativity, inclusivity, and
                            excellence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
