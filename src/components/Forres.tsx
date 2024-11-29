import Image from 'next/image'
import { signIn ,  signOut  , auth} from "@/auth"
import Link from 'next/link';
export default async function Forres () {
    const session = await auth();
    console.log(session)
    const user = session?.user ;
  return user ? 
  (
    <form
      action={async () => {
        "use server"
        await signOut()}}>
            <div className='lg:hidden block'>
            <div className="flex gap-5 ">
             <Link href={"/userprofile"}>
             <Image
                  src={session?.user?.image || ""}
                  alt={session?.user?.name || "User Image"}
                  className="w-12 h-12 rounded-full"
                  width={40}
                  height={40}
                />
             </Link>
      <button type="submit" className="bg-black text-white h-[35px] w-[80px] rounded-lg ">Logout</button>
             </div>
            </div>
    </form> 
  )
  :
  (
    <form
      action={async () => {
        "use server"
        await signIn("github")}}>
      <button type="submit" className="bg-black text-white h-[35px] w-[80px] rounded-lg ">Login</button>
    </form> 
  )
} 