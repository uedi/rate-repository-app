import React, { useState } from 'react'
import { View, StyleSheet, TouchableNativeFeedback, Dimensions } from 'react-native'
import Text from './Text'
import { Ionicons } from '@expo/vector-icons'
import theme from '../theme'
import { Menu, Searchbar } from 'react-native-paper'

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    menu: {
        width: Dimensions.get('window').width - 100
    },
    searchContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 5
    }

})

const latestText = 'Latest repositories'
const highestText = 'Highest rated repositories'
const lowestText = 'Lowest rated repositories'

const RepositoryOrder = ({ setOrder, setSearch }) => {
    const [visible, setVisible] = React.useState(false)
    const [selectedText, setSelectedText] = useState(latestText)
    const [searchText, setSearchText] = useState('')
    const openMenu = () => setVisible(true)
    const closeMenu = () => setVisible(false)

    const setTextAndClose = (text) => {
        setSelectedText(text)
        closeMenu()
    }

    const setLatest = () => {
        setOrder({orderBy: 'CREATED_AT'})
        setTextAndClose(latestText)
    }

    const setHighest = () => {
        setOrder({orderBy: 'RATING_AVERAGE'})
        setTextAndClose(highestText)
    }

    const setLowest = () => {
        setOrder({
            orderBy: 'RATING_AVERAGE',
            orderDirection: 'ASC'
        })
        setTextAndClose(lowestText)
    }

    const handleSearchTextChange = value => {
        setSearchText(value)
        setSearch(value)
    }

    return (
        <>
            <View style={styles.searchContainer}>
                <Searchbar
                    placeholder='Search'
                    onChangeText={handleSearchTextChange}
                    value={searchText}
                />
            </View>
            <TouchableNativeFeedback onPress={openMenu}>
                <View style={styles.container}>
                    <Text>{selectedText}</Text>
                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={{ x: 50, y: 200}}
                        style={styles.menu}
                    >
                        <Menu.Item disabled title='Select an item...' />
                        <Menu.Item onPress={setLatest} title={latestText} />
                        <Menu.Item onPress={setHighest} title={highestText} />
                        <Menu.Item onPress={setLowest} title={lowestText} />
                    </Menu>
                    <Ionicons name='caret-down-outline' size={22} color={theme.colors.textSecondary} />
                </View>
                
            </TouchableNativeFeedback>
        </>
    )
}

export default RepositoryOrder