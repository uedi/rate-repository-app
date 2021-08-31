import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'
import useAuthorizedUser from '../hooks/useAuthorizedUser'
import useSignOut from '../hooks/useSignOut'

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

    const { user } = useAuthorizedUser()
    const { signOut } = useSignOut()

    const handleSignout = async () => {
        signOut()
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab tabText={'Repositories'} link={'/'} />
                {!user && <AppBarTab tabText={'Sign in'} link={'/signIn'} />}
                {user && <AppBarTab tabText={'Create a review'} link={'/reviews/new'} />}
                {user && <AppBarTab tabText={'Sign out'} onPress={handleSignout}/>}
            </ScrollView>
        </View>
    )
}

export default AppBar