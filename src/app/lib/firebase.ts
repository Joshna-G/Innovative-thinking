
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCPxA-xnUPgxVystOHBayVJzCC4AK4Ni38",
  authDomain: "love-site-fade9.firebaseapp.com",
  projectId: "love-site-fade9",
  storageBucket: "love-site-fade9.firebasestorage.app",
  messagingSenderId: "233699224056",
  appId: "1:233699224056:web:1d94a86b055bad88bd8e0d",
  measurementId: "G-T8BQDL468E"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);