import React from 'react'
import { View, StyleSheet, TouchableNativeFeedback,
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard
} from 'react-native'
import Text from './Text'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import theme from '../theme'
import * as yup from 'yup'

const initialValues = {
    owner: '',
    name: '',
    rating: '',
    review: ''
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 10
    },
    button: {
        backgroundColor: theme.colors.primary,
        alignSelf: 'stretch',
        borderRadius: 5,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginTop: 10
    }
})

const validationSchema = yup.object().shape({
    owner: yup.string().required('Repository owner name is required'),
    name: yup.string().required('Repository name is required'),
    rating: yup.number().min(0, 'Between 0 and 100').max(100, 'Between 0 and 100').required('Rating is required')
})

const CreateReviewForm = ({ onSubmit }) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <View>
                    <FormikTextInput name='owner' placeholder='Repository owner name' />
                    <FormikTextInput name='name' placeholder='Repository name' />
                    <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
                    <FormikTextInput name='review' placeholder='Review' multiline={true} />
                    <TouchableNativeFeedback onPress={onSubmit}>
                        <View style={styles.button}>
                            <Text color='white' fontWeight='bold' fontSize='subheading'>Create a review</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const CreateReview = () => {

    const onSubmit = async (values) => {
        console.log(values)
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
        </Formik>
    )
}

export default CreateReview