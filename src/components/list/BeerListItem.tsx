import React from 'react';
import { Beer } from '../../models/Beer';
import { Button, Card, Paragraph } from 'react-native-paper';
import { StyleSheet, View, Image } from 'react-native';
export const ITEM_HEIGHT = 490;
export const MAX_WIDTH = 430;

type BeerListItemProps = {
    beer: typeof Beer.Type;
    onOpenDetails: (id: number, name: string) => void;
};

export const BeerListItem = React.memo(function BeerListItemMemo({
    beer: { id, image_url, name, tagline, description },
    onOpenDetails,
}: BeerListItemProps) {
    function handlePress() {
        onOpenDetails(id, name);
    }

    return (
        <View style={styles.root}>
            <Card style={styles.container} elevation={5} onTouchEnd={handlePress}>
                <Card.Title title={name} subtitle={tagline} />
                <Image style={styles.image} source={{ uri: image_url }} />
                <Card.Content style={styles.content}>
                    <Paragraph numberOfLines={6}>{description}</Paragraph>
                </Card.Content>
                <Card.Actions style={styles.actions}>
                    <Button onTouchEnd={handlePress}>Details</Button>
                </Card.Actions>
            </Card>
        </View>
    );
});

const styles = StyleSheet.create({
    root: {
        height: ITEM_HEIGHT,
        maxWidth: MAX_WIDTH,
    },
    container: {
        flex: 1,
        width: '90%',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    actions: {
        justifyContent: 'flex-end',
    },
    content: {
        flex: 1,
    },
    image: {
        backgroundColor: 'lightgrey',
        resizeMode: 'center',
        height: 175,
    },
});
