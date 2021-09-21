import firebase from "firebase/app";
import 'firebase/database'
var DB_CONFIG = {
  apiKey: "AIzaSyApODP75HfV80QD-CuZZulPDkJiJclBlCc",
  authDomain: "keepnotes-c0d21.firebaseapp.com",
  projectId: "keepnotes-c0d21",
  databaseURL: "https://keepnotes-c0d21-default-rtdb.firebaseio.com/",
  storageBucket: "keepnotes-c0d21.appspot.com",
  messagingSenderId: "201020091433",
  appId: "1:201020091433:web:e27a27a30207a0ad6bc038",
  measurementId: "G-MS0YJX59RW"
};
const firedb=firebase.initializeApp(DB_CONFIG);
export default firedb;
