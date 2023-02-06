import axios from 'axios';
import { CharacterRequest } from './types';

const fetchCharacters = async (page: number) => {
    try {
        const result = await axios<CharacterRequest>(`https://rickandmortyapi.com/api/character?page=${page}`);
        return result.data.results;
    } catch (e) {
        console.log('newtwork error');
    }
};

export { fetchCharacters };
