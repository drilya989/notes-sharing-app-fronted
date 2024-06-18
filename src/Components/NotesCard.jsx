import React, { useState } from 'react';
import './NotesCard.scss';
import NotesPopup from './NotesPopup';
import { Link, useParams, useNavigate } from 'react-router-dom';

const NotesCard = ({ note }) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className='card' onClick={togglePopup}>
      <div className="top-of-card">
        <p id="date">{note?.CreatedAt || 'No Date Available'}</p> {/* do wyrzucenia */}
      </div>
      <hr />
      <div className='bottom-of-card'>
        <p id="title">{note?.title || 'No Title'}</p> 
        <p id="notebody">{note?.noteBody?.substring(0, 225) + "..." || 'No Content'}</p> 
      </div>
      
      {popupVisible && <NotesPopup note={note} onClose={closePopup} />} 
    </div>
  );
};

export default NotesCard;


