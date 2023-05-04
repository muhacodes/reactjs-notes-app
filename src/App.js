import React, { useState } from "react";
import NotesList from "./components/NotesList";
import { v4 as uuidv4 } from "uuid";
import Search from "./components/Search";
// import {} from ''
import "./index.css";
import Header from "./components/Header";
function App() {
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      text: "i should be serious and go to gym",
      date: "14/3/2021",
    },

    {
      id: uuidv4(),
      text: "This is my first reactjs notes app and am loving it",
      date: "08/05/2021",
    },

    {
      id: uuidv4(),
      text: "My next reactjs project is going to be exiting and fun",
      date: "10/10/2021",
    },

    {
      id: uuidv4(),
      text: "I dind't know reactjs was this much interesting and fun to work with.",
      date: "07/07/2021",
    },
  ]);

  const [filteredNotes, setFilteredNotes] = useState(notes);

  const [darkmode, setDarkMode] = useState(false);

  const deleteNote = (note) => {
    const updatedNote = notes.filter(
      (currentNote) => note.id != currentNote.id
    );
    setNotes(updatedNote);
  };

  const addNote = (notetext) => {
    const newNote = {
      id: uuidv4(),
      text: notetext,
      date: new Date().toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
    setFilteredNotes([...notes, newNote]);
  };

  const filter = (searchText) => {
    console.log(searchText);
    const filteredNote = notes.filter((note) =>
      note.text.toLowerCase().includes(searchText)
    );
    setFilteredNotes(filteredNote);
  };

  return (
    <div className={`${darkmode && 'dark-mode'}`}>
      <div className='container'>
        <Header mode={darkmode} toggleMode={setDarkMode} />
        <Search onSearch={filter} />
        <NotesList
          onDelete={deleteNote}
          addNote={addNote}
          notes={filteredNotes}
        />
      </div>
    </div>
  );
}

export default App;
