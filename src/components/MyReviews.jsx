import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import useAuthorizedUser from '../hooks/useAuthorizedUser'
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

    const { user } = useAuthorizedUser({
        includeReviews: true
    })

    if(!user) {
        return null
    }

    const reviews = user.reviews
    ? user.reviews.edges.map(edge => edge.node)
    : []

    const onEndReach = () => {
    }

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} useRepositoryName />}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        />
    )
}

export default MyReviews