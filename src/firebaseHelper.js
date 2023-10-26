import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvI2EjYlql52x1QppGczO-rn2D0GquMIw",
  authDomain: "exibition-software.firebaseapp.com",
  projectId: "exibition-software",
  storageBucket: "exibition-software.appspot.com",
  messagingSenderId: "27234944133",
  appId: "1:27234944133:web:c2dcf6753c16db7c0555ec"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()