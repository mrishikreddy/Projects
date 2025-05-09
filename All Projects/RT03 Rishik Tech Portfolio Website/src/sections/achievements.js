import { useEffect, useRef, useState } from "react";
import styles from "./css/achievements.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function Achievements({darkMode}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);

  const scrollToSlide = (index) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    const newSlide = (currentSlide - 1 + 4) % 4; // Update to match the number of slides
    setCurrentSlide(newSlide);
    scrollToSlide(newSlide);
  };

  const scrollRight = () => {
    const newSlide = (currentSlide + 1) % 3; // Update to match the number of slides
    setCurrentSlide(newSlide);
    scrollToSlide(newSlide);
  };

  useEffect(() => {
    if (isHovered) return; // Stop auto-scroll when hovered
    const interval = setInterval(() => {
      scrollRight();
    }, 2500); // Auto-scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentSlide, isHovered]);

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

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    scrollToSlide(index);
  };

  return (
    <>
    <div id="achievements">
    <br/>
    </div> 
    <div  className={`${styles.outerDiv}`} ref={sectionRef}>
      <div className={darkMode? styles.sectionTitleDark: styles.sectionTitleLight}>Achievements</div>
      <div
        className={styles.carouselContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >











        {/* Code is partially hidden for security and copyright protection. */}



















        </div><div>
          </div>
        </div>
        <button className={styles.scrollButton} onClick={scrollRight}>
        <FontAwesomeIcon icon={faChevronCircleRight} className={styles.faicons}/>
        </button>
        <div>
      </div>
      {/* Dots for navigation */}
      <div className={styles.dotsContainer}>
        {[0, 1, 2].map((index) => (
          <div
          key={index}
          className={
            darkMode
              ? `${styles.dotDark} ${currentSlide === index ? styles.activeDotDark : ""}`
              : `${styles.dotLight} ${currentSlide === index ? styles.activeDotLight : ""}`
          }
          onClick={() => handleDotClick(index)}
        />
        
        ))}
      </div>
      <div>
    </div>
    </>
  );
}

