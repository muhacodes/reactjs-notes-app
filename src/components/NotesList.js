import React from "react";
import Note from "./Note";
import NoteAdd from "./NoteAdd";

function NotesList({ notes, addNote, onDelete  }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note  key={note.id} onDelete={onDelete} note={note} />
      ))}

      <NoteAdd  addNote={addNote} />
    </div>
  );
}

export default NotesList;
