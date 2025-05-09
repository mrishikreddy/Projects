"use client";
import { useState,useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Ai from "@/sections/ai";
import Intro from "@/sections/intro";
import Edu from "@/sections/education";
import Workexp from "@/sections/workexp"
import Skills from "@/sections/skills";
import SkillsViewMore from "@/sections/skillsViewMore"
import Projects from "@/sections/projects";
import Achievements from "@/sections/achievements";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

  const homePage = () => {
    router.push('/'); 
  };
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;
      setDarkMode(screenWidth > 600);
    }
  }, []);
 

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);



  useEffect(() => {
    // Apply the global class to <html> or <body>
    document.documentElement.classList.remove("dark-theme", "light-theme");
    document.documentElement.classList.add(darkMode ? "dark-theme" : "light-theme");
  }, [darkMode]);

  return (
    <>
    <div className={darkMode ? styles.dark : styles.light} id="main-content">
    <Ai/>
    <Intro darkMode={darkMode}/>
    <Edu darkMode={darkMode}/>
    <Workexp />
    <Skills darkMode={darkMode}/>
    <SkillsViewMore darkMode={darkMode}/>
    <Projects />
    <Achievements darkMode={darkMode}/>
    <Contact darkMode={darkMode}/>
    <Footer />
    </>
  );
}

