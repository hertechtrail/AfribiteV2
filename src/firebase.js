import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0bI6MDVa41A0gelA0tgws3x9019zn7b8",
  authDomain: "afribitehtt.firebaseapp.com",
  projectId: "afribitehtt",
  storageBucket: "afribitehtt.firebasestorage.app",
  messagingSenderId: "443749987659",
  appId: "1:443749987659:web:ab5d1fcf812e6337bca4ce",
  measurementId: "G-6T6GL0Z6L1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const ImageDb = getStorage(app);

export { db };
export { ImageDb };
