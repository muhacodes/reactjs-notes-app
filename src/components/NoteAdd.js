import React, { useState } from 'react'

function NoteAdd({addNote}) {
    const [notetext, setNoteText] = useState('');
    const [disabled, setDisabled] = useState(false);
    const textLimit = 20;

    const noteText = event => {
        
        if(textLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    }

    const onAddNote = () => {
        addNote(notetext);
    }

    
    
  return (
    <div className='note new'>
        <textarea value={notetext} onChange={noteText} rows="8" cols="10" placeholder='Type to add a new Note!'> 

        </textarea>
        <div className='note-footer'>
            <small> {textLimit - notetext.length} - remaining </small>
            <button onClick={onAddNote} className='save'> Save </button>
        </div>
    </div>
  )
}

export default NoteAdd