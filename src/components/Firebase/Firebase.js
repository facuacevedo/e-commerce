//importamos archivos necesarios
import firebase from 'firebase/app';
import 'firebase/firestore' ;

//data
var firebaseConfig = {
    apiKey: "AIzaSyCjWCZMpOXjdCbi7v-bacFyKvJmEiZrjPQ",
    authDomain: "proyecto-e-commerce-8e57c.firebaseapp.com",
    projectId: "proyecto-e-commerce-8e57c",
    storageBucket: "proyecto-e-commerce-8e57c.appspot.com",
    messagingSenderId: "316876165111",
    appId: "1:316876165111:web:e0551f326389347d2ea8f2"
};

const fb = firebase.initializeApp(firebaseConfig);
//disponible para todos

export const dataBase = fb.firestore();
