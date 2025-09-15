import { useState, useEffect, useRef } from "react";
import { EnvelopeIcon, LinkedinLogoIcon, MedalIcon, BookOpenIcon, UsersIcon, GraduationCapIcon } from "@phosphor-icons/react";
import {facultyData} from "../constants/constants.tsx";



export default function Faculty() {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
    const sectionRef = useRef<HTMLElement>(null);

    // Group faculty by department
    const departments = Array.from(new Set(facultyData.map((f) => f.department)));

    const filteredFaculty = selectedDepartment === "All"
        ? facultyData
        : facultyData.filter(f => f.department === selectedDepartment);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Handle animations when visibility or filter changes
    useEffect(() => {
        setVisibleItems([]);
        if (isVisible) {
            filteredFaculty.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleItems(prev => [...prev, index]);
                }, index * 150);
            });
        }
    }, [selectedDepartment, isVisible]);

    return (
        <section ref={sectionRef} className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-8">

                {/* Header with entrance animation */}
                <div className="text-center mb-12">
                    <div className={`flex items-center justify-center mb-2 gap-2 transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                    }`}>
                        <div className={`h-1 bg-[#FF8A00]/60 rounded-full transition-all duration-1000 ease-out delay-200 ${isVisible ? 'w-6' : 'w-0'}`}></div>
                        <div>
                            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 text-center transition-all duration-1000 ease-out delay-300 ${
                                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                            }`}>
                                Meet Our Faculty
                            </h2>
                        </div>
                        <div className={`h-1 bg-[#FF8A00]/60 rounded-full transition-all duration-1000 ease-out delay-200 ${isVisible ? 'w-6' : 'w-0'}`}></div>
                    </div>
                    <p className={`text-lg text-[#565451] max-w-3xl mx-auto transition-all duration-1000 ease-out delay-500 ${
                        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                    }`}>
                        Our distinguished faculty members bring world-class expertise and passion for teaching.
                        Each professor is committed to fostering innovation, critical thinking, and academic excellence
                        in their respective fields.
                    </p>
                </div>

                {/* Department Filter */}
                <div className={`flex justify-center mb-12 transition-all duration-1000 ease-out delay-700 ${
                    isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                    <div className="flex flex-wrap gap-3 bg-white rounded-2xl p-2 shadow-lg">
                        <button
                            onClick={() => setSelectedDepartment("All")}
                            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                                selectedDepartment === "All"
                                    ? "bg-[#FF8A00] text-white shadow-lg"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            All Departments
                        </button>
                        {departments.map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setSelectedDepartment(dept)}
                                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                                    selectedDepartment === dept
                                        ? "bg-[#FF8A00] text-white shadow-lg"
                                        : "text-gray-600 hover:bg-gray-100"
                                }`}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Faculty Grid - Different Layout */}
                <div className="mt-12 md:mt-16">
                    <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredFaculty.map((member, index) => (
                            <div
                                key={member.id}
                                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-700 ease-out ${
                                    visibleItems.includes(index)
                                        ? 'opacity-100 transform translate-y-0 scale-100'
                                        : 'opacity-0 transform translate-y-8 scale-95'
                                }`}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                {/* Top Section - Avatar and Basic Info */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A00] to-[#FFB45B] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-110"></div>
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#FF8A00]/30 border-4 border-transparent group-hover:border-[#FF8A00]/30"
                                        />
                                        <div className="absolute inset-0 rounded-full border-2 border-[#FF8A00] opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-125 transition-all duration-500 ease-out"></div>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-1 transition-all duration-300 ease-out group-hover:text-[#FF8A00] group-hover:scale-105">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-[#565451] transition-all duration-300 ease-out delay-75 group-hover:text-gray-700">
                                            {member.title}
                                        </p>
                                        <div className="w-0 h-0.5 bg-gradient-to-r from-[#FF8A00] to-[#FFB45B] mt-2 group-hover:w-12 transition-all duration-300 ease-out delay-100"></div>
                                    </div>
                                </div>

                                {/* Department Badge */}
                                <div className="inline-flex items-center gap-2 bg-[#FF8A00]/10 text-[#FF8A00] px-3 py-1 rounded-full text-sm font-medium mb-4">
                                    <GraduationCapIcon className="w-4 h-4" />
                                    {member.department}
                                </div>

                                {/* Details Section */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start gap-3">
                                        <BookOpenIcon className="w-4 h-4 text-[#FF8A00] mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wide">Specialization</p>
                                            <p className="text-sm font-medium text-gray-800">{member.specialization}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <MedalIcon className="w-4 h-4 text-[#FF8A00] mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wide">Qualification</p>
                                            <p className="text-sm font-medium text-gray-800">{member.qualification}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <UsersIcon className="w-4 h-4 text-[#FF8A00] mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wide">Experience</p>
                                            <p className="text-sm font-medium text-gray-800">{member.experience}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-4 border-t border-gray-100">
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="flex-1 bg-[#FF8A00] text-white py-2 px-4 rounded-lg hover:bg-[#e67a00] transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                                    >
                                        <EnvelopeIcon className="w-4 h-4" />
                                        Email
                                    </a>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center"
                                    >
                                        <LinkedinLogoIcon className="w-4 h-4" />
                                    </a>
                                </div>

                                {/* Background glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A00]/5 to-[#FFB45B]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out -z-10"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className={`absolute top-1/4 left-10 w-2 h-2 bg-[#FF8A00]/30 rounded-full transition-all duration-2000 ease-out delay-1000 ${
                        isVisible ? 'opacity-100 transform translate-y-0 animate-pulse' : 'opacity-0 transform translate-y-4'
                    }`}></div>
                    <div className={`absolute bottom-1/3 right-16 w-3 h-3 bg-[#FFB45B]/20 rounded-full transition-all duration-2000 ease-out delay-1200 ${
                        isVisible ? 'opacity-100 transform translate-y-0 animate-pulse' : 'opacity-0 transform translate-y-4'
                    }`}></div>
                </div>

                {/* Stats Section */}
                <div className={`mt-16 text-center transition-all duration-1000 ease-out delay-900 ${
                    isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <div className="text-3xl font-bold text-[#FF8A00] mb-2">{facultyData.length}+</div>
                                <div className="text-gray-600">Expert Faculty Members</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#FF8A00] mb-2">{departments.length}</div>
                                <div className="text-gray-600">Academic Departments</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#FF8A00] mb-2">20+</div>
                                <div className="text-gray-600">Years Average Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}