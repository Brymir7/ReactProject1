import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { nanoid } from 'nanoid';
import {useEffect} from 'react';
function App() {
  const [notes,setNotes] = useState(localStorage.storage? JSON.parse(localStorage.storage) : [] );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("storage", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: nanoid(),
      title: "Undefined Title",
      body: "Empty",
      lastModified: Date.now(),
    }
    setNotes([newNote, ...notes]);
  }
  const onDeleteNote = (DeleteID) => {
    setNotes(notes.filter((note)=> note.id !== DeleteID));
  }
  const getActiveNote = () => {
   return notes.find((note)=> note.id === activeNote);
  }
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note)=> {
      if(note.id === activeNote) {
        return updatedNote;
      }
      return note;
    })
    setNotes(updatedNotesArray);
  }
  return (
    <div className="app">
     <Sidebar
       notes = {notes}
       onAddNote = {onAddNote}
       onDeleteNote = {onDeleteNote}
       activeNote = {activeNote}
       setActiveNote={setActiveNote}
     />
     <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
    </div>
  );
}

export default App;
