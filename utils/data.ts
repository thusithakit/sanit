import { BranchDetails, NavItems, ProductPageDetails, ServicePageDetails, SocailMediaLinks, TeamMemberDetails } from "./types";

export const navLinks: NavItems[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Services",
        children: [
            {
                label: "Network Solutions",
                href: "/services/network-solutions"
            },
            {
                label: "PAX Systems",
                href: "/services/pax-systems"
            },
            {
                label: "Wi-Fi Solutions",
                href: "/services/wifi-solutions"
            },
            {
                label: "Firewall Solutions",
                href: "/services/firewall-solutions"
            }
        ]
    },
    {
        label: "Products",
        children: [
            {
                label: "Network Equipment",
                href: "/products/network-equipment"
            },
            {
                label: "Communication Devices",
                href: "/products/communication-devices"
            },
            {
                label: "Wireless Solutions",
                href: "/products/wireless-solutions"
            },
            {
                label: "Security Appliances",
                href: "/products/security-appliances"
            }
        ]
    },
    {
        label: "Contact Us",
        href: "/contact",
    },
    {
        label: "About Us",
        href: "/about",
    }
]

export const serviceDetails: ServicePageDetails[] = [
    {
        pageUrl: "/network-solutions",
        pageDetails: {
            heading: "Network Solutions",
            description: "We offer end-to-end network infrastructure solutions to keep your business connected at all times.",
            videoUrl: "https://youtube.com/embed/ggWh_2cYkiw?si=lIgfuUGoWB5JgqGZ",
            cardDetails: [
                {
                    cardDescription: "Structured Cabling for seamless data transmission",
                    cardImage: "/ensure.webp"
                },
                {
                    cardDescription: "LAN & WAN Setup for high-speed connectivity",
                    cardImage: "/ensure.webp"
                },
                {
                    cardDescription: "Network Maintenance & Troubleshooting to ensure uninterrupted operations",
                    cardImage: "/ensure.webp"
                }
            ]
        }
    }
]

export const productDetails: ProductPageDetails[] = [
    {
        pageUrl: "/network-equipment",
        pageDetails: {
            heading: "Network Equipment",
            description: "Enhance your IT infrastructure with our range of networking hardware.",
            videoUrl: "https://youtube.com/embed/ggWh_2cYkiw?si=lIgfuUGoWB5JgqGZ",
            cardDetails: [
                {
                    cardTitle: "Routers",
                    cardDescription: "High performance networking for home and business",
                    cardImage: "/ensure.webp"
                },
                {
                    cardTitle: "Switches",
                    cardDescription: "Managed and unmanaged switches for seamless connectivity",
                    cardImage: "/ensure.webp"
                }
            ]
        }
    }
]

export const companySocialMediaLinks: SocailMediaLinks = {
    facebook: "/",
    instagram: "/",
    linkedin: "/"
}

export const branchDetails: BranchDetails[] = [
    {
        branchName: "SANIT Inventions Head Office & NOC",
        branchAddress: "No: 32/2A, Udumulla Road, Battaramulla, Sri Lanka.",
        branchPhone: "+94 11 2 772 222",
        branchEmail: "info@sanit.lk",
        branchMapUrl: "https://maps.app.goo.gl/rcNABrWwciQWJET1A",
        branchPhoto: ""
    },
    {
        branchName: "SANIT Inventions Kotte Branch",
        branchAddress: "No: 32/2A, Udumulla Road, Battaramulla, Sri Lanka.",
        branchPhone: "+94 11 2 772 222",
        branchEmail: "info@sanit.lk",
        branchMapUrl: "https://maps.app.goo.gl/rcNABrWwciQWJET1A",
        branchPhoto: ""
    },
    {
        branchName: "SANIT Inventions Anuradhapura Branch",
        branchAddress: "No: 32/2A, Udumulla Road, Battaramulla, Sri Lanka.",
        branchPhone: "+94 11 2 772 222",
        branchEmail: "info@sanit.lk",
        branchMapUrl: "https://maps.app.goo.gl/rcNABrWwciQWJET1A",
        branchPhoto: ""
    }
]

export const teamMembersDetails: TeamMemberDetails[] = [
    {
        name: "Ethan Carter",
        position: "Software Engineer",
        profileImage: "",
        contact: {
            facebook: "/",
            instagram: "/",
            linkedin: "/"
        }
    },
    {
        name: "Olivia Mitchell",
        position: "Product Manager",
        profileImage: "",
        contact: {
            facebook: "/",
            instagram: "/",
            linkedin: "/"
        }
    },
    {
        name: "Emily Lawson",
        position: "Software Engineer",
        profileImage: "",
        contact: {
            facebook: "/",
            instagram: "/",
            linkedin: "/"
        }
    },
    {
        name: "Ethan James",
        position: "Business Consultant",
        profileImage: "",
        contact: {
            facebook: "/",
            instagram: "/",
            linkedin: "/"
        }
    },
]