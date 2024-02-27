import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import GoogleSignIn from "./GoogleSignIn";

export default async function SignIn() {

    const { data }  = await readUserSession();

    if (data.session) {
      return redirect('/dashboard')
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>Sign-In Page</div>
            <GoogleSignIn />
        </main>
    )
}