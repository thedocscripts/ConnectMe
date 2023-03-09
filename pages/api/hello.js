
import { db } from "@/firebase";

import { getDocs, collection, doc } from "firebase/firestore";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction




export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    
    res.send("hello")
  } else{
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    res.send("hl")


  }
}





