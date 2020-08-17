import React from 'react';
import { Beer } from '../../models/Beer';
import { Text } from 'react-native';

type BeerListItemProps = {
    beer: typeof Beer.Type;
};

export function BeerListItem({ beer }: BeerListItemProps) {
    return <Text>{beer.name}</Text>;
}
