import readUserSession from "@/lib/actions";
import SignOut from "./SignOut";

export default async function Dashboard() {

    const { data } = await readUserSession();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>Dashboard Page</div>
            <div>{JSON.stringify(data.session)}</div>
            <SignOut />
        </main>
    );
}
