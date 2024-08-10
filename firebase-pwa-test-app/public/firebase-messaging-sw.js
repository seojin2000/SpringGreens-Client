importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBrSj3s4aMfy5Vd2CTVNtkGrOoBQjTz4qs",
    authDomain: "springgreens-afe09.firebaseapp.com",
    projectId: "springgreens-afe09",
    storageBucket: "springgreens-afe09.appspot.com",
    messagingSenderId: "368919350125",
    appId: "1:368919350125:web:b0ed55f39f8a67a00c2864",
    measurementId: "G-VJ3KHGSJ3E"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);
  const { title = 'Default Title', body = 'Default Body' } = payload.notification || {};
  const notificationOptions = {
    body: body,
    icon: '/icon.png'
  };

  self.registration.showNotification(title, notificationOptions);
});