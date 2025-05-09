import React from "react";
import stylesDark from "./css/introDark.module.css";
import stylesLight from "./css/introLight.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Intro({darkMode}) {

  const styles = darkMode ? stylesDark : stylesLight;

  useEffect(() => {
    const elements = document.querySelectorAll(`.${darkMode ? stylesDark.animateOnLoad : stylesLight.animateOnLoad}`);
  
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.2}s`; // Stagger animations
      element.classList.add(darkMode ? stylesDark.visible : stylesLight.visible);
    });
  }, [darkMode]);

  return (
    <>
      <div>
        <div className={`${styles.info} ${styles.animateOnLoad}`}>
          <div className={`${styles.welcome} ${styles.animateOnLoad}`}>
            Hello, I am Rishik Reddy
          </div>
          <p>
            I am an aspiring Software Developer with a passion for building innovative web and mobile applications while diving into cutting-edge libraries and frameworks.
            I am currently pursuing my 3rd year of a bachelor's degree in Computer Science at SR University, where I’m immersed in learning and experimenting with
            emerging technologies in the software industry. My journey so far includes working on projects involving technologies such as Python, Java, React, Next.js, APIs, AI, SQL, MongoDB, and more.
            My journey is fueled by a love for coding and a curiosity for emerging technologies, which keeps me striving to learn and grow.
          </p>
          <div className={`${styles.introButtonDiv} ${styles.animateOnLoad}`}>
          <Link href="https://drive.google.com/file/d/1LfjyjA3m7D2NXzGLc47e5sz26REtSYJ9/view?usp=sharing" target="_blank">
          <button className={`${styles.introButton} ${styles.animateOnLoad}`}>Resume</button>
          </Link>

          <Link href="https://github.com/MRishikReddy" target="_blank">
          <button className={`${styles.introButton} ${styles.animateOnLoad}`}>Github</button>
          </Link>
          </div>
        </div>
        <div className={`${styles.photo} ${styles.animateOnLoad}`}>
          <Image
            src="/pp.png"
            alt="Profile Picture"
            width={300}
            height={300}
            className={styles.actualPhoto}
            priority
          />
        </div>
      </div>
    </>
  );
}
