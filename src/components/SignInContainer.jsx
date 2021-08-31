import React from 'react'
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native'
import Text from './Text'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import theme from '../theme'
import * as yup from 'yup'

const initialValues = {
    username: '',
    password: ''
}

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required')
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 20
    },
    button: {
        backgroundColor: theme.colors.primary,
        alignSelf: 'stretch',
        padding: 20,
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20
    },
    buttonText: {
        alignSelf: 'center'
    }
})

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name='username' placeholder='Username' />
            <FormikTextInput name='password' placeholder='Password' secureTextEntry />
            <TouchableNativeFeedback onPress={onSubmit} style={styles.button}>
                <View style={styles.button}>
                    <Text style={styles.buttonText} color={'white'} fontWeight='bold'>Sign in</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const SignInContainer = ({ onSubmit }) => {
    return (
        <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    )
}

export default SignInContainer