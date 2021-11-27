import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCeWiI8JVyEDAmRfWmpo7scrroYTBYQ0Ic",
    authDomain: "ayaan-cboster.firebaseapp.com",
    databaseURL: "https://ayaan-cboster-default-rtdb.firebaseio.com",
    projectId: "ayaan-cboster",
    storageBucket: "ayaan-cboster.appspot.com",
    messagingSenderId: "347637864713",
    appId: "1:347637864713:web:57f27b6aef0c2ba0671bd8"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase.database();