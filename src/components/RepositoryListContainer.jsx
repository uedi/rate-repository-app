import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'

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

const RepositoryListContainer = ({ repositories }) => {

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

export default RepositoryListContainer