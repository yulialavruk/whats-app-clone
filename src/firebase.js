import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA0dwVbvGA1doujyzZySNdZ4IhI_TpQ2Tw",
  authDomain: "whats-app-clone-b5726.firebaseapp.com",
  projectId: "whats-app-clone-b5726",
  storageBucket: "whats-app-clone-b5726.appspot.com",
  messagingSenderId: "757039011579",
  appId: "1:757039011579:web:72c20f09033b767673025e",
  measurementId: "G-C3QH20YPJK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
