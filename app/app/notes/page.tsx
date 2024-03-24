import getUser from "@/lib/supabase/actions/getUser";
import { redirect } from "next/navigation";
import NotesArea from "./components/NotesArea";

export default async function Notes() {
    // some create notes component -> notes modal
    // fix show title field when select notes and hiding
    // all notes component
    // use context

    const { data } = await getUser();
    
    if (!data.user) {
      return redirect('/')
    }

    // get notes from database using data.user.id or something

    // map notes to notes component

    

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <NotesArea />
            <div>Notes Page</div>
        </main>
    )
}
