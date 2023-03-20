"use client";
import { db, getuser } from "@/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useLayoutEffect, useState } from "react";

import { getuserdata } from "../components/utils/utils";


export default function WelcomeScreen() {
    var once = false;
  const { data, user } = useSession({ required: true });

  const [count, setCount] = useState(null);

  const saveNote = async (_email) => {
    const docRef = collection(db, "users");
    const q = query(
      docRef,
      collection(db, "users"),
      where("email", "==", _email)
    );
    var result;
    getDocs(q).then(async (snapshot) => {
      var userdata = snapshot.docs[0];
      
      if (userdata.data().welcomescreen) {
        setCount(true)
        return
      } else if (userdata.data().welcomescreen == null) {
       
        const frankDocRef = doc(db, "users", userdata.id);
        await updateDoc(frankDocRef, {
          welcomescreen: false,
        });
        setCount(false);
        return

        // db.collection('users').doc(userdata.id).update({welcomescreen: true})
      } else if (userdata.data().welcomescreen == false) {
        setCount(false)
        return
      }

      // snapshot.docs.forEach((doc) => {
      //     console.log({ id: doc.id, data: doc.data() });

      //   });
    });
   
  };
  useEffect(() => {
    
    if (data) {
      if (!once) {
        saveNote(data.user.email).then(()=>{
            {count ? console.log("true") : console.log("false")}
        });
        
        
        once = true;
      }
    }
  });
}
