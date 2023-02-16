"use client"
const { SessionProvider } = require("next-auth/react");

export default function Providers({children}){
    return <SessionProvider>{children}</SessionProvider>
}