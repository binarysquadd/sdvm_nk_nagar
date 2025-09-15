import {
    DesktopTowerIcon,
    AtomIcon,
    FlaskIcon,
    GlobeHemisphereWestIcon,
    LeafIcon,
    PiIcon,
    PawPrintIcon,
    LaptopIcon,
    MountainsIcon,
    SigmaIcon,
    BuildingIcon,
    BookIcon,
    BedIcon,
    ForkKnifeIcon,
    HandsPrayingIcon,
    EnvelopeIcon,
    LinkedinLogoIcon,
} from "@phosphor-icons/react";

export interface SubLab {
    id: number;
    name: string;
    to: string;
    icon: any;
    image: string;
    description: string;
}

export interface InfraItem {
    id: number;
    label: string;
    description: string;
    image: string;
    icon: any;
    subLabs?: SubLab[];
}


export const FEATURE_DEPARTMENT_DATA = [
    {
        id: 1,
        department: "Computer Science",
        sub_heading: "Innovating the digital future",
        description: `Dive into algorithms, AI, and software development.`,
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
        icon: DesktopTowerIcon,
    },
    {
        id: 2,
        department: "Physics",
        sub_heading: "Exploring the laws of nature",
        description: `From quantum mechanics to astrophysics.`,
        image:
            "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&h=400&fit=crop",
        icon: AtomIcon,
    },
    {
        id: 3,
        department: "Chemistry",
        sub_heading: "The science of matter and change",
        description: `Study atoms, molecules, and reactions.`,
        image:
            "https://images.unsplash.com/photo-1581091870627-3a5386c6fa27?w=600&h=400&fit=crop",
        icon: FlaskIcon,
    },
    {
        id: 4,
        department: "Geology",
        sub_heading: "Unveiling Earth's history",
        description: `Investigate rocks, minerals, and natural processes.`,
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
        icon: GlobeHemisphereWestIcon,
    },
    {
        id: 5,
        department: "Botany",
        sub_heading: "The science of plant life",
        description: `From ecosystems to biotechnology.`,
        image:
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&h=400&fit=crop",
        icon: LeafIcon,
    },
    {
        id: 6,
        department: "Mathematics",
        sub_heading: "The universal language of science",
        description: `Pure and applied mathematics to tackle challenges.`,
        image:
            "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=600&h=400&fit=crop",
        icon: PiIcon,
    },
    {
        id: 7,
        department: "Zoology",
        sub_heading: "Understanding the animal kingdom",
        description: `Explore animal biology, behavior, and ecosystems.`,
        image:
            "https://images.unsplash.com/photo-1573497019236-17fdd1f6f2d0?w=600&h=400&fit=crop",
        icon: PawPrintIcon,
    },
];


