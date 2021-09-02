import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'
import RepositoryOrder from './RepositoryOrder'

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

const RepositoryListContainer = ({ repositories, setOrder, setSearch, onEndReach }) => {

    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []
    
    return (
        <>  
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={renderItem}
                ListHeaderComponent={<RepositoryOrder setOrder={setOrder} setSearch={setSearch} />}
                onEndReached={onEndReach}
                onEndReachedThreshold={0.5}
            />
        </>
    )
}

export default RepositoryListContainer