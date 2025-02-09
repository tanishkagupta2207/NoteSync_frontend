import React, { useState } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = async(e) => {
    e.preventDefault();
    const stat = await addNote(note.title, note.description, note.tag);
    if(stat.success !== true){
      props.showAlert(stat.msg, 'danger');
    } else{
      props.showAlert(stat.msg, 'success');
      setNote({
        title: "",
        description: "",
        tag: "",
      });
    }
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const containerStyle = {
    padding: '20px',
    backgroundColor: 'rgba(114, 113, 113, 0.15)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '160px',
    color: 'rgb(0, 0, 0)',
  };

  const headingStyle = {
    color: '#291a40',
    marginBottom: '20px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle = {
    marginBottom: '8px',
    color: '#333',
  };

  const inputStyle = {
    marginBottom: '16px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: 'rgb(0, 0, 0)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div className="container my-3" style={containerStyle}>
      <h4 style={headingStyle}>ADD A NOTE</h4>
      <form className="my-3" style={formStyle}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label" style={labelStyle}>
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
            value={note.title}
            style={inputStyle}
            required
            minLength={3}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label" style={labelStyle}>
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            value={note.description}
            style={inputStyle}
            required
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label" style={labelStyle}>
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            value={note.tag}
            style={inputStyle}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick} style={buttonStyle}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
