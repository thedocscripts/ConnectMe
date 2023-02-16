import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signin() {
    const router = useRouter();
    const { status } = useSession();
  

    if(status == "unauthenticated"){
        return router.push("/api/auth/signin")
    }else if (status == "authenticated"){
        return router.push("/")
    }
    
  
    return <div></div>;
  }