import { useEffect, useRef } from "react";
import styles from "./css/workexp.module.css";

export default function WorkExperience() {
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
        <section className={styles.extremeOuterDiv} ref={sectionRef}>
            <h2 className={styles.sectionTitle}>Work Experience</h2>
            <div className={styles.outerDiv}>
                {[
                    {
                        title: "Software Engineer",
                        company: "Company ABC",
                        description:
                            "Developed and maintained scalable web applications, enhancing user experience and performance. Collaborated with cross-functional teams to implement agile methodologies.",
                    },
                    {
                        title: "Frontend Developer",
                        company: "Company XYZ",
                        description:
                            "Designed responsive user interfaces and optimized application load times. Leveraged modern frameworks to ensure high performance and accessibility.",
                    },
                    {
                        title: "Intern",
                        company: "Startup LMN",
                        description:
                            "Assisted in building MVPs and creating reusable components. Contributed to project planning and debugging processes to meet deadlines.",
                    },
                ].map((item, index) => (
                    <div className={styles.wexp} key={index}>
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.company}>{item.company}</p>
                        <p className={styles.description}>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
