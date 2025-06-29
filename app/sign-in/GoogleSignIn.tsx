'use client';
import { Button } from "@/components/ui/button";
import createSupabaseFrontendClient from "@/lib/supabase/clients/client";

export default function GoogleSignIn() {

    const supabase = createSupabaseFrontendClient();
    const loginWithGoogle = () => {
        supabase.auth.signInWithOAuth({
            provider:'google',
            options: {
                redirectTo: `${location.origin}/auth/callback`
            },
        });
    }

    // const getBaseUrl = () => {
    //     if (typeof window !== "undefined") return ""; // browser should use relative url
    //     if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
    //     return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
    //   };

    // production vercel link after redirection goes to localhost:3000, this may fix?

    return(
        <Button onClick={loginWithGoogle}>Sign-In With Google</Button>
    )
}