export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

export const footerSections: FooterSection[] = [
    {
        title: "Product",
        links: [
            { label: "Features", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Feedback", href: "#" },
            { label: "FAQs", href: "#" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Chat", href: "#" },
            { label: "Email Support", href: "#" },
            { label: "GDPR", href: "#" },
            { label: "Help", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Blog", href: "#" },
            { label: "Twitter", href: "#" },
            { label: "Alternatives", href: "#" },
            { label: "Why feature vote?", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About Us", href: "#" },
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Status", href: "#" },
        ],
    },
];

export const footerMeta = {
    description:
        "Hosted in the EU 🇪🇺, with no user tracking scripts. Made all over the world by 17 amazing people.",
    copyright: "Copyright © 2025 SDVM NK Nagar",
    tagline: "Built with ❤️ by CS Honor's Alumni",
    company_name: 'Binary Squad',
    link: 'https://binarysquadd.netlify.app/'
};

