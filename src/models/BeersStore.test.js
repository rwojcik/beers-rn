import { BeersStore } from './BeersStore';

it('creates BeersStore instance', () => {
    const store = BeersStore.create({
        state: 'initial',
    });

    expect(store.state).toBe('initial');
});

it('throws on invalid BeersStore model', () => {
    expect(() => {
        BeersStore.create({});
    }).toThrow();
});
