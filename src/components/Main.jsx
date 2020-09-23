import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Route, Switch, Redirect } from 'react-router-native'
import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import AppBar from './AppBar'
import theme from '../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.appBackground
    }
})

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route path="/" exact>
                    <RepositoryList />
                </Route>
                <Route path="/signIn" exact>
                    <SignIn />
                </Route>
                <Redirect to="/" />
            </Switch>
        </View>
    )
}

export default Main