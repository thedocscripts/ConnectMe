import {initializeApp, applicationDefault, cert, getApps} from 'firebase/app'
import { getFirestore, Timestamp, FieldValue, getDocs, collection,  } from 'firebase/firestore';

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

async function  getallusers(){
  const querySnapshot = await getDocs(collection(db, "users"));
  var users = []
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          
          users.push(doc.data())
        });
        return users
}


async function  getuser(user){
  const querySnapshot = await getDocs(collection(db, "users"));
  
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          if(user == doc.data().email){
            return doc.data()
          }
          
        });
        return null
}


export { db, getallusers, getuser }
