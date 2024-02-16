import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../../pages/fact/style.css';

function useFetchSpaceFacts() {
  const [spaceFacts, setSpaceFacts] = useState([]);
  
  useEffect(() => {
    const fetchSpaceFacts = async () => {
      try {
        const response = await fetch('http://localhost:4000/facts'); // Adjust URL to match your backend route
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
    <div>
      <h1>Do You Know</h1>
      <ul className="container">
        {spaceFacts.map((fact) => (
          <li key={fact.id} className="box">
            <div>
              <h3 className="fact">{fact.fact}</h3>
              <div className="image">
                <img src={fact.image_url} alt="Space Fact" />
              </div>
              <div className="info">
                <p><strong>Source:</strong> {fact.source}</p>
                <p><strong>Category:</strong> {fact.category}</p>
              </div>
            </div>
            <Link href={`/facts/${fact.id}`} className="link">
              More details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpaceFactsPage;
