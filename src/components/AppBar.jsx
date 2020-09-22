import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarBackground,
        height: 100,
        alignItems: 'flex-end',
        padding: 20
    }
})

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab tabText={'Repositories'} onPress={() => null} />
        </View>
    )
}

export default AppBar