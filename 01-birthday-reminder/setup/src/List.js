import React from 'react';

const List = ({ list }) => {
  return (
    <>
      {!list.length ? (
        <h2>list component</h2>
      ) : (
        list.map((person) => {
          const { id, image, name, age } = person;
          return (
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
        })
      )}
    </>
  );
};

export default List;
