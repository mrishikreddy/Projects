import { useEffect, useRef } from "react";
import styles from "./css/education.module.css";

export default function Education({darkMode}) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animate);
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
         {/* Code is  partially hidden for security and copyright protection. Contact Me for full code.*/}
    );
}
