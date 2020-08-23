import { types, flow, cast } from 'mobx-state-tree';
import { getBeers } from '../services/beersService';
import { Beer } from './Beer';

export const BeersStore = types
    .model('BeersStore', {
        data: types.array(Beer),
        state: types.enumeration('BeersState', ['initial', 'pending', 'done', 'error']),
        page: 1,
        hasMore: true,
    })
    .views((self) => ({
        count: () => self.data.length,
    }))
    .actions((self) => {
        const fetch = flow(function* () {
            if (!self.hasMore) {
                return;
            }
            self.state = 'pending';
            try {
                const newBeers: Unpacked<ReturnType<typeof getBeers>> = yield getBeers(self.page++);
                self.hasMore = newBeers.length > 0;
                self.data = cast([...self.data, ...newBeers]);
                self.state = 'done';
            } catch (error) {
                console.error('Failed to fetch projects', error);
                self.state = 'error';
            }
            return self.data.length;
        });
        return { fetch };
    });
