"use client";
import styles from "./wa.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/webApp/home");
  };

  return (
    <div className={styles.container}>
      <video autoPlay loop muted playsInline className={styles.videoBackground}>
        <source src="./beach.mp4" type="video/mp4" />
      </video>

      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.inputOuterDiv}>
            <div className={styles.inputContainer}>
              <input className={styles.inputField} type="email" placeholder="Email" name="usrnm" required />
            </div>
            <div className={styles.iconDiv}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            </div>
          </div>

          <div className={styles.inputOuterDiv}>
            <div className={styles.inputContainer}>
              <input className={styles.inputField} type="password" placeholder="Password" name="psw" required />
            </div>
            <div className={styles.iconDiv}>
              <FontAwesomeIcon icon={faKey} className={styles.icon} />
            </div>
          </div>

          <button type="submit" className={styles.btn}>Login</button>

          <div className={styles.links}>
            <Link href="/webApp/home">Forgot password?</Link>
            <p>
              Don't have an account?{" "}
              <Link href="/webApp/home" className={styles.signup}><b>Sign up</b></Link> now.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
