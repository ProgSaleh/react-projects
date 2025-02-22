import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [persons, setPersons] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{persons.length} birthdays today</h3>
        <List list={persons} />
        <button onClick={() => setPersons([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
