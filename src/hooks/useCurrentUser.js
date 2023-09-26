import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';

const useCurrentUser = (includeReviews) => {
  const { data, loading, error } = useQuery(GET_CURRENT_USER, {
    variables: {
      includeReviews,
    },
  });

  if (loading) {
    return 'Loading..';
  }
  const userData = data.me;

  return { userData, loading, error };
};
export default useCurrentUser;
