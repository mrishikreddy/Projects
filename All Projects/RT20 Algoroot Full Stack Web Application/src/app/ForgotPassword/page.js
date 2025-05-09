"use client";

import { useState } from "react";
import styles from "./fp.module.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsSending(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ If your Account exists you get a Mail, Check your inbox.");
    } catch (err) {
      setError("❌ " + err.message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2>Reset Your Password</h2>
        {message && <p className={styles.success}>{message}</p>}
        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handlePasswordReset} className={styles.form}>
          <div className={styles.inputOuterDiv}>
            <div className={styles.inputContainer}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.inputField}
              />
            </div>
          </div>

          <button type="submit" className={styles.btn} disabled={isSending}>
            {isSending ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className={styles.links}>
          Remembered your password? <Link href="/SignIn" className={styles.signup}>Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
