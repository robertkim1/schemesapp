'use client';
import createSupabaseFrontendClient from "@/lib/supabase/client";

export default async function GoogleSignIn() {

    const supabase = createSupabaseFrontendClient();
    const loginWithGoogle = () => {
        supabase.auth.signInWithOAuth({
            provider:'google',
            options: {
                redirectTo: `${location.origin}/auth/callback`
            },
        });
    }

    return(
        <main>
            <button onClick={loginWithGoogle}>Sign-In With Google</button>
        </main>
    )
}