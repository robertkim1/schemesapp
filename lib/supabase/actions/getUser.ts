'use server';
import createSupabaseServerClient from "../clients/server";

export default async function getUser() {
    const supabase = await createSupabaseServerClient();
    return supabase.auth.getUser();
}