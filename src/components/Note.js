import React from "react";
// import {FaBeer} from   'react-icons/fa';
import { MdDeleteForever } from "react-icons/md";

function Note({ note, onDelete}) {


  const deleteNote = () =>{
    onDelete(note);
  }
  return (
    <div className="note">
      <span> {note.text} </span>
      <div className="note-footer">
        <small> {note.date} </small>
        <MdDeleteForever onClick={deleteNote} className="delete-icon" size="1.3rem" />
      </div>
    </div>
  );
}

export default Note;
