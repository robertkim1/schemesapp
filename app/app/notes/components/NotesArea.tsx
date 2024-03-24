'use client';
import { useState } from "react";
import CreateNoteForm from "./CreateNoteForm";
import ShowNotes from "./ShowNotes";

export default function NotesArea() {


    return(
        <div>
            <CreateNoteForm/>
            <ShowNotes />
        </div>
    );
}