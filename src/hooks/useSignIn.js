import { useApolloClient, useMutation } from '@apollo/client'
import { SIGN_IN } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN)
    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient()

    const signIn = async ({ username, password }) => {
        const { data } = await mutate({ variables: { credentials: { username, password }}})
        await authStorage.setAccessToken(data.authorize.accessToken)
        await apolloClient.resetStore()
    }

    return [signIn, result]
}

export default useSignIn