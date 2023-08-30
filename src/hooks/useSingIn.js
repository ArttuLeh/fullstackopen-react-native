import { useMutation } from '@apollo/client';
import { SING_IN } from '../graphql /queries';

const useSingIn = () => {
  const [mutate, result] = useMutation(SING_IN);

  const singIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });
    const token = data.authenticate.accessToken;
    console.log(token);
    return token;
  };

  return [singIn, result];
};
export default useSingIn;
