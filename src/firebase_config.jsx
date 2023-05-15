// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCpPMp2EHEDzeEzmCfyONZHCHGzhnySX6Y",
  authDomain: "http://cubik-c9f28.firebaseapp.com",
  projectId: "cubik-c9f28",
  storageBucket: "http://cubik-c9f28.appspot.com",
  messagingSenderId: "398555511067",
  appId: "1:398555511067:web:291cc0d9403fdf395abbbe",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore(app);