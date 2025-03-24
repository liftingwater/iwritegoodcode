import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Fill these in, put the secrets into a secrets manager. 
const APIKEY = "";
const IWRITEGOODCODE = "";
const IWRITEGOODCODE_PROJECT_ID = "";
const SENDER_ID = "";
const APP_ID = "";

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: IWRITEGOODCODE + ".firebaseapp.com",
  projectId: IWRITEGOODCODE_PROJECT_ID,
  storageBucket: IWRITEGOODCODE + ".appspot.com",
  messagingSenderId: SENDER_ID,
  appId: APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);