"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";

export default function ConnectNightApp(){
    const { data, user } = useSession({required: true});


    return(<AnimatePresence>
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}><motion.h1>asdas</motion.h1></motion.div>
    </AnimatePresence>)
}