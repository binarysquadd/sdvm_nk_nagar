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
    HandsPrayingIcon
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
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
        icon: BuildingIcon,
    },
    {
        id: 2,
        label: "Lab",
        description:
            "State-of-the-art laboratories equipped with the latest technology to support practical learning and research.",
        image:
            "https://images.unsplash.com/photo-1581091215367-59ab6b128c94?w=600&h=400&fit=crop",
        icon: FlaskIcon,
        subLabs: [
            {
                id: 1,
                name: "Computer Science",
                to: "/computer-science",
                icon: LaptopIcon,
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
                description: 'this is computer science'
            },
            {
                id: 2,
                name: "Physics",
                to: "/physics",
                icon: AtomIcon,
                image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=600&h=400&fit=crop",
                description: 'this is physics'
            },
            {
                id: 3,
                name: "Chemistry",
                to: "/chemistry",
                icon: FlaskIcon,
                image: "https://images.unsplash.com/photo-1581090700227-4c4f50a6e52b?w=600&h=400&fit=crop",
                description: 'this is Chemistry'
            },
            {
                id: 4,
                name: "Geology",
                to: "/geology",
                icon: MountainsIcon,
                image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
                description: 'this is geology'
            },
            {
                id: 5,
                name: "Botany",
                to: "/botany",
                icon: LeafIcon,
                image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&h=400&fit=crop",
                description: 'this is botany'
            },
            {
                id: 6,
                name: "Math",
                to: "/math",
                icon: SigmaIcon,
                image: "https://images.unsplash.com/photo-1509223197845-458d87318791?w=600&h=400&fit=crop",
                description: 'this is Math'
            },
            {
                id: 7,
                name: "Zoology",
                to: "/zoology",
                icon: PawPrintIcon,
                image: "https://images.unsplash.com/photo-1616147353431-f8b8d1b1b845?w=600&h=400&fit=crop",
                description: 'this is zoology'
            },
        ],
    },
    {
        id: 3,
        label: "Library",
        description:
            "A modern library with an extensive collection of books, journals, and digital resources for students and faculty.",
        image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?w=600&h=400&fit=crop",
        icon: BookIcon,
    },
    {
        id: 4,
        label: "Hostel",
        description:
            "Comfortable and secure hostel facilities that create a home-away-from-home experience for students.",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
        icon: BedIcon,
    },
    {
        id: 5,
        label: "Canteen",
        description:
            "A lively canteen serving hygienic and nutritious meals, snacks, and refreshments throughout the day.",
        image:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
        icon: ForkKnifeIcon,
    },
    {
        id: 6,
        label: "Prayer Hall",
        description:
            "A serene prayer hall that provides students and staff with a peaceful place for reflection and spirituality.",
        image:
            "https://images.unsplash.com/photo-1578301978693-85b6fdf5f4c6?w=600&h=400&fit=crop",
        icon: HandsPrayingIcon,
    },
];


// Icon mapping
export const iconMap = {
    BuildingIcon: BuildingIcon,
    FlaskIcon: FlaskIcon,
    BookIcon: BookIcon,
    BedIcon: BedIcon,
    ForkKnifeIcon: ForkKnifeIcon,
    HandsPrayingIcon: HandsPrayingIcon,
    LaptopIcon: LaptopIcon,
    AtomIcon: AtomIcon,
    MountainsIcon: MountainsIcon,
    LeafIcon: LeafIcon,
    SigmaIcon: SigmaIcon,
    PawPrintIcon: PawPrintIcon,
};