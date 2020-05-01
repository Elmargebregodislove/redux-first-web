
import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyCJgtcshP_b7phX_KOty9Jr7fsGlCJl3nw",
    authDomain: "iqmoney-e8f27.firebaseapp.com",
    databaseURL: "https://iqmoney-e8f27.firebaseio.com",
    projectId: "iqmoney-e8f27",
    storageBucket: "iqmoney-e8f27.appspot.com",
    messagingSenderId: "665530173261",
    appId: "1:665530173261:web:3ffbbc3564b0206e"
  };
  if (!firebase.apps.length) {
     // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
