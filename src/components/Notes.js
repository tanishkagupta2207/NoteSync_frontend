import React, { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap";
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getAllNotes, editNote } = context;
  const [enote, setEnote] = useState({
    _id: "",
    title: "",
    description: "",
    tag: "",
  });

  const [noteView, setNoteView] = useState(false);
  const modalRef = useRef(null);
  let modalInstance = useRef(null);

  const toggleNoteView = () => setNoteView((prev) => !prev);

  const onChange = (e) => {
    setEnote({ ...enote, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getAllNotes();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (noteView && modalRef.current) {
      modalInstance.current = new Modal(modalRef.current);
      modalInstance.current.show();
    }
  }, [noteView]);

  return (
    <div>
      <AddNote />
      {noteView && (
        <div>
          <div
            className="modal fade"
            id="staticBackdrop"
            ref={modalRef}
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Edit Note
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setNoteView(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <form className="my-3">
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={enote.title}
                        onChange={onChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={enote.description}
                        onChange={onChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="tag" className="form-label">
                        Tag
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tag"
                        name="tag"
                        value={enote.tag}
                        onChange={onChange}
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => setNoteView(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      editNote(
                        enote._id,
                        enote.title,
                        enote.description,
                        enote.tag
                      );
                      setNoteView(false);
                    }}
                  >
                    Update Note
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => setNoteView(true)}
            style={{ display: "none" }}
          >
            Open Modal
          </button>
        </div>
      )}
      <div className="row my-3">
        <h2>YOUR NOTES</h2>
        <div className="container">
          {notes.length === 0 && "No notes added till now !"}
        </div>
        {notes &&
          notes.map((note) => {
            return (
              <NoteItem
                key={note._id}
                note={note}
                toggleNoteView={toggleNoteView}
                setNote={setEnote}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Notes;
