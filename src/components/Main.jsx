import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Route, Switch, Redirect } from 'react-router-native'
import RepositoryList from './RepositoryList'
import Repository from './Repository'
import SignIn from './SignIn'
import AppBar from './AppBar'
import theme from '../theme'
import CreateReview from './CreateReview'
import SignUp from './SignUp'
import MyReviews from './MyReviews'

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
                <Route path="/signUp" exact>
                    <SignUp />
                </Route>
                <Route path="/repositories/:id" exact>
                    <Repository />
                </Route>
                <Route path="/reviews/new" exact>
                    <CreateReview />
                </Route>
                <Route path="/myreviews" exact>
                    <MyReviews />
                </Route>
                <Redirect to="/" />
            </Switch>
        </View>
    )
}

export default Main