import React, { useEffect, useCallback } from 'react';
import { Text, FlatList, useWindowDimensions } from 'react-native';
import { useRootStore } from '../../models/RootStore';
import { BeerListItem, MAX_WIDTH, ITEM_HEIGHT } from './BeerListItem';
import { observer } from 'mobx-react-lite';
import { Beer } from '../../models/Beer';
import { Instance } from 'mobx-state-tree';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/Navigator';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type BeerListViewProps = {
    route: ProfileScreenRouteProp;
    navigation: ProfileScreenNavigationProp;
};

export const BeerListView = observer(function BeerListViewObserver({ navigation: { navigate } }: BeerListViewProps) {
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

    const handleOpenDetails = useCallback(
        (id: number, name: string) => {
            navigate('Details', { id, name });
        },
        [navigate]
    );

    return (
        <>
            <Text>BeerListView</Text>
            <Text>State: {state}</Text>
            <Text>No. of items: {count()}</Text>
            <FlatList<Instance<typeof Beer>>
                data={data}
                renderItem={(item) => (
                    <BeerListItem onOpenDetails={handleOpenDetails} beer={item.item} key={item.item.id} />
                )}
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
