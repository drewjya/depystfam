importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const channel = new BroadcastChannel("sw-messages");

const firebaseConfig = {
  apiKey: "AIzaSyBtZHHK7EN03FHb2su1Pc8mgZX8jK1dK0M",
  appId: "1:337493064108:web:dae354cf1acc7af2fc6209",
  messagingSenderId: "337493064108",
  projectId: "ystfamily-prod",
  authDomain: "ystfamily-prod.firebaseapp.com",
  storageBucket: "ystfamily-prod.appspot.com",
  measurementId: "G-R46DNJ85KR",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
  console.log("Received background message ", message);
});
