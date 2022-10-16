import firebase from "firebase"
require("@firebase/firestore")
const firebaseConfig = {
  apiKey: "AIzaSyDt5CH9DPVS4wfHwuD25fwd9kF0qbLUG0c",
  authDomain: "e-ride-stage-4-f6b34.firebaseapp.com",
  projectId: "e-ride-stage-4-f6b34",
  storageBucket: "e-ride-stage-4-f6b34.appspot.com",
  messagingSenderId: "890913667038",
  appId: "1:890913667038:web:419624f9d8086571dd8f4f"
};

firebase.initializeApp(firebaseConfig)
export default firebase.firestore();
