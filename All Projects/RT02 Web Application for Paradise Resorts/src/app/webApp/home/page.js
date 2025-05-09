"use client";
import styles from "./wahome.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faEnvelope  } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


export default function Wahome() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="../logo.jpg" alt="Logo" className={styles.logoImg}width={100} height={70} />
          </div>
          <div className={styles.actions}>
            <div
              className={`${styles.links} ${isOpen ? styles.active : ""}`}
              onClick={() => setIsOpen(false)}
            >
              <Link href="#home" className={styles.link}>Home</Link>
              <Link href="#rooms" className={styles.link}>Rooms</Link>
              <Link href="#activities" className={styles.link}>Activities</Link>
              <Link href="#events" className={styles.link}>Events</Link>
              <Link href="#gallery" className={styles.link}>Gallery</Link>
              <Link href="#pricing" className={styles.link}>Pricing</Link>
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </div>
          </div>
        </div>
      </nav>


      <div id="home"></div>
      <div className={styles.infoOuterDiv}>
        <div className={styles.headingDiv}>
        <h1 >Welcome to Paradise - Your Gateway to Maldivian Bliss</h1>
        </div>
        <img src="../img2.jpg" className={styles.introImage}/>
      </div>

      <div className={styles.paraDiv}>
        <div className={styles.contentDiv1}>
      <p className={styles.fs}>&emsp;&emsp;&emsp; Discover a world of unparalleled luxury and natural beauty at Paradise Resort, 
      nestled on the enchanting Panama Island in the heart of the Maldives. Just 80 kilometers away 
      from the bustling capital of Malé, our resort offers a secluded haven where you can unwind, 
      rejuvenate, and immerse yourself in the tropical paradise that is the Maldives.</p>
      <p className={styles.fs}>
      &emsp;&emsp;&emsp;Panama Island serves as the perfect backdrop for your dream getaway, providing pristine beaches, 
      crystal-clear turquoise waters, and lush greenery that will leave you awe-inspired from the moment you arrive. 
      Whether you're seeking a romantic retreat, a family adventure, or a tranquil solo expedition, Paradise Resort has 
      meticulously crafted packages that cater to your every desire.</p>
      </div>
      </div>

      <div id="rooms"></div>
      <div className={styles.roomOuterDiv} >
      <div className={styles.headingDiv}>
        <h1>Maldivian Paradise Suites</h1>
        </div>
        <div className={styles.roomtypes}>
        <div className={styles.contentDiv2}>
          <p className={styles.fs}>
          &emsp;&emsp;&emsp;Discover a world of refined indulgence within our resort's exquisite accommodations.
          From the idyllic charm of our Beach Villas and the captivating allure of our Water Villas suspended over the lagoon,
          to the spacious elegance of our Family Suites and the tranquil retreat offered by our Garden Villas, 
          each room type provides a unique and luxurious experience. 
          Immerse yourself in comfort, surrounded by breathtaking natural beauty, 
          as you create lasting memories in your chosen haven.
          </p>
        </div>
        <div className={styles.types}>
          <div className={styles.rooms}>
            <img src="../bv.jpg" className={styles.idi}/>
			        <div className={styles.details}>Beach Villas</div>
                <div className={styles.details}>4.7 <FontAwesomeIcon icon={faStar} width="20px" color="gold"/></div>
		              <div className={styles.details}>25,000 &#8377; per night</div>
		              <button className={styles.botn}>Check availability</button>
          </div>

          <div className={styles.rooms}>
          <img src="../wv.jpg" className={styles.idi}/>
			        <div className={styles.details}>Water Villas</div>
                <div className={styles.details}>4.5 <FontAwesomeIcon icon={faStar} width="20px" color="gold"/></div>
		              <div className={styles.details}>30,000 &#8377; per night</div>
		              <button className={styles.botn}>Check availability</button>
          </div>

          <div className={styles.rooms}>
          <img src="../fso.jpeg" className={styles.idi}/>
			        <div className={styles.details}>Family Suites</div>
                <div className={styles.details}>4.6 <FontAwesomeIcon icon={faStar} width="20px" color="gold"/></div>
		              <div className={styles.details}>60,000 &#8377; per night</div>
		              <button className={styles.botn}>Check availability</button>
          </div>

          <div className={styles.rooms}>
          <img src="../gvo.jpeg" className={styles.idi}/>
			        <div className={styles.details}>Garden Villas</div>
                <div className={styles.details}>4.3 <FontAwesomeIcon icon={faStar} width="20px" color="gold"/></div>
		              <div className={styles.details}>15,000 &#8377; per night</div>
		              <button className={styles.botn}>Check availability</button>
          </div>
        </div>
        </div>
      </div>

      <div id="activities"></div>
      <div className={styles.activitesOuterDiv}>
      <div className={styles.headingDiv}>
        <h1 >Welcome to Paradise - Your Gateway to Maldivian Bliss</h1>
        </div>
      <div className={styles.paraDiv}>
        <div className={styles.contentDiv1}>
      <p className={styles.fs}>&emsp;&emsp;&emsp;Nestled in the captivating beauty of the Maldives,
      our resort offers a spectrum of exhilarating experiences. From the serenity of 
      swimming in the crystal-clear waters to the thrill of boating and water jet adventures, 
      every moment becomes a cherished memory. For the adventurous souls, boat parachuting provides
      an unforgettable rush. We take pride in extending warm welcomes to families and newlyweds alike, 
      offering enticing discounts to children and recently married couples. Discover a world of wonder
      where unforgettable moments and unbeatable offers converge, inviting you to embrace the magic of the
      Maldives in every way.</p>
      </div>
      </div>
      </div>

      <div className={styles.actTypesOuter}>
      <div className={styles.activites}>

        <div className={styles.actImgDiv}>
        <img src="../para.webp" className={styles.imii}/>
          boat parachuting
        </div>

        <div className={styles.actImgDiv}>
        <img src="../swim.jpg" className={styles.imii}/>
          Swimming
        </div>
      </div>

      <div className={styles.activites}>

      <div className={styles.actImgDiv}>
      <img src="../boat.jpg" className={styles.imii}/>
        Boating
      </div>

      <div className={styles.actImgDiv}>
      <img src="../surf.webp" className={styles.imii}/>
        Surfing
      </div>
      </div>
      </div>

      <div id="events"></div>
      <div className={styles.eventsOuter}>
        <div className={styles.headingDiv}>
        <h1 >Welcome to Paradise - Your Gateway to Maldivian Bliss</h1>
        </div>
        <div className={styles.events}>
          <div className={styles.eventsinfo}>
        <p>&emsp;&emsp;&emsp;Welcome to our exquisite Maldivian resort, 
        where an array of captivating events awaits to elevate your tropical escape.
        Immerse yourself in a vibrant tapestry of experiences as you explore the paradise
        that surrounds you. From serene morning yoga sessions by the lagoon to heart-pounding
        water sports adventures that reveal the underwater wonders, there's something for every
        soul seeking adventure or relaxation. Delve into the rich Maldivian culture through traditional
        dance performances and local artisan markets, offering a glimpse of authenticity in every interaction.
        But that's not all – the highlight of our event calendar includes the renowned Pro DJ Night and dance 
        parties that set the night on fire. Under the starlit sky, experience electrifying beats, dazzling light
        displays, and an oceanfront dance floor that invites you to move to the rhythm of paradise. 
        These events, alongside other popular gatherings, guarantee an unforgettable stay, 
        creating cherished memories of your Maldives getaway.<br/><br/>
        &emsp;&emsp;&emsp;
        As the sun dips below the horizon, our resort transforms into a
        magical realm where each evening unveils a new facet of paradise.
        From intimate sunset cruises that paint the sky in mesmerizing hues
        to captivating cultural showcases that celebrate the Maldivian heritage, 
        the night becomes an enchanting canvas of possibilities. Indulge in exquisite
        beachfront dining experiences that tickle your taste buds with a symphony of
        flavors, or simply unwind by the beachside bonfire, sharing stories under the 
        starry expanse. Every night is an invitation to embrace
        the beauty of the Maldives, creating memories that illuminate your heart long 
        after your journey ends.</p>
        </div></div>
      </div>

      <div className={styles.knowMore}>
      <button className={styles.but}>Know More</button>
      </div>


      <div className={styles.message}>
      <p><b>Book your slice of paradise today and experience the Maldives like never before.</b></p>
      </div>



      <div className={styles.footerOuterDiv}>
        <div className={styles.footerContent}>
        <div className={styles.footerLinksCaption}>
        Designed and developed by Rishik Reddy, Rishik Tech © 2025
        </div>
        </div>
        <div className={styles.footerContent}>
        <div className={styles.footerLinks}>About Us</div><div className={styles.footerLinks}>Coustmer Care</div><div className={styles.footerLinks}>License</div>
        </div>
        <div className={styles.footerContent}>
        <div className={styles.footerLinks}>News</div><div className={styles.footerLinks}>Privacy Policy</div><div className={styles.footerLinks}>Terms & Conditions</div>
        </div>
        <div className={styles.footerContentIcons}>
        <div className={styles.footerIcons}><Link href="mailto:malerishikreddy@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="2x" color="white"/></Link></div>
        <div className={styles.footerIcons}><Link href="https://github.com/MRishikReddy" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" color="white"/></Link></div>
        <div className={styles.footerIcons}><Link  href="https://www.linkedin.com/in/rishikreddym/" target="_blank"><FontAwesomeIcon icon={faLinkedin}  size="2x" color="white"/></Link ></div>
        <div className={styles.footerIcons}><Link  href="https://www.instagram.com/rishikreddy7?igsh=MWdxdTRlMW95bWYwcg==" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" color="white"/></Link ></div>
        <div className={styles.footerIcons}><Link  href="https://www.facebook.com/share/1A6jkumtxw/" target="_blank"><FontAwesomeIcon icon={faFacebookSquare}  size="2x" color="white"/> </Link ></div>
        </div>
      </div>
     
    </>
  );
}
