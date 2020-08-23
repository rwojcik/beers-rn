import { types } from 'mobx-state-tree';
import { Value } from './Value';

export const Beer = types
    .model('Beer', {
        id: types.number,
        name: types.string,
        tagline: types.string,
        first_brewed: types.string,
        description: types.string,
        image_url: types.optional(types.string, 'https://images.punkapi.com/v2/keg.png', [null, undefined]),
        abv: types.number,
        ibu: types.maybeNull(types.number),
        target_fg: types.maybeNull(types.number),
        target_og: types.maybeNull(types.number),
        ebc: types.maybeNull(types.number),
        srm: types.maybeNull(types.number),
        ph: types.maybeNull(types.number),
        attenuation_level: types.maybeNull(types.number),
        volume: Value,
        boil_volume: Value,
        method: types.model('Method', {
            mash_temp: types.array(
                types.model('MashTemp', {
                    temp: Value,
                    duration: types.maybeNull(types.number),
                })
            ),
            fermentation: types.model('Fermentation', {
                temp: types.maybeNull(Value),
            }),
            twist: types.maybeNull(types.string),
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
            yeast: types.maybeNull(types.string),
        }),
        food_pairing: types.array(types.string),
        brewers_tips: types.string,
        contributed_by: types.string,
    })
    .actions(() => ({}));
