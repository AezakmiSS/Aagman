// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQkwe3GLJo8l4Js9hh3N4MTFqMbKJDFwI",
  authDomain: "ticketlessentry-5ab04.firebaseapp.com",
  projectId: "ticketlessentry-5ab04",
  storageBucket: "ticketlessentry-5ab04.appspot.com",
  messagingSenderId: "74274237265",
  appId: "1:74274237265:web:206ad7b2556d5820ac0170",
  measurementId: "G-J944DYP1NR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const authentication=getAuth(app)