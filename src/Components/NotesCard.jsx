import React, { useState } from 'react';
import './NotesCard.scss';
import NotesPopup from './NotesPopup';

const NotesCard = ({ note }) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible); // Odwróć stan widoczności popupa
  };

  return (
    <div className='card' onClick={togglePopup}> {/* Obsługa kliknięcia na dowolnym miejscu w karcie */}
      <div className="top-of-card">
        <p id="date">16.06.2024</p>
      </div>
      <hr />
      <div className='bottom-of-card'>
        <p id="title">Notatki z chemii</p>
        <p id="notebody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation.  Ut enim ad minim veniam, quis nostrud exercitation 
        </p>
      </div>
      
      {popupVisible && <NotesPopup note={note} onClose={() => setPopupVisible(false)} />} {/* Wyświetl popup gdy popupVisible jest true */}
    </div>
  );
};

export default NotesCard;

