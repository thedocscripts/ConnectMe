
// import { db, getuser } from "@/firebase";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   query,
//   updateDoc,
//   where,
// } from "firebase/firestore";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

import { db } from "@/firebase";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { getServerSession } from "next-auth"
import { useRouter } from "next/navigation";
import ClientComponent from "./ClientComponent";


// import { getuserdata } from "../components/utils/utils";


export default async function Welcomescreenutil() {
  
    const session = await getServerSession(authOptions)
   
        const docRef = collection(db, "users");
        const q = query(
          docRef,
          collection(db, "users"),
          where("email", "==", session.user.email)
        );
        var result;
        getDocs(q).then(async (snapshot) => {
          var userdata = snapshot.docs[0];
          
          if (userdata.data().welcomescreen) {
            console.log(true)
            return true
          } else if (userdata.data().welcomescreen == null) {
           
            const frankDocRef = doc(db, "users", userdata.id);
            await updateDoc(frankDocRef, {
              welcomescreen: false,
            });
           console.log(false)
            return false
    
          } else if (userdata.data().welcomescreen == false) {
            console.log(false)
            return false
          }
        });

        
  
   
//   };

}



