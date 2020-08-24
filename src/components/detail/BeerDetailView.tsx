import React, { useMemo } from 'react';
import { Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigator/Navigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRootStore } from '../../models/RootStore';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

type BeerDetailViewProps = {
    route: ProfileScreenRouteProp;
    navigation: ProfileScreenNavigationProp;
};

export const BeerDetailView = observer(function BeerDetailViewObserver({
    route: {
        params: { id: beerId },
    },
}: BeerDetailViewProps) {
    const {
        beers: { byId },
    } = useRootStore();

    const beer = useMemo(() => byId(beerId), [beerId, byId]);

    return (
        <>
            <Text>BeerDetailView</Text>
        </>
    );
});
