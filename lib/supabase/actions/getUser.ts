'use server';
import createClient from "../clients/server";

export default async function getUser() {
    const supabase = await createClient();
    return supabase.auth.getUser();
}