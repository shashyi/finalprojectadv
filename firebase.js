import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhla2K2N6djPBDGjEV8m6HfyqMF1lZT14",
  authDomain: "adv-final-project-b8937.firebaseapp.com",
  projectId: "adv-final-project-b8937",
  storageBucket: "adv-final-project-b8937.appspot.com",
  messagingSenderId: "964300728139",
  appId: "1:964300728139:web:639e71cb776e4fca232ace",
  measurementId: "G-B45DMDL4EJ"
};

  const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };