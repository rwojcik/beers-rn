import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { RootStoreProvider, rootStore } from './src/models/RootStore';
import 'mobx-react-lite/batchingForReactNative';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigator from './src/components/navigator/Navigator';

export default function App() {
    return (
        <RootStoreProvider value={rootStore}>
            <PaperProvider>
                <StatusBar style="auto" />
                <Navigator />
            </PaperProvider>
        </RootStoreProvider>
    );
}
