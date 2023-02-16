"use client"
import Head from 'next/head'

import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import Component from '@/components/login-btn'

const inter = Inter({ subsets: ['latin'] })
// pages/index.js



export default function Index() {
  
  const notify = () => toast("Wow so easy!");
  return(<div>
 <Component />
  </div>)
 

}