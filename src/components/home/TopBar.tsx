import React from 'react';
import { Appbar } from 'react-native-paper';

export function TopBar() {
    return (
        <Appbar.Header>
            <Appbar.Content title="Beers" subtitle="In react-native" />
        </Appbar.Header>
    );
}
