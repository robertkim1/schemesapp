'use client';
import readUserSession from "@/lib/actions";
import createSupabaseFrontendClient from "@/lib/supabase/client"
import { redirect } from "next/navigation";

export default async function SignIn() {

    const { data }  = await readUserSession();

    if (data.session) {
      return redirect('/dashboard')
    }

    const supabase = createSupabaseFrontendClient();
    const loginWithGoogle = () => {
        supabase.auth.signInWithOAuth({
            provider:'google',
            options: {
                redirectTo: `${location.origin}/auth/callback`
            },
        });
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>Sign-In Page</div>
            <button onClick={loginWithGoogle}>Sign-In With Google</button>
        </main>
    )
}