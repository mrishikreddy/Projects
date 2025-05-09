"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/authContext";
import { doCreateUserWithEmailAndPassword, doSendEmailVerification } from "../firebase/Auth";
import styles from "./signup.module.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { userLoggedIn } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      setIsRegistering(true);
      const userCredential = await doCreateUserWithEmailAndPassword(email, password);
      const user = userCredential.user;


      await doSendEmailVerification(user);
      setSuccessMessage(
        "✅ Account created! Please verify your email before logging in. "
      );


      setTimeout(() => {
        router.push("/SignIn");
      }, 7000);
    } catch (error) {
      setErrorMessage("❌ " + error.message);
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h4>Sign Up</h4>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        {successMessage && (
          <p className={styles.success}>
            {successMessage} <a href="/SignIn">Go to Login</a>
          </p>
        )}
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.inputOuterDiv}>
            <div className={styles.inputContainer}>
              <input
                className={styles.inputField}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
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
                required
              />
            </div>
            <div className={styles.iconDiv} onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className={styles.icon} />
            </div>
          </div>

          
          <div className={styles.inputOuterDiv}>
            <div className={styles.inputContainer}>
              <input
                className={styles.inputField}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.iconDiv} onClick={toggleConfirmPasswordVisibility}>
              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className={styles.icon} />
            </div>
          </div>

          <button type="submit" className={styles.btn} disabled={isRegistering}>
            {isRegistering ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
