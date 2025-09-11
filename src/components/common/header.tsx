import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import {TextOutdentIcon, XIcon, CaretDownIcon} from '@phosphor-icons/react'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    const navigation = [
        { name: 'Home', to: '/' },
        { name: 'Degree', children: [
                {name: 'Computer Science', to: '/computer-science'},
                {name: 'Physics', to: '/physics'},
                {name: 'Chemistry', to: '/chemistry'},
                {name: 'Geology', to: '/geology'},
                {name: 'Botany', to: '/botany'},
                {name: 'Math', to: '/math'},
                {name: 'Zoology', to: '/zoology'},
            ] },
        { name: 'Contact', to: '/contact' },
        { name: 'About', to: '/about' },
        { name: 'Faculty', to: '/faculty' },
    ];

    const isActive = (to: string) => {
        if (to === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(to);
    };

    // Check if any child route is active for parent highlighting
    const isChildActive = (children) => {
        if (!children) return false;
        return children.some(child => isActive(child.to));
    };

    const handleApplyClick = () => {
        window.open('/apply', '_blank');
    };

    const handleMouseEnter = (itemName) => {
        setActiveDropdown(itemName);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <header className='bg-white/95 backdrop-blur-md shadow-lg border-b border-[#999795]/20 sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                <div className="flex justify-between items-center h-20">
                    {/* Logo and Title - Responsive */}
                    <Link to="/" className="flex items-center gap-2 sm:gap-3 md:gap-4 group transition-transform hover:scale-105 min-w-0 flex-1 md:flex-initial">
                        <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF8A00] to-[#FFB45B] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                            <img
                                src="/logo.webp"
                                alt="Saraswati Degree Vidya Mandir Logo"
                                className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
                            />
                        </div>
                        <div className="flex flex-col min-w-0 flex-1">
                            {/* Desktop & Tablet Title */}
                            <span className="hidden sm:block text-sm md:text-lg lg:text-xl xl:text-xl font-extrabold text-[#12100C] tracking-tight leading-tight">
                                SARASWATI DEGREE VIDYA MANDIR
                            </span>

                            {/* Mobile Title - SDVM Only */}
                            <span className="sm:hidden text-lg font-extrabold text-[#12100C] tracking-tight leading-tight">
                                SDVM
                            </span>

                            {/* Address - Hidden on Mobile */}
                            <div className="hidden sm:flex items-center gap-2 mt-0.5">
                                <div className="h-0.5 w-6 mt-[2px] md:w-8 bg-gradient-to-r from-[#FF8A00] to-[#FFB45B] flex-shrink-0"></div>

                                {/* Desktop Location */}
                                <span
                                    className="hidden md:block text-xs lg:text-sm text-[#565451] font-medium truncate">
                                    Neelakantha Nagar, Berhampur, Odisha
                                </span>

                                <div className="h-0.5 w-6 mt-[2px] md:w-8 bg-gradient-to-r from-[#FF8A00] to-[#FFB45B] flex-shrink-0"></div>

                                {/* Tablet Location */}
                                <span className="md:hidden text-xs text-[#565451] font-medium truncate">
                                    Berhampur, Odisha
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1" role="navigation">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(item.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {item.children ? (
                                    // Dropdown menu item
                                    <div
                                        className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 group cursor-pointer flex items-center gap-1 ${
                                            isChildActive(item.children)
                                                ? 'text-[#FF8A00]'
                                                : 'text-[#565451] hover:text-[#FF8A00]'
                                        }`}
                                    >
                                        <span className="relative z-10">{item.name}</span>
                                        <CaretDownIcon
                                            size={16}
                                            className={`transform transition-transform duration-300 ${
                                                activeDropdown === item.name ? 'rotate-180' : ''
                                            }`}
                                        />

                                        {/* Animated underline */}
                                        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FF8A00] to-[#FFB45B] transition-all duration-300 ${
                                            isChildActive(item.children) ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></div>

                                        {/* Dropdown Menu */}
                                        <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-[#999795]/10 overflow-hidden transition-all duration-300 ${
                                            activeDropdown === item.name
                                                ? 'opacity-100 visible transform translate-y-0'
                                                : 'opacity-0 invisible transform -translate-y-2'
                                        }`}>
                                            <div className="py-2">
                                                {item.children.map((child, index) => (
                                                    <Link
                                                        key={child.name}
                                                        to={child.to}
                                                        className={`flex items-center px-6 py-3 text-sm font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-[#FF8A00]/5 hover:to-[#FFB45B]/5 group/child ${
                                                            isActive(child.to)
                                                                ? 'text-[#FF8A00] bg-gradient-to-r from-[#FF8A00]/10 to-[#FFB45B]/10 border-r-2 border-[#FF8A00]'
                                                                : 'text-[#565451] hover:text-[#FF8A00]'
                                                        }`}
                                                        style={{ animationDelay: `${index * 50}ms` }}
                                                    >
                                                        <div className={`h-1.5 w-1.5 rounded-full mr-3 transition-all duration-200 ${
                                                            isActive(child.to)
                                                                ? 'bg-[#FF8A00]'
                                                                : 'bg-[#999795]/30 group-hover/child:bg-[#FF8A00]'
                                                        }`}></div>
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // Regular menu item
                                    <Link
                                        to={item.to}
                                        className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 group ${
                                            isActive(item.to)
                                                ? 'text-[#FF8A00]'
                                                : 'text-[#565451] hover:text-[#FF8A00]'
                                        }`}
                                    >
                                        <span className="relative z-10">{item.name}</span>

                                        {/* Animated underline */}
                                        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FF8A00] to-[#FFB45B] transition-all duration-300 ${
                                            isActive(item.to) ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></div>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right side actions */}
                    <div className="flex items-center space-x-4">
                        {/* Apply Button with modern design */}
                        <button
                            onClick={handleApplyClick}
                            className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF8A00] to-[#FFB45B] text-white font-bold rounded-full hover:shadow-xl hover:shadow-[#FF8A00]/25 transform hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <span>Apply Online</span>
                            <div className="h-1 w-1 bg-white rounded-full group-hover:animate-bounce"></div>
                        </button>

                        {/* Mobile menu button with creative design */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden relative p-3 text-[#565451] hover:text-[#FF8A00] transition-colors duration-300 group"
                        >
                            <div className="absolute inset-0 bg-[#F9F9F9] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                            <div className="relative z-10">
                                {isMenuOpen ?
                                    <XIcon size={24} className="transform rotate-0 group-hover:rotate-90 transition-transform duration-300" /> :
                                    <TextOutdentIcon size={24} className="transform rotate-0 group-hover:rotate-12 transition-transform duration-300" />
                                }
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Modern Mobile menu with slide animation */}
            <div className={`lg:hidden overflow-y-scroll transition-all duration-500 ease-in-out ${
                isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="bg-gradient-to-br from-[#F9F9F9] to-white border-t border-[#999795]/20">
                    <div className="px-6 py-6 space-y-2">
                        {navigation.map((item, index) => (
                            <div key={item.name}>
                                {item.children ? (
                                    // Mobile dropdown section
                                    <div>
                                        <div className="p-4 rounded-2xl font-semibold text-[#FF8A00] bg-gradient-to-r from-[#FF8A00]/10 to-[#FFB45B]/10">
                                            {item.name}
                                        </div>
                                        <div className="ml-4 mt-2 space-y-1">
                                            {item.children.map((child, childIndex) => (
                                                <Link
                                                    key={child.name}
                                                    to={child.to}
                                                    className={`flex items-center p-3 pl-6 rounded-xl font-medium transition-all duration-300 ${
                                                        isActive(child.to)
                                                            ? 'bg-gradient-to-r from-[#FF8A00]/15 to-[#FFB45B]/15 text-[#FF8A00] border-l-3 border-[#FF8A00]'
                                                            : 'text-[#565451] hover:bg-white/80 hover:text-[#FF8A00]'
                                                    }`}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    style={{ animationDelay: `${(index + childIndex) * 50}ms` }}
                                                >
                                                    <div className={`h-1 w-1 rounded-full mr-3 ${
                                                        isActive(child.to) ? 'bg-[#FF8A00]' : 'bg-[#999795]/50'
                                                    }`}></div>
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    // Regular mobile menu item
                                    <Link
                                        to={item.to}
                                        className={`flex items-center justify-between p-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                                            isActive(item.to)
                                                ? 'bg-gradient-to-r from-[#FF8A00]/10 to-[#FFB45B]/10 text-[#FF8A00] border-l-4 border-[#FF8A00]'
                                                : 'text-[#565451] hover:bg-white/80 hover:text-[#FF8A00]'
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <span className="flex items-center gap-3">
                                            {isActive(item.to) && <div className="h-2 w-2 bg-[#FF8A00] rounded-full animate-pulse"></div>}
                                            {item.name}
                                        </span>
                                        <div className="h-0.5 w-6 bg-gradient-to-r from-[#FF8A00] to-[#FFB45B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Mobile Apply Button with creative styling */}
                        <div className="pt-4">
                            <button
                                onClick={() => {
                                    handleApplyClick();
                                    setIsMenuOpen(false);
                                }}
                                className="w-full relative p-4 bg-gradient-to-r from-[#FF8A00] to-[#FFB45B] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                <span className="relative flex items-center justify-center gap-2">
                                    Apply Online Now
                                    <div className="flex space-x-1">
                                        <div className="h-1 w-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                                        <div className="h-1 w-1 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                                        <div className="h-1 w-1 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                                    </div>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};