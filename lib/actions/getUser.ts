import createSupabaseServerClient from "../supabase/server";

export default async function getUser() {
    const supabase = await createSupabaseServerClient();
    return supabase.auth.getUser();
}