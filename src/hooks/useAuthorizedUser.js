import { useQuery } from '@apollo/client'
import { AUTHORIZED_USER } from '../graphql/queries'

const useAuthorizedUser = (variables) => {

    const { data, error, loading, fetchMore, ...result } = useQuery(AUTHORIZED_USER, {
        fetchPolicy: 'cache-and-network',
        variables
    })

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.authorizedUser.reviews.pageInfo.hasNextPage

        if(!canFetchMore) {
            return
        }

        fetchMore({
            variables: {
                after: data.authorizedUser.reviews.pageInfo.endCursor,
                ...variables
            }
        })
    }

    return {
        user: data ? data.authorizedUser : undefined,
        error,
        loading,
        fetchMore: handleFetchMore,
        ...result
    }
}

export default useAuthorizedUser