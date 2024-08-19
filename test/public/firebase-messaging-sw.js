// Import Firebase and Firebase Messaging

importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js');


firebase.initializeApp({
  apiKey: "AIzaSyBrSj3s4aMfy5Vd2CTVNtkGrOoBQjTz4qs",
  authDomain: "springgreens-afe09.firebaseapp.com",
  projectId: "springgreens-afe09",
  storageBucket: "springgreens-afe09.appspot.com",
  messagingSenderId: "368919350125",
  appId: "1:368919350125:web:b0ed55f39f8a67a00c2864",
  measurementId: "G-VJ3KHGSJ3E"
});


// firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Set up background message handler
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification?.title || 'Default Title';
  const notificationOptions = {
    body: payload.notification?.body || 'Default body.',
    icon: payload.notification?.icon || '/images/icons/icon-192-maskable.png',
    image: payload.notification?.image || '/images/default-image.png' // 이미지가 필요한 경우
  };


  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

