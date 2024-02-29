
import { redirect } from "next/navigation";
import GoogleSignIn from "./GoogleSignIn";
import getUser from "@/lib/actions/getUser";

export default async function SignIn() {

    const { data } = await getUser();
    
    if (data.user) {
      return redirect('/app')
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>Sign-In Page</div>
            <GoogleSignIn />
        </main>
    )
}