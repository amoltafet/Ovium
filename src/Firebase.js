import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
        apiKey: "AIzaSyC2Q7qFGnrIBQ2ekRuQImxdDQz3slzxEao",
        authDomain: "omi-app-94406.firebaseapp.com",
        databaseURL: "https://omi-app-94406-default-rtdb.firebaseio.com",
        projectId: "omi-app-94406",
        storageBucket: "omi-app-94406.appspot.com",
        messagingSenderId: "907664852389",
        appId: "1:907664852389:web:1c373080b2394fd33a144c",
        measurementId: "G-MHV1CTKH93",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };
    
