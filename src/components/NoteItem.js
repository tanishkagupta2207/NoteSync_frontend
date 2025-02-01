import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex">
            <h5 className="p-2 flex-grow-1 card-title">{note.title}</h5>
            <i className="fa-solid fa-pen-to-square mx-2 p-2 "></i>
            <i className="fa-solid fa-trash-can mx-2 p-2"></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
