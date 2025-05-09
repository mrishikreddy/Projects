import { useEffect, useRef } from "react";
import styles from "./css/skills.module.css";

export default function Skills({darkMode}) {
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
            { threshold: 0.1 } // Trigger when 10% of the section is visible
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

    const skills = [
        "C", "Python", "Java", "JavaScript", "SQL", "HTML", "CSS", "Node.js", "Express.js", "Next.js", "Django", "Flask", "React Native", 
        "React.js", "Redux", "Keras", "OpenCV", "Pillow", "TensorFlow", "MySQL", "MongoDB", "Firestore", "AWS", "Azure", "Firebase", "Git", "VS Code",
        "PyCharm", "Eclipse", "Google Colab", "Postman", "Data Structures", "Artificial Intelligence", "Computer Networks",
        "Operating Systems"
    ];

    return (
        <section className={styles.section} id="skills" ref={sectionRef}>
            <h2>Skills</h2>
            <ul className={styles.skillsList}>
                 {/* Code is  partially hidden for security and copyright protection. Contact Me for full code.*/}
            </ul>
        </section>
    );
}
