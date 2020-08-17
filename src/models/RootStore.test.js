import { rootStore } from './RootStore';

it('creates rootStore instance with beers store', () => {
    expect(rootStore.beers.state).toBe('initial');
    expect(rootStore.beers.data).toHaveLength(0);
});

it('creates rootStore instance and matches snapshot', () => {
    expect(rootStore).toMatchSnapshot();
});
