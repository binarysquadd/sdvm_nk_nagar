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

