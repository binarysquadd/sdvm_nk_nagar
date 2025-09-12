import { FacebookLogoIcon, InstagramLogoIcon, TwitterLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <main>
            <section className="relative bg-orange-50 py-20 overflow-hidden"> {/* 🔸 light orange background */}
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

                    {/* Background Pattern */}
                    <div className="absolute inset-0 w-full h-full opacity-20">
                        <svg
                            viewBox="0 0 100 100"
                            className="w-full h-full"
                            preserveAspectRatio='none'
                        >
                            <defs>
                                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <path
                                        d="M 10 0 L 0 0 0 10"
                                        fill="none"
                                        stroke="#fb923c"  // orange-400
                                        strokeWidth="0.1"
                                    />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>

                    {/* Floating SVG Shapes */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {/* Circle 1 */}
                        <svg className="absolute top-20 left-10 w-16 h-16 text-orange-300 opacity-60 animate-float-slow" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                        </svg>

                        {/* Triangle 1 */}
                        <svg className="absolute top-40 right-20 w-12 h-12 text-red-300 opacity-50 animate-float-medium" viewBox="0 0 100 100">
                            <polygon points="50,15 85,75 15,75" fill="currentColor"/>
                        </svg>

                        {/* Circle 2 */}
                        <svg className="absolute bottom-32 left-20 w-8 h-8 text-yellow-400 opacity-70 animate-float-fast" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="currentColor"/>
                        </svg>

                        {/* Square 1 */}
                        <svg className="absolute top-60 left-1/3 w-10 h-10 text-orange-400 opacity-40 animate-float-slow" viewBox="0 0 100 100">
                            <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="3"/>
                        </svg>

                        {/* Pentagon */}
                        <svg className="absolute bottom-20 right-32 w-14 h-14 text-red-400 opacity-50 animate-float-medium" viewBox="0 0 100 100">
                            <polygon points="50,10 90,35 75,85 25,85 10,35" fill="none" stroke="currentColor" strokeWidth="2"/>
                        </svg>

                        {/* Small Circle */}
                        <svg className="absolute top-32 right-40 w-6 h-6 text-orange-500 opacity-60 animate-float-fast" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="currentColor"/>
                        </svg>

                        {/* Diamond */}
                        <svg className="absolute bottom-40 left-1/2 w-12 h-12 text-yellow-500 opacity-45 animate-float-slow" viewBox="0 0 100 100">
                            <polygon points="50,20 80,50 50,80 20,50" fill="currentColor"/>
                        </svg>

                        {/* Hexagon */}
                        <svg className="absolute top-16 left-1/2 w-10 h-10 text-red-300 opacity-55 animate-float-medium" viewBox="0 0 100 100">
                            <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" fill="none" stroke="currentColor" strokeWidth="2"/>
                        </svg>

                        {/* Large Circle */}
                        <svg className="absolute bottom-60 right-10 w-20 h-20 text-orange-200 opacity-30 animate-float-slow" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1"/>
                        </svg>

                        {/* Star */}
                        <svg className="absolute top-80 left-40 w-8 h-8 text-yellow-400 opacity-65 animate-float-fast" viewBox="0 0 100 100">
                            <polygon points="50,15 61,35 85,35 67,50 73,75 50,60 27,75 33,50 15,35 39,35" fill="currentColor"/>
                        </svg>
                    </div>

                    {/* Hero Illustration (placeholder box with corner accents) */}
                    <div className={`relative w-full md:w-[480px] md:h-[360px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl shadow-lg p-0 relative overflow-hidden">
                            {/* Corner Decorations */}
                            <img
                                src="https://svmberhampur.com/uploads/gallery/media/building_2.jpg"
                                alt="banner image"
                                width="580"
                                height="360"
                                fetchPriority="high"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-orange-300 rounded-tl-2xl"></div>
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-orange-300 rounded-br-2xl"></div>
                        </div>
                    </div>

                    {/* Hero Content */}
                    <div className={`flex-1 text-center md:text-left space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="space-y-2">
                            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full mb-4">
                                🎓 Learn • Grow • Succeed
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                                Transform Your
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Learning</span>
                                <br />Journey Today
                            </h1>
                        </div>

                        <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
                            Unlock your potential with our comprehensive online courses, expert instructors,
                            and interactive learning experiences designed for every skill level.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm text-gray-600 py-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                                <span>10,000+ Students</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                <span>500+ Courses</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                                <span>Expert Instructors</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center md:justify-start">
                            <button className="group inline-flex items-center gap-2 px-6 py-3 font-medium border border-orange-300 bg-white text-orange-500 rounded-xl shadow-[2px_2px_0px_orange] transition-all hover:bg-orange-500 hover:text-white hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                                Discover Now
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" className="stroke-orange-500 group-hover:stroke-white" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className={`flex md:flex-col gap-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <a href="#" className="group relative p-3 bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <FacebookLogoIcon size={24} weight="fill" className="transition-transform duration-300 group-hover:scale-110"/>
                        </a>
                        <a href="#" className="group relative p-3 bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <InstagramLogoIcon size={24} weight="fill" className="transition-transform duration-300 group-hover:scale-110"/>
                        </a>
                        <a href="#" className="group relative p-3 bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <TwitterLogoIcon size={24} weight="fill" className="transition-transform duration-300 group-hover:scale-110"/>
                        </a>
                        <a href="#" className="group relative p-3 bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <YoutubeLogoIcon size={24} weight="fill" className="transition-transform duration-300 group-hover:scale-110"/>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}