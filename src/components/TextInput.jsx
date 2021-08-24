import React from 'react'
import { TextInput as NativeTextInput, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    inputField: {
        alignSelf: 'stretch',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        padding: 15,
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5
    },
    errorBorder: {
        borderColor: theme.colors.error
    }
})

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [styles.inputField, error && styles.errorBorder, style]

    return (
        <NativeTextInput style={textInputStyle} {...props} />
    )
}

export default TextInput