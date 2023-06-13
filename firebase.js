// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg1zKzKrZGGdexeN3lE6ZhIkMbF0VaJM8",
  authDomain: "scrimba-proj-react-notes.firebaseapp.com",
  projectId: "scrimba-proj-react-notes",
  storageBucket: "scrimba-proj-react-notes.appspot.com",
  messagingSenderId: "220780408680",
  appId: "1:220780408680:web:1615351cb3f27fc375b0dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const noteCollection = db.collection(db, 'notes')