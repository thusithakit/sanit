"use client"
import { navLinks } from "@/utils/data";
import { ChevronDown, MenuIcon, MoveRight, X } from "lucide-react";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const Navbar = () => {
    const pathName = usePathname();
    const isActive = (href: string | undefined) => {
        if (!href) return false;
        return pathName === href || (href !== "/" && pathName.startsWith(href));
    }
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    useEffect(() => {
        setIsMobileNavOpen(false);
    }, [pathName]);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        if (isMobileNavOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isMobileNavOpen]);

    return (
        <header className={`fixed top-0 w-full max-w-[100dvw] z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
            <div className="container no-border flex justify-between items-center">
                <Link href="/" className="py-6">
                    <h2>Logo</h2>
                </Link>
                <div className="hidden md:block nav-links">
                    <nav>
                        {navLinks.map((navLink, i) => (
                            <div key={i} className={`group top-link ${isScrolled ? "py-6" : "py-8"}`}>
                                {navLink.href ? (
                                    <Link href={navLink.href} className={`${isActive(navLink.href) ? 'active' : ''}`}>{navLink.label}</Link>
                                ) : (
                                    <>
                                        <p className={`${isActive((navLink.children && ("/" + navLink.children[0].href?.split("/")[1]))) ? 'active' : ''}`}>{navLink.label}</p>
                                        <ChevronDown className={`transition-all group-hover:rotate-180 ${isActive((navLink.children && ("/" + navLink.children[0].href?.split("/")[1]))) ? 'active' : ''}`} />
                                    </>
                                )}
                                {navLink.children && (
                                    <div className="sublinks hidden group-hover:flex">
                                        {navLink.children.map((child, j) => (
                                            <Link href={child.href || "/"} key={j} className="sublink flex justify-between items-center gap-4">{child.label} <MoveRight size={16} /></Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
                <span className="flex items-center justify-center md:hidden border border-[#D7E2F5] rounded-full py-4 px-6 gap-3 cursor-pointer bg-white" onClick={() => setIsMobileNavOpen((prev) => !prev)}>
                    <MenuIcon color="#304E7E" />
                    <h2 className="text-sm text-[#304E7E]">Menu</h2>
                </span>
            </div>
            {isMobileNavOpen && <MobileNavBar setIsMobileNavOpen={setIsMobileNavOpen} isActive={isActive} />}
        </header>
    )
}

const MobileNavBar = ({ setIsMobileNavOpen, isActive }: { setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>, isActive: (href: string | undefined) => boolean }) => {
    const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
    const toggleSubMenu = (index: number) => {
        setOpenSubMenu(openSubMenu === index ? null : index);
    };
    return (
        <div className="absolute top-0 left-0 w-full h-[100dvh] bg-white z-50 transition-all duration-300 overflow-hidden">
            <div className="container no-border flex justify-between items-center">
                <Link href="/" className="py-6">
                    <h2>Logo</h2>
                </Link>
                <span className="flex items-center justify-center md:hidden border border-[#D7E2F5] rounded-full py-4 px-6 gap-3 cursor-pointer bg-white" onClick={() => setIsMobileNavOpen((prev) => !prev)}>
                    <X color="#304E7E" />
                    <h2 className="text-sm text-[#304E7E]">Close</h2>
                </span>
            </div>
            <nav className="relative w-full pt-12">
                {navLinks.map((navLink, i) => (
                    <div key={i} className="p-6">
                        {navLink.href ? (
                            <Link href={navLink.href} className={`${isActive(navLink.href) ? 'active' : ''} text-2xl`} onClick={() => setIsMobileNavOpen(false)}>{navLink.label}</Link>
                        ) : (
                            <span onClick={() => toggleSubMenu(i)} className="flex items-center justify-between gap-5 text-2xl">
                                <p className={`${isActive((navLink.children && ("/" + navLink.children[0].href?.split("/")[1]))) ? 'active' : ''}`}>{navLink.label}</p>
                                <ChevronDown className={`transition-all ${openSubMenu === i ? 'rotate-180' : ''} ${isActive((navLink.children && ("/" + navLink.children[0].href?.split("/")[1]))) ? 'active' : ''}`} />
                            </span>
                        )}
                        {navLink.children && (openSubMenu === i) && (
                            <div className="transition-all duration-300 grid">
                                {navLink.children.map((child, j) => (
                                    <Link href={child.href || "/"} key={j} onClick={() => setIsMobileNavOpen(false)} className="py-3.5 text-[16px] text-[#748099]">{child.label}</Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    )
}

export default Navbar