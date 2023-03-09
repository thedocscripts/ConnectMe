
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import LoginBtn from './login-btn'
import Script from 'next/script'
import Dat from './components/sc'
import LandingPage from './components/MainPage'




async function getData() {
        const res = await fetch('https://www.connect-night.com/api/hello');
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
      
        // Recommendation: handle errors
        if (!res.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error('Failed to fetch data');
        }
      
        return res.json();
      }

export default async  function Home() {
       const data = await getData()
       console.log(data)
        
return(<div >
    
        
        <LandingPage />
                
</div>)

}