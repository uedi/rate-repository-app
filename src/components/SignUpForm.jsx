import React from 'react'
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native'
import Text from './Text'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import theme from '../theme'
import * as yup from 'yup'

const initialValues = {
    username: '',
    password: '',
    confirmation: ''
}

const validationSchema = yup.object().shape({
    username: yup
    .string()
    .max(30, 'Length must be between 1 and 30')
    .required('Username is required'),
    password: yup
    .string()
    .min(5, 'Length must be between 5 and 50')
    .max(50, 'Length must be between 5 and 50')
    .required('Password is required'),
    confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Confirmation must match password')
    .required('Password confirmation is required')
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
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const SignUpFormContent = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name='username' placeholder='Username' />
            <FormikTextInput name='password' placeholder='Password' secureTextEntry />
            <FormikTextInput name='confirmation' placeholder='Password confirmation' secureTextEntry />
            <TouchableNativeFeedback onPress={onSubmit}>
                <View style={styles.button}>
                    <Text color='white' fontWeight='bold'>Sign up</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const SignUpForm = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <SignUpFormContent onSubmit={handleSubmit} />}
        </Formik>
    )
}

export default SignUpForm