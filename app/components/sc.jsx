"use client"

import Link from "next/link";
import styles from '@/styles/Home.module.css'
import logo from '@/public/images/Logo_Blanco.png'
import img1 from '@/public/images/1.png'
import img2 from '@/public/images/2.png'
import img3 from '@/public/images/3.png'
import img4 from '@/public/images/4.png'
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
const { useEffect } = require("react");


const links = [
    {
        label: "Inicio",
        route: "/"
    },
    {
        label: "Sobre Nosotros",
        route: "/about"
    },
    {
        label: "Proyecto",
        route: "/proyecto"
    },
    {
        label: "Contact",
        route: "/contact"
    },
]

export default function Dat(){
    useEffect(() => {
        const object1 = document.getElementById("img3");
        const object2 = document.getElementById("img4");
    
        const layer = document.getElementById("main");

        layer.addEventListener("mousemove", function (e) {
          const valueX = e.pageX * -1 / 20;
          const valueY = e.pageY * -1 / 20;
    
          object1.style.transform = `translate(-50%, -50%) translate3d(${valueX}px, ${valueY}px, 0)`;
        });
    
        layer.addEventListener("mousemove", function (e) {
          const valueX = e.pageX * -1 / 50;
          const valueY = e.pageY * -1 / 50;
    
          object2.style.transform = `translate(-50%, -50%) translate3d(${valueX}px, ${valueY}px, 0)`;
        });
      }, []);


      return( 
      <AnimatePresence>
      <motion.div className={styles.main} id="main" >
        <div className={styles.grid}>
            <div className={styles.gridline}></div>
            <div className={styles.gridline}></div>
            <div className={styles.gridline}></div>
            <div className={styles.gridline}></div>
            <div className={styles.gridline}></div>
            <div className={styles.gridline}></div>
            <div className={styles.gridline}></div>
            <div className={styles.gridline}></div>
            <div className={styles.gridline}></div>
            <div className={styles.gridline}></div>
            <div className={styles.gridline}></div>
        
            <motion.div id="bgtext" className={styles.bgtext} >
                DAFT<br/> CREATION
            </motion.div>

            <motion.div id="logo" className={styles.logo} initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
                <Image className={styles.img} src={logo} />
            </motion.div>

            <div id="imgs" className={styles.imgs}>
                <Image id="img1" className={styles.img} src={logo} />
                <Image  id="img2" className={styles.img} src={img2} />
                <Image  id="img3" className={styles.img} src={img3} />
                <Image   id="img4" className={styles.img} src={img4} />
            </div>

            <div id="menu" className={styles.menu}>
                <ul>
                    {links.map((map)=>(
                    <Link key={map.label} href={map.route} >
                        <motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                            {map.label}
                        </motion.li>
                    </Link>
                ))}
                </ul>
            </div>

            
        </div>
    </motion.div>
    </AnimatePresence>
    )
}
