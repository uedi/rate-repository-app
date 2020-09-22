import React from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
    tab: {
        
    }    
})

const AppBarTab = ({ tabText, onPress }) => {
    return (
        <TouchableWithoutFeedback style={styles.tab} onPress={onPress}>
            <Text color={'white'} fontSize={'subheading'}>{tabText}</Text>
        </TouchableWithoutFeedback>
    )
}

export default AppBarTab