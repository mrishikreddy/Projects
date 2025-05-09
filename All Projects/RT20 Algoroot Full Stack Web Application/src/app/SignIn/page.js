"use client";

import styles from "./signin.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { doSignInWithEmailAndPassword } from "../firebase/Auth";
import { getAuth, signOut } from "firebase/auth";

const Login = () => {
  const router = useRouter();
  const auth = getAuth(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (isSigningIn) return;

    setIsSigningIn(true);
    try {
      const userCredential = await doSignInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        setErrorMessage("❌ Please verify your email before logging in.");
        await signOut(auth); 
        setIsSigningIn(false);
        return;
      }

      router.push("/");
    } catch (error) {
      setErrorMessage("❌ " + error.message);
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h3>Login</h3>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.inputOuterDiv}>
            <div className={styles.inputContainer}>
              <input
                className={styles.inputField}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
            <div className={styles.iconDiv}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            </div>
          </div>

   
          <div className={styles.inputOuterDiv}>
            <div className={styles.inputContainer}>
              <input
                className={styles.inputField}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>
            <div className={styles.iconDiv} onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className={styles.icon} />
            </div>
          </div>

          <button type="submit" className={styles.btn} disabled={isSigningIn}>
            {isSigningIn ? "Signing In..." : "Login"}
          </button>
        </form>

        <div className={styles.links}>
          <Link href="/ForgotPassword">Forgot password?</Link>
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/SignUp" className={styles.signup}><b>Sign up</b></Link> now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
