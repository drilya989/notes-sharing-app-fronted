import React from 'react';
import './NotesPopup.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import newRequest from '../utils/newRequest';

const NotesPopup = ({ note, onClose, onDelete }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleDelete = async () => {
    try {
      await newRequest.delete(`/Notes/${note.id}`);
      onDelete(note.id);
      onClose();
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };

  return (
    <div className="notes-popup-background">
      <div className="notes-popup">
        <div className='top-of-card'>
          <p id="university">{note.university}</p>
          {console.log(currentUser.id) /*nie zadziała bez tokenu*/}
          {note.userId === currentUser.id && (
            <FontAwesomeIcon
              icon={faTrash}
              onClick={handleDelete}
              className="delete-icon"
            />
          )}
        </div>
        <hr />
        <div>
          <h2>{note.title}</h2>
          <p>{note.noteBody}</p>
          <button id="close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default NotesPopup;