"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast, ToastContainer } from "react-toastify"
import UserInformation from './user-information'
import 'react-toastify/dist/ReactToastify.css';
import { useRef, useState } from "react"
import Image from "next/image"




const customId = "custom-id-yes";


  

export default function Component() {
  const { data: session, status } = useSession()

  const router = useRouter();



  

  if(status == "loading"){
    
    
    return(
        <div>
            Loading Session...
        
        </div>
    )
  }
  if (session) {

    
    
    return (
      <div>
        
        Signed in as {session.user.email} <br />
        <Image src={session.user.image} width={100} height={100} />
        <UserInformation data={session.user} />
        <button onClick={() => router.push("/api/auth/signout")}>Sign out</button>
        
      </div>
    )
  }
  return (
    <>
        Porfavor Inicia Session <br />
      <button onClick={() => router.push("/api/auth/signin")}>Sign in</button>
    </>
  )
}