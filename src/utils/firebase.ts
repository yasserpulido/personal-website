import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBVjwe2QB0y-WcQAu0-5a9IY8CTHdTiU90",
  authDomain: "yasser-pulido-personal-website.firebaseapp.com",
  projectId: "yasser-pulido-personal-website",
  storageBucket: "yasser-pulido-personal-website.appspot.com",
  messagingSenderId: "817180800097",
  appId: "1:817180800097:web:f61ef96bc10c91a4bde620",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };
