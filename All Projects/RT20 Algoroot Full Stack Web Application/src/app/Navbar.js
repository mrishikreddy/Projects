"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import { useAuth } from "./contexts/authContext"; 
import { doSignOut } from "./firebase/Auth"; 
import { deleteUser } from "firebase/auth"; 
import { useRouter } from "next/navigation"; 

export default function Navbar() {
  const { currentUser, userLoggedIn } = useAuth(); 
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter(); 
  const handleLogoClick = () => {
    router.push("/home"); 
  };

  const handleLogout = async () => {
    try {
      await doSignOut();
      setMenuOpen(false);
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  const handleDeleteAccount = async () => {
    if (!currentUser) return;

    try {
      await deleteUser(currentUser); 
      localStorage.clear(); 
      setMenuOpen(false);
    } catch (error) {
      console.error("Delete Account Error:", error.message);
      alert("Error deleting account. Please re-authenticate and try again.");
    }
  };

  return (
    <div className={styles.navOuterDiv}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
         
          <div className={styles.logo} onClick={handleLogoClick}>
            {/* <img src="/logo.png" alt="Logo" className={styles.logoImg} /> */}

            <Image src="/logo.png" alt="Logo" width={50} height={50} className={styles.logoImg} />

            <span className={styles.logoText}>Algo Root</span>
          </div>

          
          <div className={styles.actions}>
            {userLoggedIn ? (
              <div className={styles.userMenu}>
                <div
                  className={styles.userIcon}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  👤
                </div>
                {menuOpen && (
                <div className={styles.dropdown}>
                  <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>✖</button>
                  <p><b>{currentUser?.displayName || "User"}</b></p>
                  <p>{currentUser?.email}</p>
                  <button onClick={handleLogout} className={styles.dropdownBtn}>
                  Logout
                  </button>
                  <button onClick={handleDeleteAccount} className={styles.deleteBtn}>
                  Delete Account
                  </button>
                  </div>
                )}

              </div>
            ) : (
              <>
                <Link href="/SignIn" className={styles.link}>
                  Login
                </Link>
                <Link href="/SignUp" className={styles.link}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
