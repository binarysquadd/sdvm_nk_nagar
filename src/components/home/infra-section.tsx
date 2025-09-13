import { useState } from "react";
import type { InfraItem, SubLab } from "./constants/constants.tsx";
import {INFRA_DATA} from "./constants/constants.tsx";

type SelectedItem = InfraItem | SubLab;

export default function InfraSection() {
    const [selectedItem, setSelectedItem] = useState<SelectedItem>(INFRA_DATA[0]);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(true);
    const [parentLab, setParentLab] = useState<InfraItem | null>(null);

    const handleCardClick = (item: InfraItem) => {
        if (item.id === selectedItem.id) return;

        setIsTransitioning(true);
        setImageLoaded(false);

        setTimeout(() => {
            setSelectedItem(item);
            setIsTransitioning(false);
        }, 200);
    };

    const handleSubLabClick = (subLab: SubLab, parent: InfraItem) => {
        if ('name' in selectedItem && selectedItem.name === subLab.name) return;

        setIsTransitioning(true);
        setImageLoaded(false);

        setTimeout(() => {
            setSelectedItem(subLab);
            setParentLab(parent);
            setIsTransitioning(false);
        }, 200);
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const IconComponent = selectedItem.icon;
    const isSubLab = 'name' in selectedItem;
    const currentTitle = isSubLab ? selectedItem.name : selectedItem.label;
    const currentDescription = selectedItem.description;
    const currentImage = selectedItem.image;

    // Check if we should show sub-labs (when main Lab item is selected)
    const showSubLabs = !isSubLab && selectedItem.id === 2 && 'subLabs' in selectedItem && selectedItem.subLabs;

    return (
        <section className="py-16 bg-[#F5F4F4]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-2 gap-2">
                        <div className="w-6 h-1 bg-[#FF8A00]/60 rounded-full"></div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                                Campus Infrastructure
                            </h2>
                        </div>
                        <div className="w-6 h-1 bg-[#FF8A00]/60 rounded-full"></div>
                    </div>
                    <p className="text-lg text-[#565451] max-w-3xl mx-auto">
                        Explore our world-class facilities designed to enhance your
                        educational experience
                    </p>
                </div>

                {/* Navigation Cards */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {INFRA_DATA.map((item) => {
                        const CardIcon = item.icon;
                        const isActive = !isSubLab && selectedItem.id === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => handleCardClick(item)}
                                className={`group relative px-6 py-3 rounded-xl border-2 transition-all duration-300 ${isActive
                                        ? "border-[#FF8A00] bg-gradient-to-r from-[#FF8A00] to-[#FFB45B] text-white shadow-lg"
                                        : "border-gray-200 bg-white text-[#12100C] hover:border-[#FFB45B] hover:shadow-md"}`}>
                                <div className="flex flex-col items-center space-y-2 min-w-[100px]">
                                    <CardIcon
                                        className={`w-6 h-6 transition-colors duration-300 ${
                                            isActive ? "text-white" : "text-[#FF8A00]"
                                        }`}
                                    />
                                    <span className="text-sm font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Detail Section */}
                <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-500 ease-in-out ${isTransitioning ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"}`}
                >
                    {/* Content */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-[#FFB45B]/20 rounded-2xl">
                                <IconComponent className="w-8 h-8 text-[#FF8A00]" />
                            </div>
                            <h3 className="text-3xl font-bold text-[#12100C]">
                                {currentTitle}
                            </h3>
                        </div>

                        <p className="text-lg text-[#565451] leading-relaxed">
                            {currentDescription}
                        </p>

                        {/* Sub-labs for Lab section */}
                        {showSubLabs && (
                            <div className="mt-8">
                                <h4 className="text-xl font-semibold text-[#12100C] mb-4">
                                    Specialized Laboratories
                                </h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {selectedItem.subLabs?.map((lab, index) => {
                                        const LabIcon = lab.icon;
                                        return (
                                            <div
                                                key={index}
                                                onClick={() => handleSubLabClick(lab, selectedItem)}
                                                className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-[#FFB45B] hover:shadow-md transition-all duration-300 cursor-pointer"
                                                >
                                                <div className="flex flex-col items-center space-y-2 text-center">
                                                    <LabIcon className="w-6 h-6 text-[#FF8A00] group-hover:text-[#FFB45B] transition-colors duration-200" />
                                                    <span className="text-sm font-medium text-[#12100C] group-hover:text-black">
                                                    {lab.name}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                        {/* Back button (only for sub-labs) */}
                        {/* Actions Section */}
                        <div
                            className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-500 ease-in-out ${
                                isTransitioning
                                    ? "opacity-0 translate-y-2"
                                    : "opacity-100 translate-y-0"
                            }`}
                        >
                            {/* Back button (only for sub-labs) */}
                            {isSubLab && parentLab && (
                                <button
                                    onClick={() => setSelectedItem(parentLab)}
                                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 bg-[#F9F9F9] text-[#12100C] font-medium rounded-xl shadow-sm hover:bg-[#FFB45B]/20 transition-colors duration-300"
                                >
                                    ← Back to {parentLab.label}
                                </button>
                            )}

                            {/* Discover button */}
                            <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 font-medium border border-orange-300 bg-white text-orange-500 rounded-xl shadow-[2px_2px_0px_orange] transition-all hover:bg-orange-500 hover:text-white hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                            >
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

                    {/* Image */}
                    <div className="relative group">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl h-96 w-full">
                            <img
                                src={currentImage}
                                alt={currentTitle}
                                onLoad={handleImageLoad}
                                className={`absolute rounded-3xl inset-0 w-full h-full object-cover transition-all duration-[1500ms] ease-in-out ${
                                    imageLoaded
                                        ? "opacity-100 transform translate-x-0 translate-y-0 scale-100 group-hover:scale-110"
                                        : "opacity-0 transform translate-x-8 translate-y-8 scale-95"
                                }`}
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"/>
                            <div
                                className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0">
                                <p className="text-lg font-semibold">{currentTitle}</p>
                                <p className="text-sm opacity-90">Click to explore more</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}