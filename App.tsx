import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { RootStoreProvider, rootStore } from './src/models/RootStore';
import 'mobx-react-lite/batchingForReactNative';
import { Provider as PaperProvider } from 'react-native-paper';
import { HomeView } from './src/components/home/HomeView';

export default function App() {
    return (
        <RootStoreProvider value={rootStore}>
            <PaperProvider>
                <HomeView />
                <StatusBar style="auto" />
            </PaperProvider>
        </RootStoreProvider>
    );
}
