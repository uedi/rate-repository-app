import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'
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

const Repository = () => {
    const { id } = useParams()

    const variables = {
        id,
        first: 8
    }
    const { repository, fetchMore } = useRepository(variables)
    
    if(!repository) {
        return null
    }

    const reviews = repository.reviews
    ? repository.reviews.edges.map(edge => edge.node)
    : []

    const onEndReach = () => {
        fetchMore()
    }

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <RepositoryItem item={repository} disableLink showGithub />}
            ListHeaderComponentStyle={{ marginBottom: 10 }}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        />
    )
}

export default Repository