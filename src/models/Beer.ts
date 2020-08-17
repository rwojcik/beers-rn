import { types } from 'mobx-state-tree';
import { Value } from './Value';

export const Beer = types
    .model('Beer', {
        id: types.number,
        name: types.string,
        tagline: types.string,
        first_brewed: types.string,
        description: types.string,
        image_url: types.string,
        abv: types.number,
        ibu: types.number,
        target_fg: types.number,
        target_og: types.number,
        ebc: types.number,
        srm: types.number,
        ph: types.number,
        attenuation_level: types.number,
        volume: Value,
        boil_volume: Value,
        method: types.model('Method', {
            mash_temp: types.array(
                types.model('MashTemp', {
                    temp: Value,
                    duration: types.number,
                })
            ),
            fermentation: types.model('Fermentation', {
                temp: Value,
            }),
            twist: types.null,
        }),
        ingredients: types.model('Ingredients', {
            malt: types.array(
                types.model('Malt', {
                    name: types.string,
                    amount: Value,
                })
            ),
            hops: types.array(
                types.model({
                    name: types.string,
                    amount: Value,
                    add: types.string,
                    attribute: types.string,
                })
            ),
            yeast: types.string,
        }),
        food_pairing: types.array(types.string),
        brewers_tips: types.string,
        contributed_by: types.string,
    })
    .actions(() => ({}));
