import { useEffect, useRef } from "react";
import styles from "./css/skillsViewMore.module.css";

export default function ViewMore({ darkMode }) {
  const sectionRef = useRef(null);
  const outerDivRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (outerDivRef.current) {
      observer.observe(outerDivRef.current);
    }

    return () => {
      if (outerDivRef.current) {
        observer.unobserve(outerDivRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.outerDiv} ref={outerDivRef}>
      <div className={styles.moreInfo} ref={sectionRef}>
        <div className={styles.bars}>
          <div className={darkMode ? styles.sectionTitle1Dark : styles.sectionTitle1Light}>Programming Languages</div>
          {[
            { name: "Python", level: "97%" },
            { name: "Java", level: "90%" },
            { name: "C", level: "95%" },
            { name: "JavaScript", level: "85%" }
          ].map((skill, i) => (
            <div className={styles.skill} key={i}>
                <div className={styles.progress} style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className={darkMode ? styles.verticalLineDark : styles.verticalLineLight}></div>

        <div className={styles.catgl}>
          <div>Skills by Categories</div>
          <div>
            {[
              { title: "Languages", items: "C, Python, Java, JavaScript, SQL, HTML, CSS" },
              { title: "Frameworks", items: "Node.js, Express.js, Next.js, Django, Flask, React Native" },
              { title: "Libraries", items: "React.js, Redux, Keras, OpenCV, TensorFlow" },
              { title: "Databases", items: "MySQL, MongoDB, Firestore" },
              { title: "Cloud", items: "AWS, Azure, Firebase" },
              { title: "Developer Tools", items: "Git, VS Code, PyCharm, Eclipse, Google Colab, Postman" },
              { title: "Artificial Intelligence", items: "Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Genrative AI" },
              { title: "Foundational Concepts", items: "Data Structures, Artificial Intelligence, Computer Networks, Operating Systems" }
            ].map((cat, i) => (
              <div className={styles.skillCategory} key={i}>
                <div className={darkMode ? styles.categoryTitleDark : styles.categoryTitleLight}>{cat.title}</div>
                <div className={darkMode ? styles.skillItemsDark : styles.skillItemsLight}>{cat.items}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
