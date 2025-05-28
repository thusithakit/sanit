import { BranchDetails, NavItems, ServicePageDetails, SocailMediaLinks, TeamMemberDetails } from "./types";

export const navLinks: NavItems[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About Us",
        href: "/about",
    },
    {
        label: "Solutions",
        children: [
            {
                label: "Network Infrastructure Solutions",
                href: "/services/network-solutions"
            },
            {
                label: "Wi-Fi Solutions",
                href: "/services/wifi-solutions"
            },
            {
                label: "IPTV Solutions",
                href: "/services/iptv-solutions"
            },
            {
                label: "Firewall Solutions",
                href: "/services/firewall-solutions"
            },
            {
                label: "PABX Solutions",
                href: "/services/pabx-systems"
            },
            {
                label: "CCTV Camera Solutions",
                href: "/services/cctv-solutions"
            },
            {
                label: "SD-WAN Solutions",
                href: "/services/sdwan-solutions"
            },
            {
                label: "Fiber Optic Solutions",
                href: "/services/fiber-solutions"
            },
            {
                label: "PA Systems",
                href: "/services/pa-solutions"
            },
            {
                label: "Security Access Solutions Systems",
                href: "/services/security-solutions"
            }
        ]
    },
    {
        label: "Contact Us",
        href: "/contact",
    }
]

export const serviceDetails: ServicePageDetails[] = [
    {
        pageUrl: "/network-solutions",
        pageDetails: {
            heading: "Network Infrastructure Solutions",
            description: "Enable communication and connectivity within your organization ensuring secure, reliable, and efficient data transmission, scalability, and high availability for users and devices across the network.",
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
            ],
            contact:"Contact us today to discuss how our network infrastructure Solutions can empower your business to thrive in a connected world."
        }
    },
    {
        pageUrl: "/pabx-systems",
        pageDetails: {
            heading: "PABX Systems",
            description: "Manage internal and external calls within an organization by connecting multiple phone lines, route calls, provide extensions, and enable features such as call forwarding, voicemail, and conference calling.",
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
            ],
            contact:"Start the conversation with us to explore how our PABX Solutions can enhance your communication systems and help your business thrive in a connected world."
        }
    },
    {
        pageUrl: "/wifi-solutions",
        pageDetails: {
            heading: "Wi-Fi Solutions",
            description: "Wireless internet connectivity enabling seamless and reliable internet access ensuring strong signal coverage, security, and easy network management.",
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
            ],
            contact:"Get in touch with us today to explore how our advanced WiFi Solutions can help your business thrive in a seamlessly connected world."
        }
    },
    {
        pageUrl: "/iptv-solutions",
        pageDetails: {
            heading: "IPTV Solutions",
            description: "Delivering television contents over IP networks, providing users with on-demand and live streaming services. Set-top boxes, streaming servers, and software manage and deliver high-quality video content to TVs, computers, and mobile devices.",
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
            ],
            contact:"Reach out to our team to discover how our IPTV solutions can elevate your guest experience and help your business thrive in a connected world."
        }
    },
    {
        pageUrl: "/firewall-solutions",
        pageDetails: {
            heading: "Firewall Solutions",
            description: "Protect networks against modern cyber threats using combine advanced security features such as deep packet inspection, intrusion prevention, and application controls.",
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
            ],
            contact:"Let’s connect to discuss your needs to learn how our advanced Firewall Solutions can safeguard your network and help your business thrive in a connected world."
        }
    },
    {
        pageUrl: "/cctv-solutions",
        pageDetails: {
            heading: "CCTV Camera Solutions",
            description: "Provide high-quality video surveillance with remote monitoring and advanced features like motion detection and cloud access",
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
            ],
            contact:"Schedule a consultation today to explore how our CCTV Camera Solutions can strengthen your security and help your business thrive in a connected world."
        }
    },
    {
        pageUrl: "/sdwan-solutions",
        pageDetails: {
            heading: "SD-WAN Solutions",
            description: "Uses software to optimize, route and control traffic across multiple internet base connections, improving performance, security, and reducing costs.",
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
            ],
            contact:"Talk to our experts today to explore how our SD WAN Solutions can strengthen your security and help your business thrive in a connected world."
        }
    },
    {
        pageUrl: "/fiber-solutions",
        pageDetails: {
            heading: "Fiber Optic Solutions",
            description: "Se up long-distance and high-performance data networking for telecommunication services, such as internet, television and telephones.",
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
            ],
            contact:"Discover what we can do for you to explore how our Fiber Optic Solutions can boost your connectivity and help your business thrive in a connected world."
        }
    },
    {
        pageUrl: "/pa-solutions",
        pageDetails: {
            heading: "PA Systems",
            description: "Amplify and distribute announcements, alerts, or background music in public spaces.",
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
            ],
            contact:"Request a customized solution to discover how our PA System can improve communication and support your business in a connected world."
        }
    },
    {
        pageUrl: "/security-solutions",
        pageDetails: {
            heading: "Security Access Solutions Systems",
            description: "Ensure that only authorized individuals can access certain sensitive areas enhancing security by monitoring using technologies such as key cards, biometric scanners, and digital locks.",
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
            ],
            contact:"Partner with us for smarter solutions to learn how our Security Access System Solutions can enhance your premises' safety and help your business thrive in a connected world."
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
        branchPhone: "+94112 772 222",
        branchEmail: "info@sanit.lk",
        branchMapUrl: "https://maps.app.goo.gl/rcNABrWwciQWJET1A",
        branchPhoto: ""
    },
    {
        branchName: "SANIT Inventions Kotte Branch",
        branchAddress: "No: 154, Sandatenna Mawatha, Sri Jayawardenepura Kotte",
        branchPhone: "+94112 772 222",
        branchEmail: "info@sanit.lk",
        branchMapUrl: "https://maps.app.goo.gl/rcNABrWwciQWJET1A",
        branchPhoto: ""
    },
    {
        branchName: "SANIT Inventions Anuradhapura Branch",
        branchAddress: "No: 580A, Pandulagama, Anuradhapura",
        branchPhone: "+94112 772 222",
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