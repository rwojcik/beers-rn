import React, { useMemo, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigator/Navigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRootStore } from '../../models/RootStore';
import { Headline, Caption, Surface, Paragraph } from 'react-native-paper';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Parameter } from './Parameter';
import { SimilarBeers } from './SimilarBeers';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

type BeerDetailProps = {
    route: ProfileScreenRouteProp;
    navigation: ProfileScreenNavigationProp;
};

export const BeerDetail = observer(function BeerDetailObserver({
    route: {
        params: { id: beerId },
    },
    navigation: { push },
}: BeerDetailProps) {
    const {
        beers: { byId },
        detailBeer: { data, fetch, similar },
    } = useRootStore();

    const beer = useMemo(() => (data?.id === beerId ? data : byId(beerId)), [beerId, byId, data]);

    useEffect(() => {
        fetch(beerId);
    }, [beerId, fetch]);

    const handleOpenDetails = useCallback(
        (id: number, name: string) => {
            push('Details', { id, name });
        },
        [push]
    );

    if (beer == null) {
        return null;
    }

    const { name, description, image_url, ibu, ebc, tagline } = beer;

    return (
        <ScrollView>
            <View style={styles.row}>
                <Surface style={styles.surface}>
                    <Image style={styles.image} source={{ uri: image_url }} />
                </Surface>
                <View style={styles.rightColumn}>
                    <Headline>{name}</Headline>
                    <Caption>{tagline}</Caption>
                    <Paragraph>{description}</Paragraph>
                    <View style={styles.parameterRow}>
                        <Parameter name="IBU">{ibu}</Parameter>
                        <Parameter name="EBC">{ebc}</Parameter>
                    </View>
                </View>
            </View>
            <View style={styles.similar}>
                <SimilarBeers similar={beer.id === beerId ? similar : []} onOpenDetails={handleOpenDetails} />
            </View>
        </ScrollView>
    );
});

const styles = StyleSheet.create({
    row: {
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row',
    },
    surface: {
        width: '40%',
        elevation: 4,
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
    },
    rightColumn: {
        marginLeft: 10,
        flex: 1,
    },
    parameterRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignContent: 'space-around',
    },
    similar: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
});
