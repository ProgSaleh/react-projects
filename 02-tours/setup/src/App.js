import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [loading, setLoading] = useState();
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((t) => t.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (e) {
      console.log('error', e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <>
      {loading ? (
        <main>
          <Loading />
        </main>
      ) : (
        <main>
          {!tours.length ? (
            <div className="title">
              <h2>no tours left</h2>
              <button onClick={fetchTours} className="btn">
                refresh
              </button>
            </div>
          ) : (
            <Tours tours={tours} removeTour={removeTour} />
          )}
        </main>
      )}
    </>
  );
}

export default App;
