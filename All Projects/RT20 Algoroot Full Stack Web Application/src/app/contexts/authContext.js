"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth"; 

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      console.error("Firebase Auth is not initialized properly");
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);

        
        const isEmail = user.providerData.some(
          (provider) => provider.providerId === "password"
        );
        setIsEmailUser(isEmail);

        setUserLoggedIn(true);
      } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    userLoggedIn,
    isEmailUser,
    currentUser,
    setCurrentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
