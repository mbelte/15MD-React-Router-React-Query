import React, { useEffect, useState } from 'react';
import { CharacterRequest } from '../assets/types';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { fetchRMData } from '../assets/hepers';
import { useQuery } from '@tanstack/react-query';
import Card from '../components/CardCharacter/Card';

export type CharactersPage = {};

const CharactersPage: React.FunctionComponent<CharactersPage> = (Characters) => {
    const [page, setCurrentPage] = useState(1)
    const { id } = useParams()

    useEffect(() => {
        
        // console.log(fetchRMData());
    }, [])

    const charactersQuery = useQuery({
        queryKey: ['characters'],
        queryFn: async () => {
            try {
                const { data } = await axios<CharacterRequest>(`https://rickandmortyapi.com/api/character`);
                return data.results;
            } catch (e) {
                console.log('network error');
            }
        }
    });

    if (charactersQuery.isLoading) return <h1>loading</h1>
    if (charactersQuery.isError) return <h1>error</h1>;

    // console.log(charactersQuery.data)

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
