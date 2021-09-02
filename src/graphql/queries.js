import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
    query repositories(
        $after: String
        $first: Int
        $orderDirection: OrderDirection
        $orderBy: AllRepositoriesOrderBy
        $searchKeyword: String
    ) {
        repositories(
            after: $after
            first: $first
            orderDirection: $orderDirection
            orderBy: $orderBy
            searchKeyword: $searchKeyword
        ) {
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
                cursor
            }
            pageInfo {
                endCursor
                startCursor
                hasNextPage
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
            reviews {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                }
            }
        }
    }
`