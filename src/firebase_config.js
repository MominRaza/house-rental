import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqJ-H3NokIlduGW6KgrszrteTuJi8S4QE",
  authDomain: "house-rental-2d711.firebaseapp.com",
  projectId: "house-rental-2d711",
  storageBucket: "house-rental-2d711.appspot.com",
  messagingSenderId: "703732108055",
  appId: "1:703732108055:web:4d40f536e511e631d9c552",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export { firestore, storage, auth };
