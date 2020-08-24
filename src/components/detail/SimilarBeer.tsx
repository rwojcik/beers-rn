import React from 'react';
import { Instance } from 'mobx-state-tree';
import { Beer } from '../../models/Beer';
import { StyleSheet, Image } from 'react-native';
import { Surface, Caption } from 'react-native-paper';

type SimilarBeersProps = {
    beer: Instance<typeof Beer>;
    onOpenDetails: (id: number, name: string) => void;
};

export const SimilarBeer = function SimilarBeersObserver({
    beer: { id, image_url, name },
    onOpenDetails,
}: SimilarBeersProps) {
    const handleTouchEnd = () => {
        onOpenDetails(id, name);
    };

    return (
        <Surface style={styles.surface} onTouchEnd={handleTouchEnd}>
            <Image style={styles.image} source={{ uri: image_url }} />
            <Caption style={styles.caption} numberOfLines={1}>
                {name}
            </Caption>
        </Surface>
    );
};

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
