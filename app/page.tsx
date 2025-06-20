import { Button } from "@/components/ui/button";
import getUser from "@/lib/supabase/actions/getUser";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {

  const { data } = await getUser();

  if (data.user) {
    return redirect('/app')
  }
   
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Home Page</div>
      </main>
    );
}
