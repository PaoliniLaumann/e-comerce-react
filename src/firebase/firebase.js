// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEphCN_p5K4_FGAB4fqsS-yXnB_-FFK6c",
  authDomain: "e-comerce-react-763d2.firebaseapp.com",
  projectId: "e-comerce-react-763d2",
  storageBucket: "e-comerce-react-763d2.appspot.com",
  messagingSenderId: "962696483818",
  appId: "1:962696483818:web:da35e6dc6459b4d8229893"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)