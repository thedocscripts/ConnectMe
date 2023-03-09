import {initializeApp, applicationDefault, cert, getApps} from 'firebase/app'
import { getFirestore, Timestamp, FieldValue,  } from 'firebase/firestore';

var serviceAccount = require("@/public/connectme.json");

var firebaseapp;

if(!getApps().length){
  firebaseapp = initializeApp(serviceAccount)
}

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore();

// if (!getApps().length) {
//   firebaseApp = initializeApp({credential: cert({
//         projectId: process.env.PROYECT_ID ? process.env.PROYECT_ID.replace(/\\n/gm, "\n") : undefined,
//          clientEmail: process.env.CLIENT_EMAIL ? process.env.CLIENT_EMAIL.replace(/\\n/gm, "\n") : undefined,
//          privateKey: process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY  .replace(/\\n/gm, "\n") : undefined,
//        })});
       
//   }




export { db }
