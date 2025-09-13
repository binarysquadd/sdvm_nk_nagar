import { useState, useEffect } from 'react';
import { CaretRightIcon, CaretLeftIcon } from "@phosphor-icons/react";
import { FEATURE_DEPARTMENT_DATA } from "./constants/constants.tsx";

export default function DepartmentSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionIndex, setTransitionIndex] = useState(0); // 👈 new state
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [slideDirection, setSlideDirection] = useState<'right' | 'left'>('right');

    // Auto-rotate every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleTransition = (newIndex: number, direction: 'right' | 'left' = 'right') => {
        if (newIndex === currentIndex || isTransitioning) return;

        setSlideDirection(direction);
        setTransitionIndex(newIndex); // 👈 store upcoming dept for overlay
        setIsTransitioning(true);

        // Theater effect
        setTimeout(() => {
            setCurrentIndex(newIndex); // 👈 update actual content after overlay runs
            setTimeout(() => {
                setIsTransitioning(false);
            }, 600);
        }, 1000);
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % FEATURE_DEPARTMENT_DATA.length;
        handleTransition(nextIndex, 'right');
    };

    const handlePrev = () => {
        const prevIndex =
            currentIndex === 0 ? FEATURE_DEPARTMENT_DATA.length - 1 : currentIndex - 1;
        handleTransition(prevIndex, 'left');
    };

    const currentItem = FEATURE_DEPARTMENT_DATA[currentIndex];
    const transitionItem = FEATURE_DEPARTMENT_DATA[transitionIndex]; // 👈 use for overlay

    return (
        <section className="px-4 py-24 mx-auto max-w-7xl relative">
            <div className="flex items-center justify-center mb-12 gap-2">
                <div className="w-6 h-1 bg-[#FF8A00]/60 rounded-full"></div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                        honor's
                    </h2>
                </div>
                <div className="w-6 h-1 bg-[#FF8A00]/60 rounded-full"></div>
            </div>

            {/* Main Content */}
            <div className="relative overflow-hidden">
                {/* Animated Overlay with Dept name + icon */}
                <div
                    className={`absolute inset-0 flex items-center justify-center z-10 transition-transform duration-700 ease-in-out ${
                        isTransitioning
                            ? 'translate-x-0'
                            : slideDirection === 'right'
                                ? '-translate-x-full'
                                : 'translate-x-full'
                    } bg-gradient-to-r from-orange-500 to-orange-600`}
                >
                    <div
                        className={`flex flex-col items-center text-white text-center transform transition-all duration-500 ${
                            isTransitioning ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`}
                    >
                        {/* Icon */}
                        <transitionItem.icon size={60} className="mb-4 animate-bounce" />
                        {/* Dept Name */}
                        <h3 className="text-2xl md:text-4xl font-bold tracking-wide">
                            {transitionItem.department}
                        </h3>
                    </div>
                </div>

                {/* Content */}
                <div
                    className={`grid items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 transition-all duration-500 ${
                        isTransitioning
                            ? 'opacity-0 transform scale-95'
                            : 'opacity-100 transform scale-100'
                    }`}
                >
                    <div className="space-y-6">
                        <div className="inline-block">
                            <h1 className="text-orange-500 font-semibold text-lg uppercase tracking-wide mb-2">
                                {currentItem.department}
                            </h1>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-tight">
                            {currentItem.sub_heading}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {currentItem.description}
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <button className="group inline-flex items-center gap-2 px-6 py-3 font-medium border border-orange-300 bg-white text-orange-500 rounded-xl shadow-[2px_2px_0px_orange] transition-all hover:bg-orange-500 hover:text-white hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                                Discover Now
                                <svg
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        className="stroke-orange-500 group-hover:stroke-white"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Image with top-right controls */}
                    <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={currentItem.image}
                            alt={currentItem.department}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                        {/* Buttons in top-right corner */}
                        <div className="absolute top-4 right-4 flex gap-2 z-20">
                            <button
                                onClick={handlePrev}
                                disabled={isTransitioning}
                                className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50"
                            >
                                <CaretLeftIcon size={20} />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={isTransitioning}
                                className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50"
                            >
                                <CaretRightIcon size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-12 space-x-3">
                {FEATURE_DEPARTMENT_DATA.map((_, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleTransition(index, index > currentIndex ? 'right' : 'left')
                        }
                        disabled={isTransitioning}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? 'bg-orange-500 scale-125'
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
