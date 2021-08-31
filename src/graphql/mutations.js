import { gql } from '@apollo/client'

export const SIGN_IN = gql`
    mutation authorize($credentials: AuthorizeInput) {
        authorize(credentials: $credentials) {
            accessToken
        }
    }
`

export const CREATE_REVIEW = gql`
    mutation createReview($review: CreateReviewInput) {
        createReview(review: $review) {
            id
            text
            rating
            createdAt
            user {
                id
                username
            }
            repositoryId
        }
    }
`

export const SIGN_UP = gql`
    mutation createUser($user: CreateUserInput) {
        createUser(user: $user) {
            id
            username
        }
    }
`