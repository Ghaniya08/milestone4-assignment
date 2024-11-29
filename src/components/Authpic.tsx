import Image from 'next/image'
import { signIn ,  signOut  , auth} from "@/auth"
import Link from 'next/link';
export default async function Authpic() {
    const session = await auth();
    console.log(session)
    const user = session?.user ;
  return user ? 
  (
    <form
      action={async () => {
        "use server"
        await signOut()}}>
            <div className='lg:block hidden'>
            <div className="flex gap-3 ">
             <Link href={"/userprofile"}>
             <Image
                  src={session?.user?.image || ""}
                  alt={session?.user?.name || "User Image"}
                  className="w-10 h-10 rounded-full"
                  width={40}
                  height={40}
                />
             </Link>
      <button type="submit" className="bg-white text-black h-[35px] w-[80px] rounded-lg ">Logout</button>
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
      <button type="submit" className="bg-white text-black h-[35px] w-[80px] rounded-lg lg:block hidden ">LogIn</button>
    </form> 
  )
} 