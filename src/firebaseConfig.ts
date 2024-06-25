import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDuRw856vQxm9g50va41TCJ6FvbOziGj0o",
  authDomain: "controledefinancas-bc4a1.firebaseapp.com",
  projectId: "controledefinancas-bc4a1",
  storageBucket: "controledefinancas-bc4a1.appspot.com",
  messagingSenderId: "666429283639",
  appId: "1:666429283639:web:189610bad1a81f9f4a8eb2",
  measurementId: "G-ELKMGKFLN2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore: Firestore = getFirestore(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleAuthProvider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback: (user: User | null) => void) => onAuthStateChanged(auth, callback);