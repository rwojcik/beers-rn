import { types, Instance, onSnapshot } from 'mobx-state-tree';
import { useContext, createContext } from 'react';
import { BeersStore } from './BeersStore';

export const RootModel = types.model('RootModel', {
    beers: BeersStore,
});

export const rootStore = RootModel.create({
    beers: { state: 'initial' },
});

export type RootInstance = Instance<typeof RootModel>;
export const RootStoreContext = createContext<null | RootInstance>(null);

export const RootStoreProvider = RootStoreContext.Provider;

export function useRootStore() {
    const store = useContext(RootStoreContext);
    if (store == null) {
        throw new Error('Store cannot be null, please add a context provider');
    }
    return store;
}
