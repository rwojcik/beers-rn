import { types, flow, cast } from 'mobx-state-tree';
import { getBeer, getSimilarBeers } from '../services/beersService';
import { Beer } from './Beer';

export const DetailBeerStore = types
    .model('DetailBeerStore', {
        data: types.maybeNull(Beer),
        state: types.enumeration('DetailBeerState', ['initial', 'pending', 'finding_similar', 'done', 'error']),
        similar: types.array(Beer),
    })
    .views(() => ({}))
    .actions((self) => {
        const fetch = flow(function* (id: number) {
            if (self.data != null && self.data.id === id) {
                return self.data;
            }
            self.state = 'pending';
            self.similar = cast([]);
            try {
                const beers: Unpacked<ReturnType<typeof getBeer>> = yield getBeer(id);
                const beer = beers[0];
                self.data = beer;
                if (beer.ibu != null) {
                    self.state = 'finding_similar';
                    const similar: Unpacked<ReturnType<typeof getSimilarBeers>> = yield getSimilarBeers(
                        beer.ibu,
                        beer.abv
                    );
                    self.similar = cast(similar);
                }
                self.state = 'done';
                return beer;
            } catch (error) {
                self.state = 'error';
            }
        });
        return { fetch };
    });
