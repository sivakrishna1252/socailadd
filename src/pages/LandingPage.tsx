import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import {
    Search,
    Ticket,
    MapPin,
    Home,
    LayoutDashboard,
    Users,
    Calendar,
    TrendingUp,
    Bell,
    Apple,
    Play
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../components/Button";
import { LandingHeader } from "../components/LandingHeader";
import { PhoneMockup } from "../components/PhoneMockup";
import { useIntersectionObserver } from "../helpers/useIntersectionObserver";
import styles from "./_index.module.css";

// Import images
import phoneHero1 from "../assets/phones/1w.png";
import phoneHero2 from "../assets/phones/2w.png";
import phoneUser1 from "../assets/phones/3w.png";
import phoneUser2 from "../assets/phones/4w.png";
import phoneVenue1 from "../assets/phones/5w.png";
import phoneVenue2 from "../assets/phones/6w.png";
import phoneOrg1 from "../assets/phones/7w.png";
import phoneOrg2 from "../assets/phones/8w.png";
import w1 from "../assets/phones/w1.png";
import w2 from "../assets/phones/w2.png";
import w4 from "../assets/phones/w4.png";
import w6 from "../assets/phones/w6.png";

// --- Subcomponents for Sections ---

const FadeIn = ({
    children,
    delay = 0,
    className = "",
    direction = "up"
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "left" | "right";
}) => {
    const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div
            ref={ref as any}
            className={`${styles.fadeIn} ${styles[direction]} ${isVisible ? styles.visible : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const FeatureCard = ({
    icon: Icon,
    title,
    description,
    delay = 0
}: {
    icon: React.ElementType;
    title: string;
    description: string;
    delay?: number;
}) => (
    <FadeIn delay={delay} className={styles.cardWrapper}>
        <div className={styles.glassCard}>
            <div className={styles.iconWrapper}>
                <Icon size={24} />
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardText}>{description}</p>
        </div>
    </FadeIn>
);

export default function LandingPage() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 100]);

    return (
        <div className={styles.pageContainer} ref={targetRef}>
            <Helmet>
                <title>Eventify - Effortless Event Management</title>
                <meta name="description" content="The all-in-one platform for seamless event planning, venue booking, and attendee experiences." />
            </Helmet>

            <LandingHeader />

            {/* HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <div className={styles.glowOrb} style={{ top: '10%', left: '20%', background: 'var(--primary)' }} />
                    <div className={styles.glowOrb} style={{ bottom: '20%', right: '10%', background: 'var(--secondary)' }} />
                </div>

                <div className={styles.container}>
                    <div className={styles.heroLayout}>
                        <div className={styles.heroContent}>
                            <FadeIn delay={100}>
                                <h1 className={styles.heroTitle}>
                                    Plan, Host, & Enjoy <br />
                                    <span className={styles.gradientText}>Events Simplified</span>
                                </h1>
                            </FadeIn>

                            <FadeIn delay={300}>
                                <p className={styles.heroSubtitle}>
                                    The ultimate ecosystem connecting passionate organizers with perfect venues and eager attendees.
                                    Experience the future of event management.
                                </p>
                            </FadeIn>

                            <FadeIn delay={500}>
                                <div className={styles.heroCta}>
                                    <Button
                                        size="lg"
                                        variant="primary"
                                        className={styles.primaryBtn}
                                        onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        Get Started
                                    </Button>
                                </div>
                            </FadeIn>
                        </div>

                        <div className={styles.heroVisual}>
                            <div className={styles.mockupPair}>
                                <motion.div style={{ y: y1 }}>
                                    <PhoneMockup image={phoneHero2} delay={600} className={styles.mockupLeft} />
                                </motion.div>
                                <motion.div style={{ y: y2 }}>
                                    <PhoneMockup image={phoneHero1} delay={800} className={styles.mockupCenter} />
                                </motion.div>
                                <motion.div style={{ y: y1 }}>
                                    <PhoneMockup image={w1} delay={1000} className={styles.mockupRight} />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ATTENDEES SECTION (Formerly Users) */}
            <section id="users" className={styles.section}>
                <div className={styles.container}>
                    <FadeIn>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>For <span className={styles.gradientText}>Users</span></h2>
                            <p className={styles.sectionDesc}>Unlock memorable experiences and seamless participation.</p>
                        </div>
                    </FadeIn>

                    <div className={styles.splitLayout}>
                        <div className={styles.contentSide}>
                            <div className={styles.featureGrid}>
                                <FeatureCard
                                    icon={Search}
                                    title="Discover Events"
                                    description="Find concerts, workshops, and meetups tailored to your interests with our smart recommendation engine."
                                    delay={100}
                                />
                                <FeatureCard
                                    icon={Ticket}
                                    title="Instant Booking"
                                    description="Secure your spot in seconds. Manage your tickets and check-ins all from one convenient wallet."
                                    delay={200}
                                />
                                <FeatureCard
                                    icon={Bell}
                                    title="Live Updates"
                                    description="Stay in the loop. Get real-time notifications for schedule changes, announcements, and exclusive perks."
                                    delay={300}
                                />
                            </div>
                        </div>

                        <div className={styles.mockupSide}>
                            <div className={styles.mockupPair}>
                                <motion.div style={{ y: y1 }}>
                                    <PhoneMockup image={phoneUser1} delay={200} className={styles.mockupLeft} />
                                </motion.div>
                                <motion.div style={{ y: y2 }}>
                                    <PhoneMockup image={phoneUser2} delay={400} className={styles.mockupRight} />
                                </motion.div>
                                <motion.div style={{ y: y1 }}>
                                    <PhoneMockup image={w2} delay={600} className={styles.mockupCenter} />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VENUES SECTION (Formerly Property Owners) */}
            <section id="property-owners" className={`${styles.section} ${styles.altBg}`}>
                <div className={styles.container}>
                    <FadeIn>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>For <span className={styles.textSecondary}>Property Owners</span></h2>
                            <p className={styles.sectionDesc}>Maximize your space utilization and streamline bookings.</p>
                        </div>
                    </FadeIn>

                    <div className={`${styles.splitLayout} ${styles.reverse}`}>
                        <div className={styles.mockupSide}>
                            <div className={styles.mockupPair}>
                                <motion.div style={{ y: y2 }}>
                                    <PhoneMockup image={phoneVenue1} delay={200} className={styles.mockupLeft} />
                                </motion.div>
                                <motion.div style={{ y: y1 }}>
                                    <PhoneMockup image={phoneVenue2} delay={400} className={styles.mockupRight} />
                                </motion.div>
                                <motion.div style={{ y: y2 }}>
                                    <PhoneMockup image={w4} delay={600} className={styles.mockupCenter} />
                                </motion.div>
                            </div>
                        </div>

                        <div className={styles.contentSide}>
                            <div className={styles.featureGrid}>
                                <FeatureCard
                                    icon={Home}
                                    title="List Your Space"
                                    description="Showcase your venue with rich media and detailed specs to attract top-tier event organizers."
                                    delay={100}
                                />
                                <FeatureCard
                                    icon={LayoutDashboard}
                                    title="Smart Management"
                                    description="Handle inquiries, availability, and contracts through a centralized dashboard designed for venues."
                                    delay={200}
                                />
                                <FeatureCard
                                    icon={MapPin}
                                    title="Local Visibility"
                                    description="Put your venue on the map. We connect you directly with organizers looking for spaces in your area."
                                    delay={300}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ORGANIZERS SECTION (Formerly Event Organizers) */}
            <section id="event-organizers" className={styles.section}>
                <div className={styles.container}>
                    <FadeIn>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>For <span className={styles.textAccent}>Event Organizers</span></h2>
                            <p className={styles.sectionDesc}>Everything you need to create, manage, and scale your events.</p>
                        </div>
                    </FadeIn>

                    <div className={styles.splitLayout}>
                        <div className={styles.contentSide}>
                            <div className={styles.featureGrid}>
                                <FeatureCard
                                    icon={Calendar}
                                    title="Event Creation"
                                    description="Launch events effortlessly. From ticketing tiers to scheduling, we provide the full toolkit."
                                    delay={100}
                                />
                                <FeatureCard
                                    icon={Users}
                                    title="Audience Engagement"
                                    description="Connect with your attendees before, during, and after the event with integrated community tools."
                                    delay={200}
                                />
                                <FeatureCard
                                    icon={TrendingUp}
                                    title="Deep Analytics"
                                    description="Understand your performance. Track ticket sales, attendance rates, and revenue in real-time."
                                    delay={300}
                                />
                            </div>
                        </div>

                        <div className={styles.mockupSide}>
                            <div className={styles.mockupPair}>
                                <motion.div style={{ y: y1 }}>
                                    <PhoneMockup image={phoneOrg1} delay={200} className={styles.mockupLeft} />
                                </motion.div>
                                <motion.div style={{ y: y2 }}>
                                    <PhoneMockup image={phoneOrg2} delay={400} className={styles.mockupRight} />
                                </motion.div>
                                <motion.div style={{ y: y1 }}>
                                    <PhoneMockup image={w6} delay={600} className={styles.mockupCenter} />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section id="download" className={styles.ctaSection}>
                <div className={styles.ctaBackground}>
                    <div className={styles.glowOrb} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.15 }} />
                </div>

                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <FadeIn>
                            <h2 className={styles.ctaTitle}>Ready to Host Your Next Big Event?</h2>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <p className={styles.ctaText}>
                                Join a community of thousands of organizers, venues, and attendees on Eventify.
                                Available on iOS and Android.
                            </p>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <div className={styles.storeButtons}>
                                <button className={styles.storeBtn} >
                                    <Apple size={24} fill="currentColor" />
                                    <div className={styles.storeBtnText}>
                                        <span>Download on the</span>
                                        <strong>App Store</strong>
                                    </div>
                                </button>

                                <button className={styles.storeBtn} >
                                    <div className={styles.playIcon}>
                                        <Play size={24} fill="currentColor" style={{ marginLeft: '2px' }} />
                                    </div>
                                    <div className={styles.storeBtnText}>
                                        <span>GET IT ON</span>
                                        <strong>Google Play</strong>
                                    </div>
                                </button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>


        </div>
    );
}
