import React, { useState } from 'react'
import { View, StyleSheet, TouchableNativeFeedback, Dimensions } from 'react-native'
import Text from './Text'
import { Ionicons } from '@expo/vector-icons'
import theme from '../theme'
import { Menu } from 'react-native-paper'

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
    }

})

const latestText = 'Latest repositories'
const highestText = 'Highest rated repositories'
const lowestText = 'Lowest rated repositories'

const RepositoryOrder = () => {
    const [visible, setVisible] = React.useState(false)
    const [selectedText, setSelectedText] = useState(latestText)
    const openMenu = () => setVisible(true)
    const closeMenu = () => setVisible(false)

    const setTextAndClose = (text) => {
        setSelectedText(text)
        closeMenu()
    }

    const setLatest = () => {
        setTextAndClose(latestText)
    }

    const setHighest = () => {
        setTextAndClose(highestText)
    }

    const setLowest = () => {
        setTextAndClose(lowestText)
    }

    return (
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
    )
}

export default RepositoryOrder