import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
type ParameterProps = {
    children: number | null;
    name: string;
};

export function Parameter({ children, name }: ParameterProps) {
    if (children == null) {
        return null;
    }

    return (
        <View style={styles.root}>
            <Text style={styles.name}>{name} :</Text>
            <Text>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
    },
});
