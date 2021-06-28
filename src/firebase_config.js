import firebase from "firebase/app";

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

export { firestore };
