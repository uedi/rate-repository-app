import React from 'react'
import { StyleSheet } from 'react-native'
import { useField } from 'formik'
import TextInput from './TextInput'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
    errorText: {
        marginLeft: 20,
        marginBottom: 10
    },
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

const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)
    const showError = meta.touched && meta.error

    const inputFieldStyles = [
        styles.inputField,
        showError && styles.errorBorder
    ]

    return (
        <>
            <TextInput 
                style={inputFieldStyles}
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
            />
            { showError && <Text color={'error'} style={styles.errorText}>{meta.error}</Text>}
        </>
    )
}

export default FormikTextInput