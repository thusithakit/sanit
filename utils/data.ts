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
                label: "PABX Systems",
                href: "/services/pabx-systems"
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
                    cardImage: "/services/cabling.webp"
                },
                {
                    cardDescription: "LAN & WAN Setup for high-speed connectivity",
                    cardImage: "/services/lan.webp"
                },
                {
                    cardDescription: "Network Maintenance & Troubleshooting to ensure uninterrupted operations",
                    cardImage: "/services/maintenance.webp"
                }
            ]
        }
    },
    {
        pageUrl: "/pabx-systems",
        pageDetails: {
            heading: "PABX Systems",
            description: "Our Private Automatic Branch Exchange (PABX) systems help businesses enhance communication through",
            videoUrl: "https://youtube.com/embed/ggWh_2cYkiw?si=lIgfuUGoWB5JgqGZ",
            cardDetails: [
                {
                    cardDescription: "IP and Analog PABX Solutions",
                    cardImage: "/services/cloud-phone.webp"
                },
                {
                    cardDescription: "Cloud-based Telephony",
                    cardImage: "/services/cloud-phone.webp"
                },
                {
                    cardDescription: "Call Routing & Voicemail Integration",
                    cardImage: "/services/call-routing.webp"
                }
            ]
        }
    },
    {
        pageUrl: "/wifi-solutions",
        pageDetails: {
            heading: "Wi-Fi Solutions",
            description: "We provide customized wireless networking solutions to improve coverage, speed, and security for businesses and public spaces.",
            videoUrl: "https://youtube.com/embed/ggWh_2cYkiw?si=lIgfuUGoWB5JgqGZ",
            cardDetails: [
                {
                    cardDescription: "Enterprise Wi-Fi Networks",
                    cardImage: "/services/enterprise-wifi.webp"
                },
                {
                    cardDescription: "Mesh Wi-Fi & Hotspot Solutions",
                    cardImage: "/services/mesh-wifi.webp"
                },
                {
                    cardDescription: "Bandwidth Optimization & Access Control",
                    cardImage: "/services/bandwidth.webp"
                }
            ]
        }
    },
    {
        pageUrl: "/firewall-solutions",
        pageDetails: {
            heading: "Firewall Solutions",
            description: "Protect your business from cyber threats with next-generation firewall security solutions.",
            videoUrl: "https://youtube.com/embed/ggWh_2cYkiw?si=lIgfuUGoWB5JgqGZ",
            cardDetails: [
                {
                    cardDescription: "Enterprise-Grade Firewalls for intrusion prevention",
                    cardImage: "/services/firewall.webp"
                },
                {
                    cardDescription: "VPN Setup for secure remote access",
                    cardImage: "/services/vpn.webp"
                },
                {
                    cardDescription: "Cybersecurity Audits & Compliance Services",
                    cardImage: "/services/audits.webp"
                }
            ]
        }
    },
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
                    cardImage: "/products/routers.webp"
                },
                {
                    cardTitle: "Switches",
                    cardDescription: "Managed and unmanaged switches for seamless connectivity",
                    cardImage: "/products/routers.webp"
                }
            ]
        }
    },
    {
        pageUrl: "/communication-devices",
        pageDetails: {
            heading: "Communication Devices",
            description: "Upgrade your office communication with our reliable telephony devices.",
            videoUrl: "https://youtube.com/embed/ggWh_2cYkiw?si=lIgfuUGoWB5JgqGZ",
            cardDetails: [
                {
                    cardTitle: "IP Phones",
                    cardDescription: "Feature-rich VoIP communication",
                    cardImage: "/products/ip-phones.webp"
                },
                {
                    cardTitle: "Analog Phones",
                    cardDescription: "Classic landline solutions for businesses",
                    cardImage: "/products/analog-phones.webp"
                }
            ]
        }
    },
    {
        pageUrl: "/wireless-solutions",
        pageDetails: {
            heading: "Wireless Solutions",
            description: "Boost your wireless coverage with top-quality Wi-Fi devices.",
            videoUrl: "https://youtube.com/embed/ggWh_2cYkiw?si=lIgfuUGoWB5JgqGZ",
            cardDetails: [
                {
                    cardTitle: "Access Points",
                    cardDescription: "Expand Wi-Fi coverage across large areas",
                    cardImage: "/products/access-point.webp"
                },
                {
                    cardTitle: "Repeaters",
                    cardDescription: "Strengthen weak signals for uninterrupted connectivity",
                    cardImage: "/products/access-point.webp"
                }
            ]
        }
    },
    {
        pageUrl: "/security-appliances",
        pageDetails: {
            heading: "Security Appliances",
            description: "Protect your digital assets with our advanced security solutions.",
            videoUrl: "https://youtube.com/embed/ggWh_2cYkiw?si=lIgfuUGoWB5JgqGZ",
            cardDetails: [
                {
                    cardTitle: "Firewalls",
                    cardDescription: "Secure your network from cyber threats",
                    cardImage: "/products/vpn-routers.webp"
                },
                {
                    cardTitle: "VPN Routers",
                    cardDescription: "Enable secure remote access for businesses",
                    cardImage: "/products/vpn-routers.webp"
                }
            ]
        }
    },
]

