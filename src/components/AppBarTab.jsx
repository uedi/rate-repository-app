import React from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'

const styles = StyleSheet.create({
    tab: {
        marginRight: 15
    }    
})

const AppBarTab = ({ tabText, link }) => {
    return (
        <Link to={link} component={TouchableWithoutFeedback }>
            <Text style={styles.tab} color={'white'} fontSize={'subheading'}>{tabText}</Text>
        </Link>
    )
}

export default AppBarTab