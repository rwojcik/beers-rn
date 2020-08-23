import React from 'react';
import { BeerListView } from '../list/BeerListView';
import { StyleSheet, View } from 'react-native';
import { TopBar } from './TopBar';
import { useTheme } from 'react-native-paper';

export function HomeView() {
    const {
        colors: { background },
    } = useTheme();
    const styles = makeStyles(background);
    return (
        <>
            <TopBar />
            <View style={styles.container}>
                <BeerListView />
            </View>
        </>
    );
}

const makeStyles = (bgColor: string) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: bgColor,
        },
    });
