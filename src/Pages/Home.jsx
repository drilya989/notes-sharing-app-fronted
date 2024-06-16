import React from 'react'
import NotesCard from '../Components/NotesCard'
import './Home.scss';
import Navbar from '../Components/Navbar';


const Home = () => {
  return (
    <div>
    <Navbar/>
      <div className='top-div'>
        Strona z notatkami
      </div>
      <div className='notes-div'>
            <NotesCard></NotesCard>
            <NotesCard></NotesCard>
            <NotesCard></NotesCard>
            <NotesCard></NotesCard>
            <NotesCard></NotesCard>
            <NotesCard></NotesCard>
      </div>
    </div>
  )
}

export default Home
