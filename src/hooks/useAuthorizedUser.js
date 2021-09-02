import { useQuery } from '@apollo/client'
import { AUTHORIZED_USER } from '../graphql/queries'

const useAuthorizedUser = (variables) => {

    const { data, error, loading } = useQuery(AUTHORIZED_USER, {
        fetchPolicy: 'cache-and-network',
        variables
    })

    return {
        user: data ? data.authorizedUser : undefined,
        error,
        loading
    }
}

export default useAuthorizedUser