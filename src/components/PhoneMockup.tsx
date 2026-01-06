
import styles from "./PhoneMockup.module.css";

interface PhoneMockupProps {
    screenIndex?: number;
    delay?: number;
    className?: string;
    image?: string;
}

export const PhoneMockup = ({
    screenIndex = 0,
    delay = 0,
    className = "",
    image
}: PhoneMockupProps) => {
    // Mock screens for social app
    const screens = [
        { title: "Home Feed", color: "var(--primary)" },
        { title: "Event Map", color: "var(--secondary)" },
        { title: "Venue List", color: "var(--accent)" },
        { title: "Organizer CRM", color: "var(--info)" },
        { title: "Ticket Wallet", color: "var(--success)" },
        { title: "Analytics", color: "var(--warning)" },
    ];

    const screen = screens[screenIndex % screens.length];

    return (
        <div
            className={`${styles.phoneContainer} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className={styles.phoneFrame}>
                <div className={styles.phoneScreen} style={{ borderColor: image ? 'var(--primary-light)' : screen.color }}>
                    {image ? (
                        <div className={styles.imageContent}>
                            <img src={image} alt="App Screenshot" className={styles.screenImage} />
                            {/* Overlay glass effect */}
                            <div className={styles.screenOverlay} />
                        </div>
                    ) : (
                        <div className={styles.screenContent}>
                            {/* Glass Reflectance */}
                            <div className={styles.screenGlow} style={{ background: `radial-gradient(circle at 50% 0%, ${screen.color}33 0%, transparent 70%)` }} />

                            <div className={styles.statusBar}>
                                <span>9:41</span>
                                <div className={styles.statusIcons}>
                                    <div className={styles.wifi} />
                                    <div className={styles.battery} />
                                </div>
                            </div>
                            <div className={styles.appHeader}>
                                <div className={styles.avatar} style={{ border: `1px solid ${screen.color}55` }} />
                                <div className={styles.searchBar} />
                            </div>
                            <div className={styles.mainArea}>
                                <h4 className={styles.screenTitle} style={{ color: screen.color }}>{screen.title}</h4>
                                <p className={styles.screenSubtitle}>Featured today in Your Area</p>

                                <div className={styles.contentGrid}>
                                    <div className={styles.placeholderBlock} />
                                    <div className={styles.placeholderBlock} />
                                    <div className={styles.placeholderBlock} />
                                </div>
                            </div>
                            <div className={styles.tabBar}>
                                <div className={styles.tabItem} />
                                <div className={styles.tabItem} style={{ background: screen.color, boxShadow: `0 0 10px ${screen.color}` }} />
                                <div className={styles.tabItem} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
