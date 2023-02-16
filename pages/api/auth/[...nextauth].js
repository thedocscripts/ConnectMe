import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import DiscordProvider from "next-auth/providers/discord"
import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import { initializeApp } from 'firebase/app';
import * as admin from 'firebase-admin'





export const authOptions = {
  // Configure one or more authentication providers
 
    // callbacks: {
    //     session: async (session, token) => {
    //       session.user.id = token.id;
         
    //       return session;
    //     },
    //   },
  providers: [
   
    
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    DiscordProvider({
        clientId: process.env.DISCORD_ID,
        clientSecret: process.env.DISCORD_SECRET,
      }),
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    })
    // ...add more providers here
  ],
  adapter: FirestoreAdapter({
   credential: admin.credential.cert({
    projectId: process.env.PROYECT_ID ? process.env.PROYECT_ID.replace(/\\n/gm, "\n") : undefined,
     clientEmail: process.env.CLIENT_EMAIL ? process.env.CLIENT_EMAIL.replace(/\\n/gm, "\n") : undefined,
     privateKey: process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY.replace(/\\n/gm, "\n") : undefined,
   })
  }),

}

export default NextAuth(authOptions)