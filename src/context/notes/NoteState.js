import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props) => {

  const [notes, setNotes] = useState([]);

  //GET ALL NOTES
  const getAllNotes = async() => {
    const response = await fetch(`${process.env.REACT_APP_HOST_URL}api/notes/fetchAllNotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': process.env.REACT_APP_AUTH_TOKEN
      }
    });
    const res = await response.json();
    setNotes(res);
  };

  //ADD A NOTE
  const addNote = async(title, description, tag) => {
    const response = await fetch(`${process.env.REACT_APP_HOST_URL}api/notes/addNote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': process.env.REACT_APP_AUTH_TOKEN
      },
      body: JSON.stringify({title, description, tag})
    });
    //eslint-disable-next-line
    const res = await response.json();
    getAllNotes();
  };

  //DELETE A NOTE
  const deleteNote = async(id) => {
    const response = await fetch(`${process.env.REACT_APP_HOST_URL}api/notes/deleteNote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': process.env.REACT_APP_AUTH_TOKEN
      }
    });
    // eslint-disable-next-line
    const res = await response.json();
    getAllNotes();
  };

  //EDIT A NOTE
  const editNote = async(id, title, description, tag) => {
    const response = await fetch(`${process.env.REACT_APP_HOST_URL}api/notes/updateNote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': process.env.REACT_APP_AUTH_TOKEN
      },
      body: JSON.stringify({title, description, tag})
    });
    // eslint-disable-next-line
    const res = await response.json();
    getAllNotes();
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
