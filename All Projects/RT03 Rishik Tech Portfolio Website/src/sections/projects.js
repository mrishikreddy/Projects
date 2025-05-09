import { useEffect, useRef } from "react";
import styles from "./css/projects.module.css";

export default function Projects() {
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
      { threshold: 0.05 } // Trigger when 10% of the section is visible
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

  const handleClick1 = () => {
    window.open('https://github.com/mrishikreddy/Projects/blob/main/Restaurant%20order%20management%20system.c', '_blank');
  };

  const handleClick2 = () => {
    window.open('https://github.com/mrishikreddy/Projects/blob/main/Prediction_of_CO2_emissions.ipynb', '_blank');
  };

  const handleClick3 = () => {
    window.open('https://github.com/mrishikreddy/Projects/blob/main/Image_Recognition.ipynb', '_blank');
  };

  const handleClick4 = () => {
    window.open('https://github.com/mrishikreddy/Projects/tree/main', '_blank');
  };

  return (
    <div>
      <h1>Projects</h1>
              <div>Web Application: Paradise Resorts</div>
              <div>
                <ul>
                  <li >Created a static web app featuring sections for 4 room types, activities, and special events, along with a
                  customer support page, providing comprehensive resort information.</li>
                  <li >Ensured the site was responsive across devices, resulting in a 20% increase in user engagement during testing.</li>
                  <li >Applied a Maldives-inspired theme and optimized load times and navigation, leading to a 15% increase in positive
                  design feedback and a smoother user experience.</li>
                </ul>
              </div>
              <div className={styles.techUsed}>Tech used: HTML, CSS, JavaScript, React, Github</div>

            </div>
            <div className={styles.presentationDiv}>
              <img src="/webApp.png" alt="Paradise Resorts Image" className={styles.mediaDiv}/>
            </div>
          </div>
          <div className={styles["card-buttons"]}>
            <button onClick={() => window.open("https://mrishikreddy.github.io/rishik.tech.projects/webApp", "_blank")}>View Project</button>
            <button onClick={() => window.open("https://github.com/mrishikreddy/Projects/tree/main/Web%20Application%20Paradise%20Resorts", "_blank")}>View Code</button>
          </div>
        </div>

        <div className={styles.card}>
        <div>
            <div>
              <div>SRU Coding Club Website</div>
              <div>
                <ul>
                  <li >Built and deployed a full-stack Next.js + Firebase site with real-time auth and optimized Firestore for 10K+ users;
                   onboarded 500+ in week 1 with less than 200ms load time.</li>
                  <li >Integrated 7+ sections (Leaderboard, FAQs, etc.) using localStorage and indexed Firestore, reducing reads by 80% and doubling UI speed.</li>
                  <li >Created Ciao AI chatbot with Generative AI and college email auth (register/login/reset), securing access and automating 3000+ queries per day.</li>
                </ul>
              </div>
              <div className={styles.techUsed}>Tech used: Next.js, React.js, Firebase, JavaScript, Generative AI </div>

            </div>
            <div className={styles.presentationDiv}>
              <img src="/SRUCC.png" alt="Scholar Companion Image" className={styles.mediaDiv}/>
            </div>
          </div>
          <div className={styles["card-buttons"]}>
            <button onClick={() => window.open("https://rtsrucc-demo-web.vercel.app/", "_blank")}>View Project</button>
            <button onClick={() => window.open("https://github.com/mrishikreddy/Projects/tree/main/SRU%20Coding%20Club", "_blank")}>View Code</button>
          </div>
        </div>


        <div className={styles.card}>
        <div>
            <div>
              <div>Scholar’s Companion</div>
              <div>
                <ul>
                  <li >Developed an educational tool to track and improve academic performance, featuring an attendance tracker to meet
                  goals and a score calculator for achieving target grades.</li>
                  <li >Created an attendance analysis tool that calculates the number of classes needed to maintain at least 75%
                  attendance per subject, aiding academic planning.</li>
                  <li >Engineered an algorithm to determine the required scores for the second midterm to meet final semester targets,
                  using a weighted rule (75% of the highest score and 25% of the lowest).</li>
                </ul>
              </div>
              <div className={styles.techUsed}>Tech used: C, Data Structures and Algorithms</div>

            </div>
            <div className={styles.presentationDiv}>
              <img src="/schlComp.jpg" alt="Scholar Companion Image" className={styles.mediaDiv}/>
            </div>
          </div>
          <div className={styles["card-buttons"]}>
            <button onClick={() => window.open("https://github.com/mrishikreddy/Projects/blob/main/scholars%20companion.c", "_blank")}>View Code</button>
          </div>
        </div>

        <div className={styles.card}>
        <div>
            <div>
              <div>Tic Tac Toe AI</div>
              <div>
                <ul>
                  <li >Developed a Python-based Tic-Tac-Toe game with an AI-driven opponent utilizing decision-making algorithms for optimal move selection.</li>
                  <li >Engineered a dynamic, turn-based gameplay system that seamlessly integrates user inputs with automated AI responses, enhancing interactivity.</li>
                  <li >Designed and implemented a strategic AI decision-making mechanism, incorporating conditional logic and move evaluation techniques to optimize gameplay outcomes.</li>
                </ul>
              </div>
              <div className={styles.techUsed}>Tech used: Python, Artificial Intelligence</div>

            </div>
            <div className={styles.presentationDiv}>
              <div className={styles.mediaVidDiv}>
              <video width="100%" height="100%" autoPlay loop muted playsInline className={styles.tttVid}>
              <source src="/ttt.mp4" type="video/mp4" />
              </video>
              </div>
            </div>
          </div>
          <div className={styles["card-buttons"]}>
            <button onClick={() => window.open("https://mrishikreddy.github.io/rishik.tech.projects/ticTacToe", "_blank")}>View Project</button>
            <button onClick={() => window.open("https://github.com/mrishikreddy/Projects/blob/main/Tic%20Tac%20Toe.py", "_blank")}>View Code</button>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.VDiv}>
          <div>
            <div onClick={handleClick1} className={styles.hDiv1}>
              <div className={styles.pTitleDiv}>Restaurant Order Management System</div>
              <div >Developed a dynamic food ordering system using C and linked lists,
                 enabling efficient order management for small-scale restaurants. Implemented features for order 
                 addition, search, display, deletion, and total sales calculation. Ensured optimized data retrieval,
                  seamless order tracking, and dynamic memory management to enhance system scalability and performance.</div>
            </div>

            <div onClick={handleClick2} className={styles.hDiv2}>
            <div className={styles.pTitleDiv}>CO2 Emissions Prediction</div>
            <div >Designed and implemented a predictive model
               for CO2 emissions using linear regression on vehicle fuel consumption data.
                Used Scikit-learn for model training and evaluation, achieving performance metrics
                 through R² score and Mean Squared Error (MSE).Integrated data preprocessing and
                visualized insights with Matplotlib, showcasing expertise in machine learning and environmental analytics.</div>
            </div>
            </div>



          <div>
            <div onClick={handleClick3} className={styles.hDiv1}>
            <div className={styles.pTitleDiv}>Image Recognition System</div>
            <div >Developed a Convolutional Neural Network (CNN)
               for handwritten digit classification using the MNIST dataset.
               Employed Keras with the Adam optimizer and categorical cross-entropy
               loss to achieve high accuracy in image classification. Showcased deep learning proficiency,
               model training, evaluation, and deployment for AI-driven image processing applications.</div>
            </div>

            <div onClick={handleClick4} className={styles.hDiv2}>
            <div className={styles.viewMorePTitle}><div>20+</div></div>
            <div className={styles.viewMoreP}>view more projects</div>
            </div>

        </div>
      </div>
    </div>
  );
}
