// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdMl48n0Dea2z2VUkZB0b-vLd1HoGH2MM",
  authDomain: "midlock-5bcc3.firebaseapp.com",
  databaseURL: "https://midlock-5bcc3-default-rtdb.firebaseio.com",
  projectId: "midlock-5bcc3",
  storageBucket: "midlock-5bcc3.appspot.com",
  messagingSenderId: "835789461317",
  appId: "1:835789461317:web:7f65f966ad2cca2954d02c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
export default {
  auth,
  database,
  storage
};