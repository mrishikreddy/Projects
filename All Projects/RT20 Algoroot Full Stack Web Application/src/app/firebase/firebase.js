import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey : process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AD,
  projectId: process.env.NEXT_PUBLIC_PI,
  storageBucket: process.env.NEXT_PUBLIC_SB,
  messagingSenderId: process.env.NEXT_PUBLIC_MSI,
  appId: process.env.NEXT_PUBLIC_AI,
  measurementId: process.env.NEXT_PUBLIC_MI
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };