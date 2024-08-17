// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkNq6F6BPWcMzf8qV3m6PNNEqYZ4uoANM",
  authDomain: "scicfu.firebaseapp.com",
  projectId: "scicfu",
  storageBucket: "scicfu.appspot.com",
  messagingSenderId: "58180745234",
  appId: "1:58180745234:web:4acfad9f060f3ebc6f80cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;