
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




// // import { getuserdata } from "../components/utils/utils";
// var ressss;

// export default async function Page() {
    
//     const session = await getServerSession(authOptions)

//         const docRef = collection(db, "users");
//         const q = query(
//           docRef,
//           collection(db, "users"),
//           where("email", "==", session.user.email)
//         );
       
//         const data = getDocs(q).then(async (snapshot) => {
//           var userdata = snapshot.docs[0];
          
//           if (userdata.data().welcomescreen) {
           
//             return(true)
//           } else if (userdata.data().welcomescreen == null) {
           
//             const frankDocRef = doc(db, "users", userdata.id);
//             await updateDoc(frankDocRef, {
//               welcomescreen: false,
//             });        
//             return(false)
//           } else if (userdata.data().welcomescreen == false) {
//             return(false)
//           }
          
          
//         }).then((value)=>{
//             if(value){
//                 ressss = value
//             }else{
//                 ressss = value
//             }
//         });


        
       
        
        
export default function Page(){
    return(<div></div>)
}
  
   
// //   };

// }




