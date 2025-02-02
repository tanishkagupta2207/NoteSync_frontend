import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const { note, toggleNoteView, setNote } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const handleNoteEdit = () => {
    toggleNoteView();
    setNote(note);
  };

  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex">
            <h5 className="p-2 flex-grow-1 card-title">{note.title}</h5>

            <i
              className="fa-solid fa-pen-to-square mx-2 p-2"
              onClick={handleNoteEdit}
            ></i>

            <i
              className="fa-solid fa-trash-can mx-2 p-2"
              onClick={async() => {
                const stat = await deleteNote(note._id);
                if(stat.success !== true){
                  props.showAlert(stat.msg, 'danger');
                } else{
                  props.showAlert(stat.msg, 'success');
                }
              }}
            ></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
