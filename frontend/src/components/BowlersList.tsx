// src/components/BowlersList.tsx
import React, { useEffect, useState } from 'react';

// Define interface based on the database schema
interface Team {
  teamId: number;
  teamName: string;
}

interface Bowler {
  bowlerId: number;
  bowlerLastName: string;
  bowlerFirstName: string;
  bowlerMiddleInit: string | null;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  teamId: number;
  team: Team;
}

function BowlersList() {
  const [bowlers, setBowlers] = useState<Bowler[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from the API
    // Make sure the URL matches your backend URL
    fetch('https://localhost:7241/bowlers')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBowlers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load bowlers data. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="text-center p-4">Loading bowlers data...</div>;
  if (error) return <div className="alert alert-danger m-3">{error}</div>;

  return (
    <div className="container">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((bowler) => (
            <tr key={bowler.bowlerId}>
              <td>{`${bowler.bowlerFirstName} ${bowler.bowlerMiddleInit ? bowler.bowlerMiddleInit + '.' : ''} ${bowler.bowlerLastName}`}</td>
              <td>{bowler.team.teamName}</td>
              <td>{bowler.bowlerAddress}</td>
              <td>{bowler.bowlerCity}</td>
              <td>{bowler.bowlerState}</td>
              <td>{bowler.bowlerZip}</td>
              <td>{bowler.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BowlersList;
