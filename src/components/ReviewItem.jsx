import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'
import { format } from 'date-fns'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        flexDirection: 'row'
    },
    score: {
        marginRight: 20,
        height: 50,
        width: 50,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    review: {
        flex: 1
    },
    date: {
        color: 'gray',
        marginBottom: 5
    }

})

const ReviewItem = ({ review }) => {
    const dateStr = review.createdAt ? Date.parse(review.createdAt) : null
    const date = dateStr ? format(dateStr, 'dd.MM.yyyy') : ''
    return (
        <View style={styles.container}>
            <View style={styles.score}>
                <Text
                    fontWeight='bold'
                    color='primary'
                    fontSize='subheading'
                >{review.rating}</Text>
            </View>
            <View style={styles.review}>
                <Text fontWeight='bold'>{review.user.username}</Text>
                <Text style={styles.date}>{date}</Text>
                <Text>{review.text}</Text>
            </View>
            

        </View>
    )
}

export default ReviewItem