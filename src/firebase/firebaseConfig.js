// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChFxNq6R9ghnxvmvmeV3RuJZrUjjj3Di4",
  authDomain: "data-nec.firebaseapp.com",
  databaseURL: "https://data-nec-default-rtdb.firebaseio.com",
  projectId: "data-nec",
  storageBucket: "data-nec.appspot.com",
  messagingSenderId: "774851739276",
  appId: "1:774851739276:web:3578f80ccd4550a6d845a9",
  measurementId: "G-KPL4ZBFGFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;