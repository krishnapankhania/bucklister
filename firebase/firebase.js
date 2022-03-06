import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

class FirebaseUtils {
  constructor() {
    this.app = initializeApp(clientCredentials);
    this.auth = getAuth();
    this.provider = new GoogleAuthProvider();
    this.db = getFirestore();
    this.provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  }
  getAuth() {
    return this.auth;
  }
  getDb() {
    return this.db;
  }
  getApp() {
    return this.app;
  }
  signInWithGoogle = () => {
    return new Promise((res, rej) => {
      signInWithPopup(this.auth, this.provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          res(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          rej({ errorCode, errorMessage, email, credential });
        });
    });
  };
  signOut() {
    return new Promise((res, rej) => {
      signOut(this.auth)
        .then(() => {
          res(true);
        })
        .catch((error) => {
          res(false);
        });
    });
  }
}
export default new FirebaseUtils();
