import firebase from "firebase"
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD87J_stiVZKOrjej_5rlZtTwfmPgNP7FU",
  authDomain: "linkedin-clone-def29.firebaseapp.com",
  projectId: "linkedin-clone-def29",
  storageBucket: "linkedin-clone-def29.appspot.com",
  messagingSenderId: "225434714651",
  appId: "1:225434714651:web:07867299105aaecf476ebe"
};

//This special line of code here connects everything 
const firebaseApp = firebase.initializeApp(firebaseConfig);

//gets the firestore database
const db = firebaseApp.firestore();


export { db };
