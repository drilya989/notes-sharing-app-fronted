import React, {useState} from 'react'
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";
import { useNavigate } from "react-router-dom";
import './AddNotes.scss';


const AddNotes = () => {
    const [title, setTitle] = useState('');
    const [noteBody, setNoteBody] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const [university, setUniversity] = useState('');
    const [categoryId, setCategoryId] = useState('');
  
    const navigate = useNavigate();
    const queryClient = useQueryClient();
  
    const mutation = useMutation({
      mutationFn: async (note) => {
        const payload = { ...note, categoryId };
        console.log('Payload being sent:', payload); 
        return newRequest.post('/Notes', payload);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(['notes']);
        navigate('/');
        window.location.reload();
      },
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      mutation.mutate({ title, noteBody, isPublic, university });
    };
  
    return (
      <div className="add-notes">
        <div className="container">
          <h1>Add New Note</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Note title"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="noteBody">Note Body</label>
              <textarea
                id="noteBody"
                name="noteBody"
                value={noteBody}
                onChange={(e) => setNoteBody(e.target.value)}
                placeholder="Enter your note here"
                rows="6"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="isPublic">Is Public?</label>
              <input
                type="checkbox"
                id="isPublic"
                name="isPublic"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="university">University</label>
              <input
                type="text"
                id="university"
                name="university"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                placeholder="Your university"
              />
            </div>
            <div className="form-group">
              <label htmlFor="categoryId">Category ID</label>
              <input
                type="text"
                id="categoryId"
                name="categoryId"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                placeholder="Category ID"
                required
              />
            </div>
            <button type="submit">Create Note</button>
          </form>
        </div>
      </div>
    );
  };

export default AddNotes
