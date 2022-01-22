import { initializeApp } from "firebase/app";
import { getFirestore }   from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCeH2TOQs76cAaTAiimftP7yVfQ7En-UWo",
  authDomain: "rosario-snacks.firebaseapp.com",
  projectId: "rosario-snacks",
  storageBucket: "rosario-snacks.appspot.com",
  messagingSenderId: "59693276909",
  appId: "1:59693276909:web:5d59af68fd6d82c86436e4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);