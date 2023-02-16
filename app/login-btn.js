"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast, ToastContainer } from "react-toastify"
import UserInformation from './user-information'
import 'react-toastify/dist/ReactToastify.css';
import { useRef, useState } from "react"




const customId = "custom-id-yes";


  

export default function Component() {
  const { data: session, status } = useSession()
  const [isShowing, setShowing] = useState(true)
  const router = useRouter();
  const toastId = useRef(null);


  const notify = (name) => {
    if(! toast.isActive(toastId.current)) {
        toastId.current = toast("Bienvenido: " + name);
      }
    
  }

  if(status == "loading"){
    
    
    return(
        <div>
            Loading...
        
        </div>
    )
  }
  if (session) {
    console.log(status)
    {isShowing ? notify(session.user.name) : setShowing(false)}
    
    return (
      <div>
        
        Signed in as {session.user.email} <br />
        <UserInformation data={session.user} />
        <button onClick={() => router.push("/api/auth/signout")}>Sign out</button>
        <ToastContainer pauseOnFocusLoss={false}/>
      </div>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => router.push("/api/auth/signin")}>Sign in</button>
    </>
  )
}