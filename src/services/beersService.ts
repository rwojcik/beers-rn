import { Beer } from '../models/Beer';
import { Instance } from 'mobx-state-tree';

export const getBeers = async (page: number) => {
    const response = await fetch(`https://api.punkapi.com/v2/beers?page=${page}`);
    const json = (await response.json()) as Instance<typeof Beer>[];
    return json;
};

export const getBeer = async (id: number) => {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    const json = (await response.json()) as Instance<typeof Beer>[];
    return json;
};

const DEVIATION_STEP = 15;

export const getSimilarBeers = async (ibu: number, ebc: number) => {
    let beers = [];
    let deviation = 0;
    do {
        deviation += DEVIATION_STEP;
        const ibu_gt = ibu * ((100 - deviation) / 100);
        const ibu_lt = ibu * ((100 + deviation) / 100);
        const ebc_gt = ebc * ((100 - deviation) / 100);
        const ebc_lt = ebc * ((100 + deviation) / 100);
        const response = await fetch(
            `https://api.punkapi.com/v2/beers/?ibu_gt=${ibu_gt}&ibu_lt=${ibu_lt}&ebc_gt=${ebc_gt}&ebc_lt=${ebc_lt}`
        );
        beers = (await response.json()) as Instance<typeof Beer>[];
    } while (beers.length < 3 && deviation < DEVIATION_STEP * 3);
    return beers;
};
