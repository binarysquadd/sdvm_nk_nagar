import { useState, useEffect } from "react";

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        setIsVisible(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
            {/* Animated Gradient Background */}
            <div
                className="absolute inset-0 opacity-90 transition-all duration-1000 ease-out"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(255, 138, 0, 0.8) 0%, 
            rgba(255, 174, 51, 0.6) 35%, 
            rgba(255, 180, 91, 0.4) 70%, 
            rgba(18, 16, 12, 0.8) 100%)`,
                }}
            />

            {/* Dynamic SVG Background */}
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(255, 138, 0, 0.3)" />
                        <stop offset="50%" stopColor="rgba(255, 174, 51, 0.2)" />
                        <stop offset="100%" stopColor="rgba(255, 180, 91, 0.1)" />
                    </radialGradient>
                    <radialGradient id="grad2" cx="30%" cy="70%" r="40%">
                        <stop offset="0%" stopColor="rgba(255, 180, 91, 0.4)" />
                        <stop offset="100%" stopColor="rgba(255, 138, 0, 0.1)" />
                    </radialGradient>
                </defs>

                {/* Animated Circles */}
                <circle cx="200" cy="200" r="150" fill="url(#grad1)" className="animate-float" />
                <circle cx="800" cy="300" r="100" fill="url(#grad2)" className="animate-float-reverse" />
                <circle cx="600" cy="700" r="80" fill="url(#grad1)" className="animate-float-slow" />

                {/* Floating Geometric Shapes */}
                <polygon
                    points="100,800 150,750 200,800 150,850"
                    fill="rgba(255, 174, 51, 0.2)"
                    className="animate-spin-slow"
                />
                <polygon
                    points="850,100 900,50 950,100 900,150"
                    fill="rgba(255, 138, 0, 0.3)"
                    className="animate-bounce-subtle"
                />
            </svg>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div
                        className={`space-y-8 text-left transform transition-all duration-1000 delay-300 ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                            <div className="w-2 h-2 bg-[#FFB45B] rounded-full animate-pulse"></div>
                            <span className="text-white text-sm font-medium">Excellence Since 1985</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight">
                            Welcome to{" "}
                            <span className="bg-gradient-to-r from-[#FFB45B] via-[#FFAE33] to-[#FF8A00] bg-clip-text text-transparent animate-gradient">
                            Saraswati
                            </span>
                            <br />
                            <span className="text-white/90">Degree Vidya Mandir</span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl">
                            Empowering minds, shaping futures. Join thousands of students who've achieved their
                            dreams through our{" "}
                            <span className="text-[#FFB45B] font-semibold">world-class education</span> and
                            innovative learning approach.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 py-6">
                            {[
                                { number: "5000+", label: "Students" },
                                { number: "100+", label: "Faculty" },
                                { number: "50+", label: "Years" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl lg:text-3xl font-bold text-[#FFB45B] animate-count">
                                        {stat.number}
                                    </div>
                                    <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="group relative px-8 py-4 bg-white text-[#12100C] font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A00] to-[#FFB45B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative group-hover:text-white transition-colors duration-300">
                                    Explore Programs
                                </span>
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#FF8A00] to-[#FFB45B] group-hover:w-full transition-all duration-300"></div>
                            </button>

                            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#FF8A00] to-[#FFB45B] text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                <span className="relative flex items-center gap-2">
                                Apply Now
                                <svg
                                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div
                        className={`relative lg:ml-8 transform transition-all duration-1000 delay-500 ${
                            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                        }`}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF8A00]/30 via-[#FFAE33]/20 to-[#FFB45B]/30 rounded-3xl blur-3xl animate-pulse-glow"></div>

                            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                                <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                    <div className="text-center space-y-4">
                                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#FFB45B] to-[#FF8A00] rounded-full flex items-center justify-center shadow-2xl">
                                            <svg
                                                className="w-12 h-12 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                />
                                            </svg>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-white font-bold text-lg">Excellence in Education</h3>
                                            <p className="text-white/70 text-sm">Building Tomorrow's Leaders</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FFB45B] rounded-full animate-bounce-subtle shadow-lg"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#FF8A00] rounded-full animate-float shadow-lg"></div>
                                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-white/50 rounded-full animate-pulse"></div>
                                <div className="absolute top-1/4 -right-8 w-3 h-3 bg-[#FFAE33] rounded-full animate-float-reverse"></div>
                            </div>
                        </div>

                        {/* Floating Cards */}
                        <div className="absolute -bottom-6 -left-6 bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-white text-sm font-medium">Live Classes</span>
                            </div>
                        </div>

                        <div className="absolute -top-6 -right-6 bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 animate-float-reverse">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                                <span className="text-white text-sm font-medium">Online Learning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    );
}
