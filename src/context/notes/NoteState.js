import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "67969188b4f42a5fea1771e9",
      "user": "6796632dea172d898b6b8870",
      "title": "My second Note",
      "description": "Adding my second note here",
      "tag": "hihihi",
      "date": "2025-01-26T19:48:24.711Z",
      "__v": 0
    },
    {
      "_id": "6796944ab6746ae3b094948b",
      "user": "6796632dea172d898b6b8870",
      "title": "My first Note",
      "description": "Adding my second note here",
      "tag": "hihihi",
      "date": "2025-01-26T20:00:10.646Z",
      "__v": 0
    },
    {
      "_id": "67969188b4f42a5fea1771ef",
      "user": "6796632dea172d898b6b8870",
      "title": "My second Note",
      "description": "Adding my second note here",
      "tag": "hihihi",
      "date": "2025-01-26T19:48:24.711Z",
      "__v": 0
    },
    {
      "_id": "6796944ab6746ae3b094948f",
      "user": "6796632dea172d898b6b8870",
      "title": "My first Note",
      "description": "Adding my second note here",
      "tag": "hihihi",
      "date": "2025-01-26T20:00:10.646Z",
      "__v": 0
    },
    {
      "_id": "67969188b4f42a5fea1771ee",
      "user": "6796632dea172d898b6b8870",
      "title": "My second Note",
      "description": "Adding my second note here",
      "tag": "hihihi",
      "date": "2025-01-26T19:48:24.711Z",
      "__v": 0
    },
    {
      "_id": "6796944ab6746ae3b094948e",
      "user": "6796632dea172d898b6b8870",
      "title": "My first Note",
      "description": "Adding my second note here",
      "tag": "hihihi",
      "date": "2025-01-26T20:00:10.646Z",
      "__v": 0
    },
    {
      "_id": "67969188b4f42a5fea1771ed",
      "user": "6796632dea172d898b6b8870",
      "title": "My second Note",
      "description": "Adding my second note here",
      "tag": "hihihi",
      "date": "2025-01-26T19:48:24.711Z",
      "__v": 0
    },
    {
      "_id": "6796944ab6746ae3b094948d",
      "user": "6796632dea172d898b6b8870",
      "title": "My first Note",
      "description": "Adding my second note here",
      "tag": "hihihi",
      "date": "2025-01-26T20:00:10.646Z",
      "__v": 0
    },
    {
      "_id": "67969188b4f42a5fea1771ec",
      "user": "6796632dea172d898b6b8870",
      "title": "My second Note",
      "description": "Adding my second note here",
      "tag": "hihihi",
      "date": "2025-01-26T19:48:24.711Z",
      "__v": 0
    },
    {
      "_id": "6796944ab6746ae3b094948c",
      "user": "6796632dea172d898b6b8870",
      "title": "My first Note",
      "description": "Adding my second note here",
      "tag": "hihihi",
      "date": "2025-01-26T20:00:10.646Z",
      "__v": 0
    }
  ];

  const [notes,setNotes] = useState(notesInitial)

  return (
    <NoteContext.Provider value={{notes, setNotes}}>{props.children}</NoteContext.Provider>
  ); 
};

export default NoteState;
