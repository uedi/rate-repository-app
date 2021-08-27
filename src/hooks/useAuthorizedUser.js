import { useQuery } from '@apollo/client'
import { AUTHORIZED_USER } from '../graphql/queries'

const useAuthorizedUser = () => {

    const { data, error, loading } = useQuery(AUTHORIZED_USER)

    return {
        user: data ? data.authorizedUser : undefined,
        error,
        loading
    }
}

export default useAuthorizedUser