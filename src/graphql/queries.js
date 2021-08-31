import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            totalCount
            edges {
                node {
                    id
                    ownerAvatarUrl
                    fullName
                    description
                    language
                    stargazersCount
                    forksCount
                    reviewCount
                    ratingAverage
                }
            }
        }
    }
`

export const AUTHORIZED_USER = gql`
    query {
        authorizedUser {
            id
            username
        }
    }
`

export const GET_REPOSITORY = gql`
    query repository($id: ID!) {
        repository(id: $id) {
            id
            ownerAvatarUrl
            fullName
            description
            language
            stargazersCount
            forksCount
            reviewCount
            ratingAverage
            url
        }
    }
`