export const companySocialMediaLinks: SocailMediaLinks = {
    facebook: "/",
    instagram: "/",
    linkedin: "/"
}

export const branchDetails: BranchDetails[] = [
    {
        branchName: "SANIT Inventions Head Office & NOC",
        branchAddress: "No: 32/2A, Udumulla Road, Battaramulla",
        branchPhone: "+94 11 2 772 222",
        branchEmail: "info@sanit.lk",
        branchMapUrl: "https://maps.app.goo.gl/rcNABrWwciQWJET1A",
        branchPhoto: ""
    },
    {
        branchName: "SANIT Inventions Kotte Branch",
        branchAddress: "No: 154, Sandatenna Mawatha, Sri Jayawardenepura Kotte",
        branchPhone: "+94 11 2 772 222",
        branchEmail: "info@sanit.lk",
        branchMapUrl: "https://maps.app.goo.gl/rcNABrWwciQWJET1A",
        branchPhoto: ""
    },
    {
        branchName: "SANIT Inventions Anuradhapura Branch",
        branchAddress: "No: 580A, Pandulagama, Anuradhapura",
        branchPhone: "+94 11 2 772 222",
        branchEmail: "info@sanit.lk",
        branchMapUrl: "https://maps.app.goo.gl/rcNABrWwciQWJET1A",
        branchPhoto: ""
    }
]

export const teamMembersDetails: TeamMemberDetails[] = [
    {
        name: "Ethan Carter",
        position: "Senior Network Engineer",
        profileImage: "/team-members/ethan.webp",
        contact: {
            facebook: "/",
            instagram: "/",
            linkedin: "/"
        }
    },
    {
        name: "Olivia Mitchell",
        position: "System Administrator",
        profileImage: "/team-members/olivia.webp",
        contact: {
            facebook: "/",
            instagram: "/",
            linkedin: "/"
        }
    },
    {
        name: "Emily Lawson",
        position: "Firewall & Security Specialist",
        profileImage: "/team-members/emily.webp",
        contact: {
            facebook: "/",
            instagram: "/",
            linkedin: "/"
        }
    },
    {
        name: "Lucas Bennett",
        position: "IT Support Specialist",
        profileImage: "/team-members/lucas.webp",
        contact: {
            facebook: "/",
            instagram: "/",
            linkedin: "/"
        }
    },
    {
        name: "Ava Coleman",
        position: "Wireless Solutions Engineer",
        profileImage: "/team-members/ava.webp",
        contact: {
            facebook: "/",
            instagram: "/",
            linkedin: "/"
        }
    },
    {
        name: "Liam Carter",
        position: "Firewall & Security Specialist",
        profileImage: "/team-members/liam.webp",
        contact: {
            facebook: "/",
            instagram: "/",
            linkedin: "/"
        }
    },
]