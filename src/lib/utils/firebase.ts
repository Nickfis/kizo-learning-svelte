// src/lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, getDocs, collection } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCyCL69qxniulxkJgDAKBzp4ly0gJZ5efU',
	authDomain: 'kizo-learning.firebaseapp.com',
	projectId: 'kizo-learning',
	storageBucket: 'kizo-learning.appspot.com',
	messagingSenderId: '521022523639',
	appId: '1:521022523639:web:905b29b993a27d4e49abf2',
	measurementId: 'G-TRCK0WC9NS'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, addDoc, collection, getDocs };
