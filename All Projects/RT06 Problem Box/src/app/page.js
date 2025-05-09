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
      <div> 
        <div onClick={() => router.push("https://rishik.tech")}>Rishik Tech</div>
        <div className={styles.title}>Problem Box</div>
      </div> 

      {isSubmitted ? (
        <div role="alert">
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: "rgb(17, 255, 0)", fontSize: "2rem", marginRight: "10px" }} />
          <p>Thank you! Your problem has been submitted.</p>
          <button className={styles.submitButton} onClick={resetForm}>
            Submit another problem
          </button>
        </div>
      ) : (
        <>
          <div className={styles.InfoDiv}>
            <h3 style={{ fontFamily: "Poppins, sans-serif" }}>Hello, I’m Rishik Reddy</h3>
            <p>As a passionate Software Developer, I’m always eager to learn, innovate, and build software solutions for real-world challenges. I believe that every problem is a gateway to a new solution.
            If you have a daily life problem - big or small, share it here. I’ll explore ways to create a real-time software solution to help solve it.
            Every challenge is a spark for innovation - share yours below, and let’s create something amazing.</p>
          </div>

          <div>
            <form >
              <input type="text" name="name" placeholder="Your Name (optional)" value={formData.name} onChange={handleChange} />
              <input type="email" name="email" placeholder="Your Email (optional)" value={formData.email} onChange={handleChange} />
              <textarea name="problem" placeholder="Describe your problem..." value={formData.problem} onChange={handleChange} required></textarea>
              <button type="submit" className={styles.submitButton} disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>

            {error && <div className={styles.error} role="alert">{error}</div>}
          </div>
        </>
      )}

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
