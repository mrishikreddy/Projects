// src/app/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // ✅ You missed this

const firebaseConfig = {
 /* Code hidden for security purposes */
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Get the Realtime Database instance
const database = getDatabase(app);

// ✅ Export it
export { database };
