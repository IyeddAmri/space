"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page() {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/edu/getAll');
        setEducationData(response.data);
      } catch (error) {
        console.error('Error fetching education data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Education Data</h1>
      <ul>
        {educationData.map(edu => (
          <li key={edu.id}>
            <p>Image URL: {edu.imageUrl}</p>
            <p>Description: {edu.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


