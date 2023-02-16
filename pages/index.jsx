"use client"
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
// pages/index.js
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index() {
  
  const notify = () => toast("Wow so easy!");
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>{notify}</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
         <button onClick={notify}>Notify!</button>
        <ToastContainer />
        Welcome {user.name}! <Link href="/api/auth/logout">Logout</Link>
      </div>
    );
  }

  return <Link href="/api/auth/login">Login</Link>;
}