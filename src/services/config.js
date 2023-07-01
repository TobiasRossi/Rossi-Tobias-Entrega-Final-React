import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "la--llama--loca.firebaseapp.com",
  projectId: "la--llama--loca",
  storageBucket: "la--llama--loca.appspot.com",
  messagingSenderId: "1030782970457",
  appId: "1:1030782970457:web:389113d60e71b58eb91f48"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)