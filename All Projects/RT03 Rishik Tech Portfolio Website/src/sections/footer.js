// Import necessary dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faFacebook, faXTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import styles from "./css/footer.module.css";


export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <h4 >Quick Links</h4>
          <div className={styles.contentWrapper}>
            <a href="https://dev.to/rishikreddy" className={styles.link} target="_blank">Dev</a>
            <a href="/about" className={styles.link} target="_blank">About</a>
            <a href="https://drive.google.com/file/d/1LfjyjA3m7D2NXzGLc47e5sz26REtSYJ9/view?usp=sharing" className={styles.link} target="_blank">Resume</a>
            <a href="https://leetcode.com/u/Rishik_Reddy/" className={styles.link} target="_blank">Leetcode</a>
            
          </div>
        </div>

        <div className={styles.contactSection}>
          <h4 >Contact</h4>
          <div className={styles.contentWrapper}>
            <a href="mailto:malerishikreddy@gmail.com" className={styles.link} target="_blank">Email: malerishikreddy@gmail.com</a>
            <p className={styles.text}>Phone: +91 8186949881</p>
            <p className={styles.text}>Location: Nalgonda, Telangana, India.</p>
          </div>
        </div>

        <div className={styles.socialSection}>
          <h4 >Stay Connected</h4>
          <div className={styles.socialIcons}>
            <a href="mailto:malerishikreddy@gmail.com" className={styles.icon} target="_blank">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://www.linkedin.com/in/rishikreddym/" className={styles.icon} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/MRishikReddy" className={styles.icon} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/rishikreddy7?igsh=MWdxdTRlMW95bWYwcg==" className={styles.icon} target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/share/18gjL1EYgs/" className={styles.icon} target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://x.com/malerishikreddy" className={styles.icon} target="_blank">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.siteBuildInfo}>
          Desgined and developed by Rishik reddy
        </p>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          Rishik Tech &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}