import { useEffect, useRef, useState } from 'react';
import {events} from "./constants/constants.tsx";

export default function EventSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const sectionRef = useRef<HTMLElement>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const totalPages = Math.ceil(events.length / itemsPerPage);

    const paginatedEvents = events.slice(
        (currentPage - 1) * itemsPerPage, currentPage * itemsPerPage
    )

    const handlePageChange = (page: number) => {
        if(page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            setVisibleItems([]);
            setIsVisible(false);


            setTimeout(() => {
                setIsVisible(true);
                paginatedEvents.forEach((_, index) => {
                    setTimeout(() => {
                        setVisibleItems((prev) => [...prev, index]);
                    }, index * 150);
                });
            }, 100);
        }
    };


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    events.forEach((_, index) => {
                        setTimeout(() => {
                            setVisibleItems(prev => [...prev, index]);
                        }, index * 150);
                    });
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [currentPage]);

    return (
        <section ref={sectionRef} className="w-full px-4 py-24 mx-auto max-w-7xl md:w-4/5">
            {/* Header with Animation */}
            <div className="text-center mb-12">
                <div className={`flex items-center justify-center mb-2 gap-2 transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                    <div className={`h-1 bg-[#FF8A00]/60 rounded-full transition-all duration-1000 ease-out delay-200 ${
                        isVisible ? 'w-6' : 'w-0'
                    }`}></div>
                    <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 text-center transition-all duration-1000 ease-out delay-300 ${
                        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                    }`}>
                        Events & Awards
                    </h2>
                    <div className={`h-1 bg-[#FF8A00]/60 rounded-full transition-all duration-1000 ease-out delay-200 ${
                        isVisible ? 'w-6' : 'w-0'
                    }`}></div>
                </div>
                <p className={`text-lg text-[#565451] max-w-3xl mx-auto transition-all duration-1000 ease-out delay-500 ${
                    isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                    Explore our world-class facilities designed to enhance your educational experience
                </p>
            </div>

            {/* Events Grid with Staggered Animation */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {paginatedEvents.map((event, index) => (
                    <div
                        key={event.id}
                        className={`col-span-1 ${
                            index === 0 ? "md:col-span-2 lg:col-span-2 xl:col-span-3" : ""
                        } transition-all duration-800 ease-out ${
                            visibleItems.includes(index)
                                ? 'opacity-100 transform translate-y-0'
                                : 'opacity-0 transform translate-y-12'
                        }`}
                    >
                        <div
                            className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                            <div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                {/* Image Container */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={event.image}
                                        className={`object-cover w-full ${
                                            index === 0 ? "h-72" : "h-56"
                                        } transition-transform duration-300 group-hover:scale-110`}
                                        alt={event.title}
                                        loading="lazy"
                                    />
                                    {/* Orange overlay on hover */}
                                    <div
                                        className="absolute inset-0 bg-[#FF8A00] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span
                                            className="bg-[#FF8A00] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide shadow-lg">
                                            {event.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h2 className="mb-3 text-xl font-bold leading-tight text-gray-900 group-hover:text-[#FF8A00] transition-colors duration-300">
                                        {event.title}
                                    </h2>
                                    <p className="mb-4 text-[#565451] line-clamp-3">
                                        {event.description}
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="relative">
                                                <img
                                                    src={event.authorImage}
                                                    alt={event.author}
                                                    className="w-10 h-10 rounded-full object-cover border-2 border-[#FF8A00]/20 group-hover:border-[#FF8A00]/60 transition-all duration-300"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">
                                                    {event.author}
                                                </p>
                                                <p className="text-xs text-[#565451]">{event.date}</p>
                                            </div>
                                        </div>

                                        {/* Arrow Icon */}
                                        <div
                                            className="w-8 h-8 bg-[#FF8A00]/10 rounded-full flex items-center justify-center group-hover:bg-[#FF8A00] transition-all duration-300">
                                            <svg
                                                className="w-4 h-4 text-[#FF8A00] group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M9 5l7 7-7 7"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div
                className={`flex flex-col items-center justify-center mt-20 space-x-0 space-y-4 md:space-x-4 md:space-y-0 md:flex-row transition-all duration-1000 ease-out delay-700 ${
                    isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                {/* Previous Button */}
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`group relative px-8 py-4 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 w-full md:w-auto ${
                        currentPage === 1
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white border-2 border-[#FF8A00]/20 text-[#FF8A00] hover:border-[#FF8A00] hover:bg-[#FF8A00] hover:text-white'
                    }`}
                >
                    <span className="flex items-center justify-center">
                        <svg
                            className={`w-4 h-4 mr-2 transition-transform ${currentPage !== 1 ? 'group-hover:-translate-x-1' : ''}`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                        </svg>
                        Previous Page
                    </span>
                </button>

                {/* Page Numbers */}
                <div className="flex items-center space-x-2">
                    {/* Page Number (single circle) */}
                    <div className="flex items-center space-x-2">
                        <button
                            className="w-12 h-12 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 bg-[#FF8A00] text-white shadow-lg"
                            disabled
                        >
                            {currentPage}
                        </button>
                    </div>

                </div>

                {/* Next Button */}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`group relative px-8 py-4 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full md:w-auto ${
                        currentPage === totalPages
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
                            : 'bg-[#FF8A00] text-white hover:bg-[#FF8A00]/80'
                    }`}
                >
                    <span className="flex items-center justify-center">
                        Next Page
                        <svg
                            className={`w-4 h-4 ml-2 transition-transform ${currentPage !== totalPages ? 'group-hover:translate-x-1' : ''}`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                    </span>
                </button>
            </div>
        </section>
    );
}