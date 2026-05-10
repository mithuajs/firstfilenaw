// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPyYVTtaDa6d59Uo9bJ1f3b_hQbvjjJQI",
  authDomain: "student-system-be0cc.firebaseapp.com",
  projectId: "student-system-be0cc",
  storageBucket: "student-system-be0cc.firebasestorage.app",
  messagingSenderId: "23839347170",
  appId: "1:23839347170:web:51e3fff3ec834594ca29bb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);