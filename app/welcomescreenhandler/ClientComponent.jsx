'use client';

import { useRouter } from "next/navigation";

export default function ClientComponent({data}) {
    console.log(data)
    const router = useRouter();
    
    if(data){
        router.push("/maps")
    }else{
        router.push("/map")
    }
    return(<div></div>)
    
 
}