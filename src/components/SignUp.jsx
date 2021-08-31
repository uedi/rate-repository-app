import React from 'react'
import SignUpForm from './SignUpForm'
import useSignIn from '../hooks/useSignIn'
import { useHistory } from 'react-router-native'
import { useMutation } from '@apollo/client'
import { SIGN_UP } from '../graphql/mutations'

const SignUp = () => {
    const [mutate] = useMutation(SIGN_UP)
    const [signIn] = useSignIn()
    const history = useHistory()

    const onSubmit = async ({ username, password }) => {
        try {
            const { data } = await mutate({ variables: { user: { username, password }}})
            if(data) {
                await signIn({ username, password})
                history.push('/')
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <SignUpForm onSubmit={onSubmit} />
    )
}

export default SignUp