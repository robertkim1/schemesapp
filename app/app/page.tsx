import SignOut from "../../components/header/SignOut";
import getUser from "@/lib/actions/getUser";
import { redirect } from "next/navigation";

export default async function App() {

    const { data } = await getUser();
    
    if (!data.user) {
      return redirect('/')
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>App Page</div>
            <div>{JSON.stringify(data.user)}</div>
            <SignOut />
        </main>
    );
}
