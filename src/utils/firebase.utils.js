import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBbV4dVo-zzfOFTPUTvXnJy2cPARVaTdRs",
    authDomain: "crwn-store-73c50.firebaseapp.com",
    projectId: "crwn-store-73c50",
    storageBucket: "crwn-store-73c50.appspot.com",
    messagingSenderId: "160015441039",
    appId: "1:160015441039:web:9820a0665e3f2cc452e4fa"
  };

firebase.initializeApp(config);  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
