import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import useAuthorizedUser from '../hooks/useAuthorizedUser'
import ReviewItem from './ReviewItem'
import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'

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

    const [mutate] = useMutation(DELETE_REVIEW)

    const { user, fetchMore, refetch } = useAuthorizedUser({
        first: 25,
        includeReviews: true
    })

    if(!user) {
        return null
    }

    const reviews = user.reviews
    ? user.reviews.edges.map(edge => edge.node)
    : []

    const onEndReach = () => {
        fetchMore()
    }

    const deleteReview = async (id) => {
        try {
            const { data } = await mutate({ variables: { id: id } })
            if(data && data.deleteReview) {
                refetch()
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} myReviewsView deleteReview={deleteReview} />}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        />
    )
}

export default MyReviews