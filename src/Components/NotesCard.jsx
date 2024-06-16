import React from 'react';
import { Link} from 'react-router-dom';
import './NotesCard.scss';

const NotesCard = () => {
  return (
    //trzeba dodać link potem
        <div className='card'>
            <div className="top-of-card">
                <p id="date">16.06.2024</p>
              {/*  <p id="username">@Paweł</p> */}
            </div>
            <hr noshade="true"/>
            <div className='bottom-of-card'>
                <p id="title">Notatki z chemii</p>
                <p id="notebody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation.  Ut enim ad minim veniam, quis nostrud exercitation 
                </p>
                
            </div>
        </div>
 
  )
}

export default NotesCard

