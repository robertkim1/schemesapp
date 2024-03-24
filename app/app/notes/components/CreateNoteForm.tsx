'use client';
import { useState, FocusEvent } from "react";

export default function CreateNoteForm() {

  const [showTitleField, setShowTitleField] = useState(false);

  const handleShowTitleField = () => {
    setShowTitleField(true);
  }

  const handleHideTitleField = (e: FocusEvent<HTMLFormElement>) => {
    if (e.relatedTarget === null) { // could be a bug if we select a focus component that isn't these two fields - that case can be fixed just checking the type of e.relatedTarget
      setShowTitleField(false);
      // save to notes
    }
  }

  return (
    <div>
        <form onMouseDown={handleShowTitleField} onBlur={e => handleHideTitleField(e)}>
          {showTitleField &&
            <input id="title" className="text-black block" placeholder="Title"/>
          }

          <textarea id="content" className="text-black block" name="content" placeholder="Content"></textarea>
        </form>
    </div>
  );
}