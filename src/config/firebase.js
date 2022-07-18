import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtfgd96ll2DuV9zNVtVMlYfIJo5CrUmUY",
  authDomain: "todolist-8bbe3.firebaseapp.com",
  projectId: "todolist-8bbe3",
  storageBucket: "todolist-8bbe3.appspot.com",
  messagingSenderId: "12662297608",
  appId: "1:12662297608:web:0085cf9621bd546e966dbd",
  measurementId: "G-XY9ZZL56HD"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth} ;