const firebase = require("firebase");

require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDBgJJgVOXqh660Ky1UdjwSi6DceRVqAlQ",
  authDomain: "netflix-clone-45bad.firebaseapp.com",
  databaseURL: "https://netflix-clone-45bad.firebaseio.com",
  projectId: "netflix-clone-45bad",
  storageBucket: "netflix-clone-45bad.appspot.com",
  messagingSenderId: "674146608941",
  appId: "1:674146608941:web:1470572c07abb53be215a4",
  measurementId: "G-G3QEM0GWZ4",
};

const db = firebase.initializeApp(firebaseConfig);
export default db;
