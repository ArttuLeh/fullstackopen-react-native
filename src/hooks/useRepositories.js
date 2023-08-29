import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql /queries';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return 'Loading..';
  }

  const repositories = data.repositories;

  return { repositories, loading, error };
};

export default useRepositories;
