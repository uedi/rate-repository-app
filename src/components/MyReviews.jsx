import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ReviewItem from './ReviewItem'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    separator: {
        height: 10,
    }
})

const ItemSeparator = () => <View style={styles.separator} />

const MyReviews = () => {

    const reviews = []

    const onEndReach = () => {
    }

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        />
    )
}

export default MyReviews