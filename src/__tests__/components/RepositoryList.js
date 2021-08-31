import React from 'react'
import { render } from '@testing-library/react-native'
import RepositoryListContainer from '../../components/RepositoryListContainer'

const repositories = {
    totalCount: 8,
    pageInfo: {
        hasNextPage: true,
        endCursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
        startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
    },
    edges: [
        {
            node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                    'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        {
            node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                    'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
        },
    ],
}

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />)

            const firstNode = repositories.edges[0].node
            const secondNode = repositories.edges[1].node
            
            const names = getAllByTestId('name')
            expect(names[0]).toHaveTextContent(firstNode.fullName)
            expect(names[1]).toHaveTextContent(secondNode.fullName)

            const descriptions = getAllByTestId('description')
            expect(descriptions[0]).toHaveTextContent(firstNode.description)
            expect(descriptions[1]).toHaveTextContent(secondNode.description)

            const languages = getAllByTestId('language')
            expect(languages[0]).toHaveTextContent(firstNode.language)
            expect(languages[1]).toHaveTextContent(secondNode.language)

            const forks = getAllByTestId('Forks')
            expect(forks[0]).toHaveTextContent('1.6k')
            expect(forks[1]).toHaveTextContent(secondNode.forksCount)

            const stars = getAllByTestId('Stars')
            expect(stars[0]).toHaveTextContent('21.9k')
            expect(stars[1]).toHaveTextContent('1.8k')

            const ratings = getAllByTestId('Rating')
            expect(ratings[0]).toHaveTextContent(firstNode.ratingAverage)
            expect(ratings[1]).toHaveTextContent(secondNode.ratingAverage)

            const reviews = getAllByTestId('Reviews')
            expect(reviews[0]).toHaveTextContent(firstNode.reviewCount)
            expect(reviews[1]).toHaveTextContent(secondNode.reviewCount)
      })
    })
  })