import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyI2Xvkp6u9fO7T-vsgJLrA8O8A8Y6MS4",
  authDomain: "sillytavern-storage.firebaseapp.com",
  projectId: "sillytavern-storage",
  storageBucket: "sillytavern-storage.appspot.com",
  messagingSenderId: "65875903165",
  appId: "1:65875903165:web:2745f919ee4c86a01c6dd4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
