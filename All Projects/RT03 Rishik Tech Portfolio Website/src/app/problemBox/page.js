"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./ProblemBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function ProblemBox() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", problem: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/problemBox", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError(data.error || "Failed to send. Try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", problem: "" });
    setIsSubmitted(false);
    setError("");
  };

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <div className={styles.navbar}> 
        <div className={styles.RT} onClick={() => router.push("https://rishik.tech")}>Rishik Tech</div>
        <div className={styles.title}>Problem Box</div>
      </div> 

      {/* Submission Success Message */}
      {isSubmitted ? (
        <div className={styles.successMessage} role="alert">
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: "rgb(17, 255, 0)", fontSize: "2rem", marginRight: "10px" }} />
          <p>Thank you! Your problem has been submitted.</p>
          <button className={styles.submitButton} onClick={resetForm}>
            Submit another problem
          </button>
        </div>
      ) : (
        <>
        {/* Portions of the code are hidden for security and copyright protection. Please contact me for full access. */}
        </>
      )}

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.footerOuterDiv}>
          <div className={styles.links}>
            <a href="https://www.rishik.tech/about" target="_blank" rel="noopener noreferrer">About Me</a>
            <a href="https://rishik.tech" target="_blank" rel="noopener noreferrer">Portfolio</a>
            <a href="https://github.com/MRishikReddy" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/rishikreddym/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:malerishikreddy@gmail.com">Contact Me</a>
          </div>
          <div>
            <p>© 2025 Rishik Tech. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
