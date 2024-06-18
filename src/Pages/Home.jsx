import React, { useState, useEffect } from "react";
import NotesCard from '../Components/NotesCard';
import './Home.scss';
import Navbar from '../Components/Navbar';
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest.js";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [notes, setNotes] = useState([]);
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => newRequest.get("/Notes").then(res => res.data)
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await newRequest.get("/Notes");
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='top-div'>
        super strona
      </div>
      <div className='notes-div'>
        {isLoading ? (
          "loading"
        ) : error ? (
          "Something went wrong"
        ) : (
          data.map((note) => (
            <NotesCard
              key={note._id}
              note={note}  
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;