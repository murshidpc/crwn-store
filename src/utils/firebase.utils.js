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

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
        console.log("error at creating user", error.message)
      }  
    }

    return userRef; 
  } 

  export const addCollectionAndDocuments = async (collectionName, collection) => {
    const collectionRef = firestore.collection(collectionName);
    
    const batch = firestore.batch();

    collection.forEach(obj => {
      let newDocRef = collectionRef.doc();
      batch.set( newDocRef, obj)
    })
   return await batch.commit()
  }

  export const convertCollectionToObject = (collections) => {
    const transformedCollectionObject = collections.docs.map(doc => {
      const {title, items} = doc.data();

      return{
        routeName : encodeURI(title.toLowerCase()),
        id : doc.id,
        title,
        items
      }
    })
    
    return transformedCollectionObject.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection
      return accumulator;
    },{})
  }


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
