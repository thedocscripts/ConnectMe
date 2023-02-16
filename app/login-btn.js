"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import UserInformation from './user-information'

export default function Component() {
  const { data: session } = useSession()
  const router = useRouter();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <UserInformation data={session.user} />
        <button onClick={() => router.push("/api/auth/signout")}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => router.push("/api/auth/signin")}>Sign in</button>
    </>
  )
}