import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import DiscordProvider from "next-auth/providers/discord"
import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import CredentialsProvider from "next-auth/providers/credentials";
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
    // CredentialsProvider({
    //     // The name to display on the sign in form (e.g. "Sign in with...")
    //     name: "Usuario / Contraseña",
    //     // `credentials` is used to generate a form on the sign in page.
    //     // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    //     // e.g. domain, username, password, 2FA token, etc.
    //     // You can pass any HTML attribute to the <input> tag through the object.
    //     credentials: {
    //       username: { label: "Username", type: "text", placeholder: "jsmith" },
    //       password: { label: "Password", type: "password" }
    //     },
    //     async authorize(credentials, req) {
    //         // You need to provide your own logic here that takes the credentials
    //         // submitted and returns either a object representing a user or value
    //         // that is false/null if the credentials are invalid.
    //         // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
    //         // You can also use the `req` object to obtain additional parameters
    //         // (i.e., the request IP address)
    //         const res = await fetch("/your/endpoint", {
    //           method: 'POST',
    //           body: JSON.stringify(credentials),
    //           headers: { "Content-Type": "application/json" }
    //         })
    //         const user = await res.json()
      
    //         // If no error and we have user data, return it
    //         if (res.ok && user) {
    //           return user
    //         }
    //         // Return null if user data could not be retrieved
    //         return null
    //       }
    //   }),
    
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
     privateKey: process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY  .replace(/\\n/gm, "\n") : undefined,
   })
  }),

}

export default NextAuth(authOptions)