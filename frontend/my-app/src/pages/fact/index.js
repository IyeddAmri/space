import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './style.css'; // Import the CSS file

function useFetchSpaceFacts() {
  const [spaceFacts, setSpaceFacts] = useState([]);
  
  useEffect(() => {
    const fetchSpaceFacts = async () => {
      try {
        const response = await fetch('http://localhost:5000/facts'); // Adjust URL to match your backend route
        const data = await response.json();
        setSpaceFacts(data);
      } catch (error) {
        console.error('Error fetching space facts:', error);
      }
    };

    fetchSpaceFacts();

    // Clean up function to cancel any ongoing fetch request if the component unmounts
    return () => {};
  }, []);

  return spaceFacts;
}

function SpaceFactsPage() {
    const spaceFacts = useFetchSpaceFacts();
  
    return (
      <div className={styles.container}>
        <h1>Space Facts</h1>
        <ul>
          {spaceFacts.map((fact) => (
            <li key={fact.id} className={styles.item}>
              <div>
                <h3>{fact.fact}</h3>
                <img src={fact.image_url} alt="Space Fact" />
                <p>Source: {fact.source}</p>
                <p>Category: {fact.category}</p>
              </div>
              <Link href={`/facts/${fact.id}`} className={styles.link}>
                More details
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

export default SpaceFactsPage;
