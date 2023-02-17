
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import LoginBtn from './login-btn'

export default async  function Home() {
   
return(<div >
    <h1>Auth Test</h1>
    <div  >
        <LoginBtn />
    </div>
</div>)

}