import React from 'react';
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from './NoteItem';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;

  return (
    <div>
      <div className="row my-3">
        <h2>YOUR NOTES</h2>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note}/>
        })}
      </div>
    </div>
  )
}

export default Notes
