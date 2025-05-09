import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.subtitle}>
          Hello! I am <strong>Rishik Reddy</strong>, a Computer Science enthusiast with a passion for solving real-world problems through technology.
        </p>
      </section>
      <section className={styles.content}>
        <div className={styles.paragraph}>
          <p>
            I am currently pursuing my Bachelor of Technology at SR University, Warangal, Telangana, maintaining an outstanding CGPA of 9.4.
             My expertise spans across programming languages like Python, Java, and JavaScript, as well as frameworks such as Next.js and Django.
              I specialize in creating innovative solutions by blending creativity with logic, whether it's crafting responsive web applications or developing deep learning models.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p>
            My project portfolio reflects my dedication to learning and innovation. One of my key projects
             is a <strong>Handwritten Digit Recognition</strong> system using convolutional neural networks,
              which achieved an impressive accuracy of 98.67%. Another noteworthy project is <strong>Scholar’s Companion</strong>,
               a Java-based tool that simplifies academic planning by tracking attendance and providing grade predictions.
                Each project I undertake reinforces my technical skills and commitment to delivering impactful solutions.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p>
            Beyond development, I have also built practical applications like a <strong>Restaurant Order Management System</strong>,
             which uses advanced data structures for efficient order handling, and a <strong>Resort Web Application</strong>,
              which enhances user engagement through responsive and visually appealing designs.
               These experiences have strengthened my abilities in both frontend and backend development.
          </p>
        </div>
        <div className={styles.paragraph}>
          <p>
            To stay ahead in the tech industry, I actively pursue certifications.
             I am proud to have completed programs like the <strong>IBM AI Engineering Specialization</strong>,
              <strong>Google Cybersecurity Specialization</strong>,
               and <strong>AWS Academy Cloud Foundations</strong>.
                These achievements reflect my commitment to mastering the latest technologies and adapting to the evolving tech landscape.
          </p>
        </div>
      </section>
      <section className={styles.footer}>
        <p className={styles.conclusion}>
          I am excited about the future of technology and the endless possibilities it offers. Let's connect and collaborate to build something incredible!
        </p>
      </section>
    </div>
  );
}
