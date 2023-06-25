// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADwtKeiyNnSxrki4exyP3LS7vD-i3zBEs",
  authDomain: "thinhdeptrai-bb5b5.firebaseapp.com",
  databaseURL: "https://thinhdeptrai-bb5b5-default-rtdb.firebaseio.com",
  projectId: "thinhdeptrai-bb5b5",
  storageBucket: "thinhdeptrai-bb5b5.appspot.com",
  messagingSenderId: "249554489505",
  appId: "1:249554489505:web:7af8dbdfd3bd9750f9e0e0",
  measurementId: "G-GF36RMRLSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
