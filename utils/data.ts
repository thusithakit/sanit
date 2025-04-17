import { NavItems, ProductPageDetails, ServicePageDetails, SocailMediaLinks } from "./types";

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
                    cardImage: "/ensure.png"
                },
                {
                    cardDescription: "LAN & WAN Setup for high-speed connectivity",
                    cardImage: "/ensure.png"
                },
                {
                    cardDescription: "Network Maintenance & Troubleshooting to ensure uninterrupted operations",
                    cardImage: "/ensure.png"
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
                    cardImage: "/ensure.png"
                },
                {
                    cardTitle: "Switches",
                    cardDescription: "Managed and unmanaged switches for seamless connectivity",
                    cardImage: "/ensure.png"
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