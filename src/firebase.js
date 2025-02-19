import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
apiKey: "AIzaSyCev5ZzSIDw4RBP5yDxykstJRrQ0wODyvU",
authDomain: "afribitev2.firebaseapp.com",
projectId: "afribitev2",
storageBucket: "afribitev2.firebasestorage.app",
messagingSenderId: "278799664311",
appId: "1:278799664311:web:9c617b2c6a03f23b1cf932",
measurementId: "G-ERFRW7DTP2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const ImageDb = getStorage(app);

export { db };
export { ImageDb };
