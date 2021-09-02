import React from 'react'
import { View, StyleSheet, TouchableNativeFeedback, Alert } from 'react-native'
import { useHistory } from 'react-router-native'
import Text from './Text'
import theme from '../theme'
import { format } from 'date-fns'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
    },
    mainArea: {
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
    },
    buttons: {
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
})

const ActionButton = ({ title, color, onPress }) => (
    <TouchableNativeFeedback
        onPress={onPress}
    >
        <View style={[styles.button, { backgroundColor: color }]}>
            <Text color='white' fontWeight='bold' fontSize='subheading'>{title}</Text>
        </View>
    </TouchableNativeFeedback>
)

const ReviewItem = ({ review, myReviewsView, deleteReview }) => {

    const history = useHistory()

    const dateStr = review.createdAt ? Date.parse(review.createdAt) : null
    const date = dateStr ? format(dateStr, 'dd.MM.yyyy') : ''
    const topic = myReviewsView ? review.repository.fullName : review.user.username

    const viewRepository = () => {
        history.push(`/repositories/${review.repository.id}`)
    }

    const confirmDeleteReview = () => (
        Alert.alert(
            'Delete review',
            'Are you sure you want to delete this review',
            [
                {
                    text: 'Cancel',
                    onPress: () => {}
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        deleteReview(review.id)
                    }
                }
            ]
        )
    )

    return (
        <View style={styles.container}>
            <View style={styles.mainArea}>
                <View style={styles.score}>
                    <Text
                        fontWeight='bold'
                        color='primary'
                        fontSize='subheading'
                    >{review.rating}</Text>
                </View>
                <View style={styles.review}>
                    <Text fontWeight='bold'>{topic}</Text>
                    <Text style={styles.date}>{date}</Text>
                    <Text>{review.text}</Text>
                </View>
            </View>
            { myReviewsView &&
                <View style={styles.buttons}>
                    <ActionButton
                        title='View repository'
                        color={theme.colors.primary}
                        onPress={viewRepository}
                    />
                    <View style={{ width: 20 }} />
                    <ActionButton
                        title='Delete review'
                        color={theme.colors.error}
                        onPress={confirmDeleteReview}
                    />
                </View>
            }
        </View>
    )
}

export default ReviewItem