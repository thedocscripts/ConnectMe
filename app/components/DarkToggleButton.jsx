"use client"
import { useEffect, useState } from 'react';
import styles from './DarkToggleButton.module.css'
export default function DarkToggleButton(){
    const [ isDark, setDark ] = useState(true);
   
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    useEffect(() =>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        if(isDark){
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light')
        }
      
    })
    return(<>
    <label className={styles.switch}>
        <input type="checkbox" checked={!isDark} onChange={()=>setDark(!isDark)}/>
        <span className={styles.slider}></span>
    </label>
    </>)
}