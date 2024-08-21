import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase, ref, push, onValue } from 'firebase/database';

const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
  // measurementId: process.env.FIREBASE_MEASUREMENT_ID

  apiKey: "AIzaSyBgmEaaxnCZDj2r9vmZ-Be87IY4aitYP_s",
  authDomain: "chatapp-3b8a7.firebaseapp.com",
  projectId: "chatapp-3b8a7",
  storageBucket: "chatapp-3b8a7.appspot.com",
  messagingSenderId: "33795396590",
  appId: "1:33795396590:web:6a47a4328260bd8b35f4ff",
  measurementId: "G-D3JG5YFF6Q",
  databaseURL: "https://chatapp-3b8a7-default-rtdb.asia-southeast1.firebasedatabase.app" 
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}
// let app = getApp();
const database = getDatabase(app);

export { app, database, ref, push, onValue };
