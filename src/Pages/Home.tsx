import React from 'react';

export type HomePage = {};

const HomePage: React.FunctionComponent<HomePage> = (Home) => {
    return (
        <div className="container">
            <p>This is a simple page using React Router & React Query and Rick and Morty API</p>
        </div>
    );
};

export default HomePage;
