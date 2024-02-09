'use client'
import LoginWithGoogle from "@/components/Buttons/LoginWithGoogle";
import { useEffect } from "react";
import { useRouter} from "next/navigation";
import { useSession } from "next-auth/react";


const HomePage = () => {
const {data: session} = useSession()
const router = useRouter()

useEffect(() => {
  if(session){
    router.replace("/dashboard")
  }
}, [session, router])
  return (
    <div>HomePa

      <LoginWithGoogle />
    </div>
  )
}

export default HomePage