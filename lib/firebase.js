// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxPXyATRbs2ngRkh_AunQMx3d2vxEVFQA",
  authDomain: "conuhacks-vii.firebaseapp.com",
  projectId: "conuhacks-vii",
  storageBucket: "conuhacks-vii.appspot.com",
  messagingSenderId: "684243279929",
  appId: "1:684243279929:web:e804e864377cf6b47d2de8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
