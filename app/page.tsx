import readUserSession from "@/lib/actions";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {

  const { data }  = await readUserSession();

  if (data.session) {
    return redirect('/dashboard')
  }
   
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Home Page</div>
        <Link href='/sign-in'>Sign In Button</Link>
      </main>
    );
}
