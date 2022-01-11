import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC3iVQ_Xoo70wGHBHrCAbWpxgj4zAoG2CY",
    authDomain: "image-repo-9fe82.firebaseapp.com",
    projectId: "image-repo-9fe82",
    storageBucket: "image-repo-9fe82.appspot.com",
    messagingSenderId: "1077112072128",
    appId: "1:1077112072128:web:e7e03959ec22701e250a25"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const database = getFirestore(firebaseApp);

export { storage, database };
