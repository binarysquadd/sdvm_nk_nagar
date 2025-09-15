import { useEffect, useRef, useState } from "react";

export default function ContactSection14() {
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
            <div className="container mx-auto text-center max-w-6xl">
                {/* Heading with side divs */}
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
                    <h2
                        className={`text-3xl md:text-4xl font-bold text-gray-900 transition-all duration-1000 ease-out delay-300`}
                    >
                        We&apos;re Here to Help
                    </h2>
                    <div
                        className={`h-1 bg-[#FF8A00]/60 rounded-full transition-all duration-1000 ease-out delay-200 ${
                            isVisible ? "w-6" : "w-0"
                        }`}
                    ></div>
                </div>

                {/* Subheading */}
                <p className="mb-12 text-lg text-[#565451] max-w-2xl mx-auto">
                    Whether it&apos;s a question about our services, a request for
                    technical assistance, or suggestions for improvement, our team is
                    eager to hear from you.
                </p>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
                    {/* Image */}
                    <img
                        src="/image/map.svg"
                        alt="map"
                        className="w-full h-full lg:max-h-[510px] rounded-xl shadow-md bg-[#FF8A00]"
                    />

                    {/* Contact Form */}
                    <form className="flex flex-col gap-6 p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-100">
                        <p className="text-left font-semibold text-gray-700">
                            Select Options for Business Engagement
                        </p>

                        {/* Options */}
                        <div className="flex gap-4">
                            <button
                                type="button"
                                className="px-4 py-2 border border-[#FF8A00] text-[#FF8A00] rounded-lg hover:bg-[#FF8A00] hover:text-white transition"
                            >
                                General inquiry
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 border border-[#FF8A00] text-[#FF8A00] rounded-lg hover:bg-[#FF8A00] hover:text-white transition"
                            >
                                Product Support
                            </button>
                        </div>

                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="mb-2 block text-left font-medium text-gray-900">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="first-name"
                                    placeholder="First Name"
                                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-left font-medium text-gray-900">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="last-name"
                                    placeholder="Last Name"
                                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-left font-medium text-gray-900">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="name@email.com"
                                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="mb-2 block text-left font-medium text-gray-900">
                                Your Message
                            </label>
                            <textarea
                                rows={6}
                                name="message"
                                placeholder="Message"
                                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-[#FF8A00] hover:bg-[#e57700] text-white rounded-xl py-3 shadow-md hover:shadow-lg transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