export const INFRA_DATA: InfraItem[] = [
    {
        id: 1,
        label: "Campus",
        description:
            "A vibrant and eco-friendly campus that provides the perfect environment for learning, collaboration, and growth.",
        image:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop", // ✅ modern campus aerial
        icon: BuildingIcon,
    },
    {
        id: 2,
        label: "Lab",
        description:
            "State-of-the-art laboratories equipped with the latest technology to support practical learning and research.",
        image:
            "https://images.unsplash.com/photo-1581091012184-5c1c7bcd48f5?w=1200&h=800&fit=crop", // ✅ lab setup
        icon: FlaskIcon,
        subLabs: [
            {
                id: 1,
                name: "Computer Science",
                to: "/computer-science",
                icon: LaptopIcon,
                image:
                    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop", // ✅ coding desk
                description: "Hands-on learning in modern computer labs with high-performance systems.",
            },
            {
                id: 2,
                name: "Physics",
                to: "/physics",
                icon: AtomIcon,
                image:
                    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=800&fit=crop", // ✅ physics experiment
                description: "Explore the principles of the universe with advanced physics labs.",
            },
            {
                id: 3,
                name: "Chemistry",
                to: "/chemistry",
                icon: FlaskIcon,
                image:
                    "https://images.unsplash.com/photo-1581091215367-59ab6b128c94?w=1200&h=800&fit=crop", // ✅ chemistry setup
                description: "Well-equipped labs for organic, inorganic, and analytical chemistry.",
            },
            {
                id: 4,
                name: "Geology",
                to: "/geology",
                icon: MountainsIcon,
                image:
                    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=800&fit=crop", // ✅ rock formations
                description: "Study earth sciences with geological samples and modern tools.",
            },
            {
                id: 5,
                name: "Botany",
                to: "/botany",
                icon: LeafIcon,
                image:
                    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&h=800&fit=crop", // ✅ plant research
                description: "Discover plant biology with greenhouse and botanical lab facilities.",
            },
            {
                id: 6,
                name: "Math",
                to: "/math",
                icon: SigmaIcon,
                image:
                    "https://images.unsplash.com/photo-1509223197845-458d87318791?w=1200&h=800&fit=crop", // ✅ equations on board
                description: "A hub for logic, computation, and advanced mathematical problem solving.",
            },
            {
                id: 7,
                name: "Zoology",
                to: "/zoology",
                icon: PawPrintIcon,
                image:
                    "https://images.unsplash.com/photo-1616147353431-f8b8d1b1b845?w=1200&h=800&fit=crop", // ✅ wildlife specimen
                description: "Dedicated labs for the study of animals and biodiversity.",
            },
        ],
    },
    {
        id: 3,
        label: "Library",
        description:
            "A modern library with an extensive collection of books, journals, and digital resources for students and faculty.",
        image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=800&fit=crop", // ✅ library shelves
        icon: BookIcon,
    },
    {
        id: 4,
        label: "Hostel",
        description:
            "Comfortable and secure hostel facilities that create a home-away-from-home experience for students.",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop", // ✅ student dorm
        icon: BedIcon,
    },
    {
        id: 5,
        label: "Canteen",
        description:
            "A lively canteen serving hygienic and nutritious meals, snacks, and refreshments throughout the day.",
        image:
            "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&h=800&fit=crop", // ✅ food & drinks
        icon: ForkKnifeIcon,
    },
    {
        id: 6,
        label: "Prayer Hall",
        description:
            "A serene prayer hall that provides students and staff with a peaceful place for reflection and spirituality.",
        image:
            "https://images.unsplash.com/photo-1578301978693-85b6fdf5f4c6?w=1200&h=800&fit=crop", // ✅ prayer interior
        icon: HandsPrayingIcon,
    },
];


