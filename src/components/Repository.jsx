import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

const Repository = () => {
    const { id } = useParams()
    const { repository } = useRepository(id)
    return (
        <View style={styles.container}>
            { repository && <RepositoryItem item={repository} disableLink showGithub /> }
        </View>
        
    )
}

export default Repository