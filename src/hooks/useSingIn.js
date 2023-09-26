import { useMutation } from '@apollo/client';
import { useApolloClient } from '@apollo/client';

import { SING_IN } from '../graphql/queries';
import useAuthStorage from './useAuthStorage';

const useSingIn = () => {
  const [mutate, result] = useMutation(SING_IN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const singIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });

    await authStorage.setAccessToken(data);
    apolloClient.resetStore();
    return data;
  };

  return [singIn, result];
};
export default useSingIn;
