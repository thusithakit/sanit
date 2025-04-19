"use client"
import { navLinks } from "@/utils/data";
import { ChevronDown, MoveRight } from "lucide-react";
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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
            <div className="container flex justify-between items-center">
                <Link href="/" className="py-6">
                    <h2>Logo</h2>
                </Link>
                <div className="nav-links">
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
            </div>
        </header>
    )
}

export default Navbar