
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import LoginBtn from './login-btn'
import Script from 'next/script'
import Dat from './components/sc'






export default async  function Home() {
   
return(<div >
    
 
        {/* <LoginBtn /> */}
        <Dat/>
                
</div>)

}