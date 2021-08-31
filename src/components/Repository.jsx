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
    const { repository } = useRepository(id)
    
    if(!repository) {
        return null
    }

    const reviews = repository.reviews
    ? repository.reviews.edges.map(edge => edge.node)
    : []

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <RepositoryItem item={repository} disableLink showGithub />}
            ListHeaderComponentStyle={{ marginBottom: 10 }}
            ItemSeparatorComponent={ItemSeparator}
        />
    )
}

export default Repository