export const teamMembers = [
    {
        name: "Amélie Laurent",
        title: "Founder & CEO",
        summary: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
        avatarUrl: "https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80",
        socials: [
            {
                icon: EnvelopeIcon,
                href: "https://x.com/",
            },
            {
                icon: LinkedinLogoIcon,
                href: "https://www.linkedin.com/",
            },
        ],
    },
    {
        name: "Nikolas Gibbons",
        title: "Engineering Manager",
        summary: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
        avatarUrl: "https://www.untitledui.com/images/avatars/nikolas-gibbons?fm=webp&q=80",
        socials: [
            {
                icon: EnvelopeIcon,
                href: "https://x.com/",
            },
            {
                icon: LinkedinLogoIcon,
                href: "https://www.linkedin.com/",
            },
        ],
    },
    {
        name: "Sienna Hewitt",
        title: "Product Manager",
        summary: "Former PM for Linear, Lambda School, and On Deck.",
        avatarUrl: "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80",
        socials: [
            {
                icon: EnvelopeIcon,
                href: "https://x.com/",
            },
            {
                icon: LinkedinLogoIcon,
                href: "https://www.linkedin.com/",
            },
        ],
    },
    {
        name: "Lily-Rose Chedjou",
        title: "Frontend Developer",
        summary: "Former frontend dev for Linear, Coinbase, and Postscript.",
        avatarUrl: "https://www.untitledui.com/images/avatars/lily-rose-chedjou?fm=webp&q=80",
        socials: [
            {
                icon: EnvelopeIcon,
                href: "https://x.com/",
            },
            {
                icon: LinkedinLogoIcon,
                href: "https://www.linkedin.com/",
            },
        ],
    },
    {
        name: "Zahra Christensen",
        title: "Backend Developer",
        summary: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
        avatarUrl: "https://www.untitledui.com/images/avatars/zahra-christensen?fm=webp&q=80",
        socials: [
            {
                icon: EnvelopeIcon,
                href: "https://x.com/",
            },
            {
                icon: LinkedinLogoIcon,
                href: "https://www.linkedin.com/",
            },
        ],
    },
    {
        name: "Caitlyn King",
        title: "Product Designer",
        summary: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
        avatarUrl: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80",
        socials: [
            {
                icon: EnvelopeIcon,
                href: "https://x.com/",
            },
            {
                icon: LinkedinLogoIcon,
                href: "https://www.linkedin.com/",
            },
        ],
    },
    {
        name: "Zaid Schwartz",
        title: "UX Researcher",
        summary: "Lead user research for Slack. Contractor for Netflix and Udacity.",
        avatarUrl: "https://www.untitledui.com/images/avatars/zaid-schwartz?fm=webp&q=80",
        socials: [
            {
                icon: EnvelopeIcon,
                href: "https://x.com/",
            },
            {
                icon: LinkedinLogoIcon,
                href: "https://www.linkedin.com/",
            },
        ],
    },
    {
        name: "Marco Kelly",
        title: "Customer Success",
        summary: "Lead CX at Wealthsimple. Former PagerDuty and Sqreen.",
        avatarUrl: "https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80",
        socials: [
            {
                icon: EnvelopeIcon,
                href: "https://x.com/",
            },
            {
                icon: LinkedinLogoIcon,
                href: "https://www.linkedin.com/",
            },
        ],
    },
];



// Achievement stats data
export const achievementStats = [
    {
        number: "99.9%",
        label: "Uptime Guarantee",
        icon: "⚡"
    },
    {
        number: "4,000+",
        label: "Companies Trust Us",
        icon: "🏢"
    },
    {
        number: "50M+",
        label: "Transactions Processed",
        icon: "📊"
    },
    {
        number: "24/7",
        label: "Customer Support",
        icon: "🛡️"
    }
];

// Company logos data
export const companyLogos = [
    {
        name: "Odeaolabs",
        url: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=200&h=80&fit=crop&crop=center"
    },
    {
        name: "Kintsugi",
        url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=80&fit=crop&crop=center"
    },
    {
        name: "Stackedlab",
        url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=200&h=80&fit=crop&crop=center"
    },
    {
        name: "Magnolia",
        url: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=200&h=80&fit=crop&crop=center"
    },
    {
        name: "Warpspeed",
        url: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=200&h=80&fit=crop&crop=center"
    },
    {
        name: "Sisyphus",
        url: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=80&fit=crop&crop=center"
    }
];

export interface Event {
    id: number;
    image: string;
    category: string;
    title: string;
    description: string;
    author: string;
    authorImage: string;
    date: string;
}

