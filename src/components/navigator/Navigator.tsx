import React from 'react';
import 'mobx-react-lite/batchingForReactNative';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BeerDetail } from '../detail/BeerDetail';
import { BeerListView } from '../list/BeerListView';
import { enableScreens } from 'react-native-screens';

enableScreens();

export type RootStackParamList = {
    Home: undefined;
    Details: { id: number; name: string };
};
const Stack = createStackNavigator<RootStackParamList>();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={BeerListView} options={{ title: 'Beers' }} />
                <Stack.Screen
                    name="Details"
                    component={BeerDetail}
                    options={({ route }) => ({ title: route.params.name || 'Details' })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
