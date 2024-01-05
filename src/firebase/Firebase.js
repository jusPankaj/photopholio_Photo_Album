// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiBTBgA5DTPMnHcr0ve80rGLvTz4o9Wx8",
  authDomain: "photopholio-db330.firebaseapp.com",
  projectId: "photopholio-db330",
  storageBucket: "photopholio-db330.appspot.com",
  messagingSenderId: "571304929376",
  appId: "1:571304929376:web:8b368d1403b3373ec3fb05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export firestore database
// It will be imported into our app whenever we needed

export const db = getFirestore(app)