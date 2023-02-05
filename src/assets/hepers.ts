import axios from 'axios';
import { CharacterRequest } from './types';

const fetchRMData = async (num: number | string = '', type = '') => {
    const typeOpt = type && '?page=';
    try {
        const { results }: CharacterRequest = await axios(`https://rickandmortyapi.com/api/character/${typeOpt}${num}`);
        return results;
    } catch (e) {
        console.log('newtwork error');
    }
};

export { fetchRMData };
