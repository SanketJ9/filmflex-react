import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNq3UsmGfk_VxhbcEBoRSiUkHS_M6Fzf8",
    authDomain: "filmflex-react.firebaseapp.com",
    projectId: "filmflex-react",
    storageBucket: "filmflex-react.appspot.com",
    messagingSenderId: "425660268263",
    appId: "1:425660268263:web:f28ba84915a15ad692ac42"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;