import { useState } from "react";
import styles from "./css/contact.module.css";

export default function Contact({ darkMode }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false); // NEW state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true); // Start "Submitting..."

    try {
      const response = await fetch("/api/mailSender", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setIsSubmitted(false);
          setSubmitting(false);
        }, 5000);
      } else {
        setError("Failed to send message. Please try again.");
        setSubmitting(false);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className={`${styles.extremeOuterDiv} ${darkMode ? styles.dark : styles.light}`}
    >
      <div
        className={`${styles.sectionTitle} ${
          darkMode ? styles.darkTitle : styles.lightTitle
        }`}
      >
        Contact
      </div>
      <div className={styles.outerDiv}>
        {isSubmitted ? (
          <div className={styles.thankYouMessage}>Thank you!</div>
        ) : (
          <form>
            
          {/* Code is  partially hidden for security and copyright protection. Contact Me for full code.*/}
            
            <br />
          
          </form>
        )}
        {error && (
          <div
            className={`${styles.errorMessage} ${
              darkMode ? styles.dark : styles.light
            }`}
          >
            {error}
            <button onClick={() => setError("")}>
              <div style={{ cursor: "pointer" }}>&times;</div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
