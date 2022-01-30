// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQYICV24yS1oC9S2jMWyQvbwjXfW9FmIU",
  authDomain: "digitalbeaconproject-b5f68.firebaseapp.com",
  databaseURL: "https://digitalbeaconproject-b5f68.firebaseio.com",
  projectId: "digitalbeaconproject-b5f68",
  storageBucket: "digitalbeaconproject-b5f68.appspot.com",
  messagingSenderId: "896686834679",
  appId: "1:896686834679:web:5a15ecde4801aa8125a4f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();