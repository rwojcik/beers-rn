import { types, flow } from 'mobx-state-tree';
import { getBeers } from '../services/beersService';
import { Beer } from './Beer';

export const BeersStore = types
    .model('BeersStore', {
        data: types.array(Beer),
        state: types.enumeration('BeersState', ['initial', 'pending', 'done', 'error']),
    })
    .views((self) => ({
        count: () => self.data.length,
    }))
    .actions((self) => {
        const fetch = flow(function* () {
            self.state = 'pending';
            try {
                self.data = yield getBeers();
                self.state = 'done';
            } catch (error) {
                console.error('Failed to fetch projects', error);
                self.state = 'error';
            }
            return self.data.length;
        });
        return { fetch };
    });