export const events: Event[] = [
    {
        id: 1,
        title: "Modern Library Complex",
        description:
            "State-of-the-art library with digital resources, quiet study areas, and collaborative spaces for enhanced learning.",
        category: "Academic",
        author: "Dr. Sarah Wilson",
        authorImage:
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        date: "Library Services",
        image:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
    },
    {
        id: 2,
        title: "Science Research Labs",
        description:
            "Cutting-edge laboratories equipped with the latest technology for hands-on research and experimentation.",
        category: "Research",
        author: "Prof. Michael Chen",
        authorImage:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        date: "Research Facility",
        image:
            "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
    },
    {
        id: 3,
        title: "Student Recreation Center",
        description:
            "Complete fitness and wellness facility with modern equipment, sports courts, and recreational activities.",
        category: "Recreation",
        author: "Emily Rodriguez",
        authorImage:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        date: "Wellness Center",
        image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    },
    {
        id: 4,
        title: "Innovation Hub",
        description:
            "Collaborative workspace for entrepreneurship, innovation, and technology development projects.",
        category: "Innovation",
        author: "Alex Thompson",
        authorImage:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        date: "Tech Center",
        image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    },
    {
        id: 5,
        title: "Auditorium Complex",
        description:
            "Large auditorium with advanced sound systems and seating for cultural, academic, and professional events.",
        category: "Facilities",
        author: "Rachel Green",
        authorImage:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
        date: "Event Space",
        image:
            "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=600&h=400&fit=crop",
    },
    {
        id: 6,
        title: "Central Cafeteria",
        description:
            "Spacious dining area offering nutritious meals, snacks, and beverages with hygienic standards.",
        category: "Cafeteria",
        author: "John Miller",
        authorImage:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        date: "Food Court",
        image:
            "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&h=400&fit=crop",
    },
    {
        id: 7,
        title: "Digital Learning Center",
        description:
            "Smart classrooms with interactive boards and online learning tools to support hybrid education.",
        category: "Academic",
        author: "Sophia Lee",
        authorImage:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        date: "Learning Facility",
        image:
            "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=600&h=400&fit=crop",
    },
    {
        id: 8,
        title: "Green Campus Park",
        description:
            "Beautiful green spaces with walking tracks, eco-friendly initiatives, and relaxation zones for students.",
        category: "Environment",
        author: "Daniel Smith",
        authorImage:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
        date: "Outdoor Space",
        image:
            "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=600&h=400&fit=crop",
    },
    {
        id: 9,
        title: "Hostel Accommodation",
        description:
            "Comfortable and secure hostel facilities with modern amenities for outstation students.",
        category: "Residential",
        author: "Priya Mehta",
        authorImage:
            "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=face",
        date: "Student Housing",
        image:
            "https://images.unsplash.com/photo-1560448075-bb485b4c4f2d?w=600&h=400&fit=crop",
    },
    {
        id: 10,
        title: "Sports Complex",
        description:
            "International standard sports complex with indoor and outdoor facilities for multiple games and athletics.",
        category: "Sports",
        author: "Vikram Patel",
        authorImage:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
        date: "Athletics Center",
        image:
            "https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?w=600&h=400&fit=crop",
    },
];

export const faqs = [
    {
        question: "Why doesn't my CSS, which is valid, render correctly?",
        answer:
            "Browsers use the DOCTYPE declaration to choose whether to show the document using a mode that is more compatible with Web standards or with old browser bugs. Using a correct and modern DOCTYPE declaration at the start of your HTML will improve browser standards compliance.",
    },
    {
        question: "CSS and JavaScript accessibility best practices?",
        answer:
            "HTML elements can have an id and/or class attribute. The id attribute assigns a name to the element it is applied to, and for valid markup, there can be only one element with that name. The class attribute assigns a class name to the element, and that name can be used on many elements within the page. CSS allows you to apply styles to particular id and/or class names.",
    },
    {
        question: "What do the -moz-*, -ms-*, -webkit-*, -o-* and -khtml-* properties do?",
        answer:
            "The use of such properties on production websites is not recommended — they have already created a huge web compatibility mess. For example, many developers only using the -webkit- prefixed version of a property when the non-prefixed version is supported across all browsers meant that a feature relying on that property would break in non-webkit-based browsers, completely needlessly.",
    },
    {
        question: "What is the difference between id and class?",
        answer:
            "HTML elements can have an id and/or class attribute. The id attribute assigns a name to the element it is applied to, and for valid markup, there can be only one element with that name. The class attribute assigns a class name to the element, and that name can be used on many elements within the page.",
    },
];

