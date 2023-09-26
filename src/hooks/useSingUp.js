import { useMutation } from '@apollo/client';

import { SING_UP } from '../graphql/queries';

const singUp = () => {
  const [mutate, result] = useMutation(SING_UP);

  const singUp = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { user: { username, password } },
    });
    return data;
  };
  return [singUp, result];
};
export default singUp;
