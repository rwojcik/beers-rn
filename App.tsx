import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BeerListView } from './src/components/list/BeerListView';
import { RootStoreProvider, rootStore } from './src/models/RootStore';
import 'mobx-react-lite/batchingForReactNative';

export default function App() {
    return (
        <RootStoreProvider value={rootStore}>
            <View style={styles.container}>
                <BeerListView />
                <StatusBar style="auto" />
            </View>
        </RootStoreProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
