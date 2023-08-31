import { useQuery } from '@apollo/client';

import { SING_OUT } from '../graphql /queries';

const useSingOut = () => {
  const { data, error, loading } = useQuery(SING_OUT, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return 'Loading..';
  }

  const singedIn = data.me;

  return { singedIn, loading, error };
};
export default useSingOut;
