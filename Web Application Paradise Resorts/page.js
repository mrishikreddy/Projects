import styles from "./wa.module.css";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <video autoPlay loop muted playsInline className={styles.videoBackground}>
        <source src="/beach.mp4" type="video/mp4" />
      </video>
      
      <div className={styles.formWrapper}>
        <form action="/webApp/home" className={styles.form} method="POST">
          <div className={styles.inputContainer}>
            <input className={styles.inputField} type="email" placeholder="Email" name="usrnm" required />
          </div>
          
          <div className={styles.inputContainer}>
            <input className={styles.inputField} type="password" placeholder="Password" name="psw" required />
          </div>
          
          <button type="submit" className={styles.btn}>Login</button>
          
          <div className={styles.links}>
            <Link href="/forgot-password">Forgot password?</Link>
            <p>
              Don't have an account? <Link href="/signup" className={styles.signup}><b>Sign up</b></Link> now.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}