import React from 'react'
import SignUpForm from './SignUpForm'

const SignUp = () => {

    const onSubmit = async ({ username, password }) => {
        console.log(username, password)
    }

    return (
        <SignUpForm onSubmit={onSubmit} />
    )
}

export default SignUp