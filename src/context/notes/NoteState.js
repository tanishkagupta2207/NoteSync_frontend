import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  //GET ALL NOTES
  const getAllNotes = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_HOST_URL}api/notes/fetchAllNotes`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      }
    );
    const res = await response.json();
    if (res.success) {
      setNotes(res.notes);
      return { success: true, msg: "Note fetched Successfully!" };
    } else {
      setNotes([]);
      if (res.msg) {
        return { success: false, msg: res.msg };
      } else {
        return { success: false, msg: res.errors[0].msg };
      }
    }
  };

  //ADD A NOTE
  const addNote = async (title, description, tag) => {
    const response = await fetch(
      `${process.env.REACT_APP_HOST_URL}api/notes/addNote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({ title, description, tag }),
      }
    );
    //eslint-disable-next-line
    const res = await response.json();
    if (res.success) {
      setNotes(notes.concat(res.note));
      return { success: true, msg: "Note added Successfully!" };
    } else {
      if (res.msg) {
        return { success: false, msg: res.msg };
      } else {
        return { success: false, msg: res.errors[0].msg };
      }
    }
  };

  //DELETE A NOTE
  const deleteNote = async (id) => {
    const response = await fetch(
      `${process.env.REACT_APP_HOST_URL}api/notes/deleteNote/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      }
    );
    // eslint-disable-next-line
    const res = await response.json();
    if (res.success) {
      setNotes(
        notes.filter((note) => {
          return note._id !== id;
        })
      );
      return { success: true, msg: "Note deleted Successfully!" };
    } else {
      if (res.msg) {
        return { success: false, msg: res.msg };
      } else {
        return { success: false, msg: res.errors[0].msg };
      }
    }
  };

  //EDIT A NOTE
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(
      `${process.env.REACT_APP_HOST_URL}api/notes/updateNote/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({ title, description, tag }),
      }
    );
    // eslint-disable-next-line
    const res = await response.json();

    if (res.success) {
      let newNotes = JSON.parse(JSON.stringify(notes));
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
      return { success: true, msg: "Note updated Successfully!" };
    } else {
      if (res.msg) {
        return { success: false, msg: res.msg };
      } else {
        return { success: false, msg: res.errors[0].msg };
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        editNote,
        getAllNotes
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
