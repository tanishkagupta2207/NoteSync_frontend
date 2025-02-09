import React from "react";
import { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const { note, toggleNoteView, setNote } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNoteEdit = () => {
    toggleNoteView();
    setNote(note);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const cardStyle = {
    backgroundColor: "rgba(114, 113, 113, 0.15)",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    padding: "20px",
    marginBottom: "20px",
    color: "#000",
    maxWidth: '282px',
    cursor: 'pointer'
  };

  const iconStyle = {
    cursor: "pointer",
    color: "rgb(0,0,0)",
  };

  const textStyle = {
    color: "#000",
  };

  const badgeStyle = {
    backgroundColor: 'rgb(0,0,0)',
    color: '#FFFFFF',
    borderRadius: '4px',
    padding: '5px 10px',
    fontSize: '12px',
    marginLeft: '10px',
  };

  const titleStyle = {
    color: 'rgba(0, 0, 0, 0.83)'
  }

  const modalStyle = {
    display: isModalOpen ? 'block' : 'none',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    width: '80%',
    maxWidth: '800px',
  };

  const overlayStyle = {
    display: isModalOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  };


  return (
    <>
    <div className="col-md-4 my-3 card mx-4" style={cardStyle} onClick={handleOpenModal}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title" style={titleStyle}>{note.title}</h5>
          <div>
            <i
              className="fa-solid fa-pen-to-square mx-2"
              onClick={(e) => {e.stopPropagation();handleNoteEdit()}}
              style={iconStyle}
            ></i>
            <i
              className="fa-solid fa-trash-can mx-2"
              onClick={async (e) => {
                e.stopPropagation();
                const stat = await deleteNote(note._id);
                if (stat.success !== true) {
                  props.showAlert(stat.msg, 'danger');
                } else {
                  props.showAlert(stat.msg, 'success');
                }
              }}
              style={iconStyle}
            ></i>
          </div>
        </div>
        <p className="card-text" style={textStyle}>{note.description}</p>
        <div className="d-flex justify-content-end">
          {note.tag && <span style={badgeStyle}>{note.tag}</span>}
        </div>
      </div>
    </div>
    <div style={overlayStyle} onClick={handleCloseModal}></div>
    <div style={modalStyle}>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="card-title">{note.title}</h5>
        <button onClick={handleCloseModal} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
      </div>
      <p className="card-text" style={textStyle}>{note.description}</p>
      <div className="d-flex justify-content-end">
        {note.tag && <span style={badgeStyle}>{note.tag}</span>}
      </div>
    </div>
    </>
  );
};

export default NoteItem;
