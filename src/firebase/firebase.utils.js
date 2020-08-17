import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD0styLsj4SAztAN18TvwyFtESneODCIX8",
  authDomain: "kepo-ecommerce-demo.firebaseapp.com",
  databaseURL: "https://kepo-ecommerce-demo.firebaseio.com",
  projectId: "kepo-ecommerce-demo",
  storageBucket: "kepo-ecommerce-demo.appspot.com",
  messagingSenderId: "265991580733",
  appId: "1:265991580733:web:50949f4be91a50fa2d8e54",
  measurementId: "G-ED21V5SEYR"
};

export const createUserProfilDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
