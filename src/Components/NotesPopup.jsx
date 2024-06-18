import React from 'react';
import './NotesPopup.scss';

const NotesPopup = ({note, onClose }) => {
  return (
    <div className="notes-popup-background">
      <div className="notes-popup">
        <div className='top-of-card'>
        <p id="date">{note.CreatedAt}</p>
        <p id="username">@Paweł</p>
        </div>
        <hr/>
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