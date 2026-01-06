import { useState, useEffect, useRef } from 'react';

export function useIntersectionObserver({
    threshold = 0,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
}: IntersectionObserverInit & { freezeOnceVisible?: boolean } = {}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<Element | null>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isElementVisible = entry.isIntersecting;
                setIsVisible(isElementVisible);

                if (isElementVisible && freezeOnceVisible) {
                    observer.unobserve(node);
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [threshold, root, rootMargin, freezeOnceVisible]);

    return { ref, isVisible };
}
