import createSupabaseServerClient from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";

export default async function SignOut() {
    const signOut = async () => {
		"use server";
		const supabase = await createSupabaseServerClient();
		await supabase.auth.signOut();
		redirect("/");
	};

    return (
        <main>
            <form action={signOut}>
                <Button>Sign Out</Button>
            </form>
        </main>
    )
}