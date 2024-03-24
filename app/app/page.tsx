import { Button } from "@/components/ui/button";
import getUser from "@/lib/supabase/actions/getUser";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function App() {

    const { data } = await getUser();
    
    if (!data.user) {
      return redirect('/')
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Link href="/app/notes">
                <Button>Notes</Button>
            </Link>
            <div>App Page</div>
            <div>{JSON.stringify(data.user)}</div>
        </main>
    );
}
