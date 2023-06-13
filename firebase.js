import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCg1zKzKrZGGdexeN3lE6ZhIkMbF0VaJM8",
    authDomain: "scrimba-proj-react-notes.firebaseapp.com",
    projectId: "scrimba-proj-react-notes",
    storageBucket: "scrimba-proj-react-notes.appspot.com",
    messagingSenderId: "220780408680",
    appId: "1:220780408680:web:1615351cb3f27fc375b0dd"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")


