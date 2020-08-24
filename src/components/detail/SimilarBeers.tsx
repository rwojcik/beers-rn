import React from 'react';
import { Instance } from 'mobx-state-tree';
import { Beer } from '../../models/Beer';
import { Text, View, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import { SimilarBeer } from './SimilarBeer';

type SimilarBeersProps = {
    similar: Instance<typeof Beer>[];
    onOpenDetails: (id: number, name: string) => void;
};

export const SimilarBeers = observer(function SimilarBeersObserver({ similar, onOpenDetails }: SimilarBeersProps) {
    if (similar.length === 0) {
        return null;
    }

    return (
        <>
            <Text>Similar beers</Text>
            <View style={styles.row}>
                {similar.map((beer) => (
                    <SimilarBeer key={beer.id} beer={beer} onOpenDetails={onOpenDetails} />
                ))}
            </View>
        </>
    );
});

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    surface: {
        width: 90,
        height: 110,
        elevation: 4,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
    },
    caption: {
        marginVertical: 2,
        marginHorizontal: 2,
        textAlign: 'center',
    },
});
