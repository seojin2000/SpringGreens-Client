// firebaseinitialize.js
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

// Firebase configuration object (from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyBrSj3s4aMfy5Vd2CTVNtkGrOoBQjTz4qs",
  authDomain: "springgreens-afe09.firebaseapp.com",
  projectId: "springgreens-afe09",
  storageBucket: "springgreens-afe09.appspot.com",
  messagingSenderId: "368919350125",
  appId: "1:368919350125:web:b0ed55f39f8a67a00c2864",
  measurementId: "G-VJ3KHGSJ3E"
};
// Check if we are in the browser environment
let messaging = null;
if (typeof window !== 'undefined') {
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  messaging = getMessaging(app);
}


export { messaging };