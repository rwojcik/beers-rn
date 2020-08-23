import { Beer } from '../models/Beer';
import { Instance } from 'mobx-state-tree';

export const getBeers = async (page: number) => {
    const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}`);
    const json = (await response.json()) as Instance<typeof Beer>[];
    return json;
};
