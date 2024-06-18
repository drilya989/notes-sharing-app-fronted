import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import newRequest from "../utils/newRequest";
import NotesCard from '../Components/NotesCard';

function UserNotes() {
  const { userId } = useParams();
  const [userNotes, setUserNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserNotes = async () => {
      console.log("userId:", userId); 

      if (!userId) {
        setLoading(false);
        setError("User ID is missing.");
        return;
      }

      try {
        const notesResponse = await newRequest.get(`/Notes/user/${userId}`);
        setUserNotes(notesResponse.data);
      } catch (err) {
        setError("Error fetching user notes: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserNotes();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="user-notes">
      <div className="notes-container">
        <h2>Your Notes</h2>
        {userNotes.length > 0 ? (
          userNotes.map((note) => (
            <NotesCard key={note.id} note={note} />
          ))
        ) : (
          <p>No notes found.</p>
        )}
      </div>
    </div>
  );
}

export default UserNotes;

