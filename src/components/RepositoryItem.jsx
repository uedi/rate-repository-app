import React from 'react'
import { View, Image, StyleSheet, Pressable, TouchableNativeFeedback } from 'react-native'
import * as Linking from 'expo-linking'
import { useHistory } from 'react-router-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    infoContainer: {
        padding: 20,
        flexDirection: 'row'
    },
    infoColumn: {
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'column',
    },
    repositoryDescriptionText: {
        marginBottom: 5,
        marginTop: 5
    },
    languageBox: {
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        padding: 5,
        borderRadius: 5
    },
    authorImage: {
        width: 50,
        height: 50
    },
    statistics: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20
    },
    statisticBox: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    githubButton: {
        backgroundColor: theme.colors.primary,
        alignSelf: 'stretch',
        padding: 20,
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
    githubButtonText: {
        alignSelf: 'center'
    }
})

const showNumber = (number) => {
    if(number < 1000) {
        return number
    }

    return `${(number/1000).toFixed(1)}k`
}

const StatisticBox = ({ value, label }) => (
    <View style={styles.statisticBox}>
        <Text testID={label} fontWeight='bold'>{value}</Text>
        <Text>{label}</Text>
    </View>
)

const RepositoryItem = ({ item, disableLink, showGithub }) => {
    const history = useHistory()
    return (
        <Pressable style={styles.container}
            onPress={() => !disableLink && history.push(`/repositories/${item.id}`)}
        >
            <View style={styles.infoContainer}>
                <Image 
                    style={styles.authorImage}
                    source={{ uri: item.ownerAvatarUrl }}
                />
                <View style={styles.infoColumn}>
                    <Text testID='name' fontWeight='bold'>{item.fullName}</Text>
                    <Text testID='description' style={styles.repositoryDescriptionText}>{item.description}</Text>
                    <View style={styles.languageBox}>
                        <Text testID='language' color='white'>{item.language}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.statistics}>
                <StatisticBox value={showNumber(item.stargazersCount)} label={'Stars'}/>
                <StatisticBox value={showNumber(item.forksCount)} label={'Forks'}/>
                <StatisticBox value={showNumber(item.reviewCount)} label={'Reviews'}/>
                <StatisticBox value={showNumber(item.ratingAverage)} label={'Rating'}/>
            </View>
            { showGithub &&
                <TouchableNativeFeedback
                    onPress={() => Linking.openURL(item.url)}
                >
                    <View style={styles.githubButton}>
                        <Text style={styles.githubButtonText} color={'white'} fontWeight='bold'>Open in Github</Text>
                    </View>
                </TouchableNativeFeedback>
            }
        </Pressable>
    )
}

export default RepositoryItem