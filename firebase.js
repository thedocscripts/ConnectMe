import {initializeApp, applicationDefault, cert, getApps} from 'firebase-admin/app'
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';


if (getApps().length === 0) {
    initializeApp({credential: cert({
        projectId: process.env.PROYECT_ID ? process.env.PROYECT_ID.replace(/\\n/gm, "\n") : undefined,
         clientEmail: process.env.CLIENT_EMAIL ? process.env.CLIENT_EMAIL.replace(/\\n/gm, "\n") : undefined,
         privateKey: process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY  .replace(/\\n/gm, "\n") : undefined,
       })});
  }

 
const db = getFirestore();


export default db;