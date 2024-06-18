import React, { useState } from 'react';
import newRequest from '../utils/newRequest';

const AddFiles = () => {
  const [file, setFile] = useState(null);
  const [university, setUniversity] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      console.error('Please select a file.');
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('university', university);

    try {
      const response = await newRequest.post('Files', formData); 

      console.log('File uploaded successfully:', response.data);
      
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="add-files">
      <div className="container">
        <h1>Add New File</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="file">Upload File</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
              required
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
              required
            />
          </div>
          <button type="submit" disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload File'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFiles;
