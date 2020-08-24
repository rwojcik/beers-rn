import React, { useEffect, useCallback } from 'react';
import { Text, FlatList, useWindowDimensions } from 'react-native';
import { useRootStore } from '../../models/RootStore';
import { BeerListItem, ITEM_HEIGHT, MAX_WIDTH } from './BeerListItem';
import { observer } from 'mobx-react-lite';
import { Beer } from '../../models/Beer';
import { Instance } from 'mobx-state-tree';

export const BeerListView = observer(function BeerListViewObserver() {
    const {
        beers: { count, data, fetch, state, hasMore },
    } = useRootStore();

    const { width } = useWindowDimensions();

    const columns = Math.max(1, width / MAX_WIDTH - 1);

    const handleFetch = useCallback(() => {
        if (hasMore) {
            fetch();
        }
    }, [fetch, hasMore]);

    useEffect(() => {
        handleFetch();
    }, [fetch, handleFetch]);

    return (
        <>
            <Text>BeerListView</Text>
            <Text>State: {state}</Text>
            <Text>No. of items: {count()}</Text>
            <FlatList<Instance<typeof Beer>>
                data={data}
                renderItem={(item) => <BeerListItem beer={item.item} key={item.item.id} />}
                keyExtractor={(item) => item.id.toString()}
                refreshing={state === 'pending'}
                getItemLayout={(_data, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}
                onEndReached={handleFetch}
                onEndReachedThreshold={0.1}
                numColumns={columns}
            />
        </>
    );
});
