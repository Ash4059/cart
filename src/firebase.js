import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_us3tCnO8OVnakxLqQbTsdZ3PyTok8ZI",
  authDomain: "cart-27b54.firebaseapp.com",
  projectId: "cart-27b54",
  storageBucket: "cart-27b54.appspot.com",
  messagingSenderId: "1011109195161",
  appId: "1:1011109195161:web:55dec68717e2d2e0d63708"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;