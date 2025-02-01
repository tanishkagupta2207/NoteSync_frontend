import React from 'react';
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;

  return (
    <div>
      <AddNote />
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
