import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBh_-VhkSr4sVL0j_G9XqLbGrfmC2wQLkA",
  authDomain: "weather-app-18f69.firebaseapp.com",
  projectId: "weather-app-18f69",
  storageBucket: "weather-app-18f69.appspot.com",
  messagingSenderId: "944927672968",
  appId: "1:944927672968:web:fe85e4cc2eb746f47f2d3d",
  measurementId: "G-5QM37CV93H",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
