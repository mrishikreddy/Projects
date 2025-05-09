import React, { useState, useRef, useEffect } from "react";
import styles from "./css/ai.module.css";

export default function Ai() {
  const [showAiBox, setShowAiBox] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleAiBox = () => {
    setShowAiBox(!showAiBox);
  };

  const handleSend = async () => {
    if (inputText.trim()) {
      const userMessage = { text: inputText, type: "user" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      const currentInput = inputText;
      setInputText(""); 
      setLoading(true);

      try {
        const res = await fetch("/api/aiEndPoint", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ rawText: currentInput }),
        });

        const data = await res.json();
        const aiMessage = { text: data.response, type: "ai" };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Error fetching AI response", type: "ai" },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); 
      handleSend();
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    {/* Code is hidden for security and copyright protection. Contact Me for full code.*/}
  );
}