import { CharacterRequestResults, EpisodeUsedData } from '../assets/types';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import CharacterProfile from '../components/CharacterProfile/CharacterProfile';


const CharacterPage: React.FunctionComponent = () => {
    const { id } = useParams()

    if (isNaN(id)) return <h1>Invalid ID</h1>;

    const characterQuery = useQuery({
        queryKey: ['character'],
        queryFn: async () => {
            try {
                const data = await axios<CharacterRequestResults>(`https://rickandmortyapi.com/api/character/${ id }`);
                return data.data;
            } catch (e) {
                console.log('network error', e);
            }
        }
    });

    if (characterQuery.isLoading) return <h1>Loading request</h1>;
    if (characterQuery.isError) return <h1>Request error</h1>;

    const {name, image, species, origin} = characterQuery.data

    return (
        <div className="container">
            <CharacterProfile
                id={ id } 
                name={ name }
                image={ image }
                species={ species }
                origin={ origin }
            />
        </div>
    );
};

export default CharacterPage;
