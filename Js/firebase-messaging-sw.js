import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";
const firebaseApp = initializeApp({
apiKey: "AIzaSyDxxd0l2bvcFIPXG1lpBWFfU5qYNxV8T9Q",
authDomain: "misitio-1e4ba.firebaseapp.com",
projectId: "misitio-1e4ba",
storageBucket: "misitio-1e4ba.appspot.com",
messagingSenderId: "195481904303",
appId: "1:195481904303:web:e7ec6451c9e8c98df4605a",
measurementId: "G-6BT3VYJF3D"
});
const messaging = getMessaging(firebaseApp);
onBackgroundMessage(messaging, (payload) => {
console.log('[firebase-messaging-sw.js] Received background message ', payload);
// Customize notification here
const notificationTitle = 'Background Message Title';
const notificationOptions = {
    body: 'Background Message body.',
    icon: '../img/icon-512x512.png'
};
return self.registration.showNotification(notificationTitle,
    notificationOptions);
})