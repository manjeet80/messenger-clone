import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOfdIj4gTz9LDwkZJCQkw2-ure1mBrjD0",
  authDomain: "messenger-clone-1276b.firebaseapp.com",
  projectId: "messenger-clone-1276b",
  storageBucket: "messenger-clone-1276b.appspot.com",
  messagingSenderId: "1062745274331",
  appId: "1:1062745274331:web:643104c23a7b86038059fe",
  measurementId: "G-SNMYYYYE3L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
