import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA0Ad_CX1oqnYkz1iei7SunRIOlkb6cZWI",
    authDomain: "project-ex-c30a1.firebaseapp.com",
    projectId: "project-ex-c30a1",
    storageBucket: "project-ex-c30a1.appspot.com",
    messagingSenderId: "392043775193",
    appId: "1:392043775193:web:c99b36b7e3a039be0b2ac8",
    measurementId: "G-3TBBPFFHNH"
}


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export{app,auth};