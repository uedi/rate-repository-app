import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'

const styles = StyleSheet.create({
    separator: {
        height: 10
    },
    container: {
        flex: 1
    }
})

const ItemSeparator = () => <View style={styles.separator} />

const renderItem = ({item}) => (
    <RepositoryItem item={item} />
)

const RepositoryList = () => {
    const { repositories } = useRepositories()

    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []
    
    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderItem}
        />
    )
}

export default RepositoryList