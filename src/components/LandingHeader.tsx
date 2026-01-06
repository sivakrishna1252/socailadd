import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import styles from "./LandingHeader.module.css";
import { Button } from "./Button";

export const LandingHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Users", href: "#users" },
        { name: "Property Owners", href: "#property-owners" },
        { name: "Event Organizers", href: "#event-organizers" },
    ];

    return (
        <>
            <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${isMobileMenuOpen ? styles.menuOpen : ""}`}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <span className={styles.gradientText}>Socialadd</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className={styles.desktopNav}>
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className={styles.navLink}>
                                {link.name}
                            </a>
                        ))}
                        <Button variant="primary" onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}>
                            Download App
                        </Button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className={styles.mobileMenuToggle}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay - Moved outside header for clean stacking */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <div className={styles.mobileMenuContent}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={styles.mobileNavLink}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className={styles.mobileCta}>
                            <Button variant="primary" style={{ width: '100%' }} onClick={() => {
                                setIsMobileMenuOpen(false);
                                document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                Download App
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
