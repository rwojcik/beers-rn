import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useRootStore } from '../../models/RootStore';
import { BeerListItem } from './BeerListItem';
import { observer } from 'mobx-react-lite';

export const BeerListView = observer(() => {
    const {
        beers: { count, data, fetch, state },
    } = useRootStore();

    useEffect(() => {
        fetch();
    }, [fetch]);

    return (
        <React.Fragment>
            <Text>BeerListView</Text>
            <Text>State: {state}</Text>
            <Text>No. of items: {count()}</Text>
            {data.map((beer) => (
                <BeerListItem beer={beer} key={beer.id} />
            ))}
        </React.Fragment>
    );
});
