import React, { useEffect, useState } from 'react';
import { CharacterRequest } from '../assets/types';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Card from '../components/CardCharacter/Card';
import { fetchCharacters } from '../assets/hepers';


const CharactersPage: React.FunctionComponent = () => {
    const [page, setPage] = useState(1)

    const charactersQuery = useQuery({
        queryKey: ['characters'],
        queryFn: () => fetchCharacters(page),
        keepPreviousData: true
    });

    if (charactersQuery.isLoading) return <h1>Loading request</h1>;
    if (charactersQuery.isError) return <h1>Request error</h1>;

    return (
        <div className="characters-list">
            {
                charactersQuery.data?.map(({id, name, image, status, species, origin, gender, created}) => (
                    <Card 
                        key={id} 
                        id={id}
                        name={name}
                        image={image}
                        status={status}
                        species={species}
                        origin={origin}
                        gender={gender}
                        created={created}
                    />
                ))
            }
        </div>
    );
    
};

export default CharactersPage;
