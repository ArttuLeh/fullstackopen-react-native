import { useQuery } from '@apollo/client';

import { GET_REOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const { data, error, loading } = useQuery(GET_REOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { repositoryId: id },
  });

  const repository = data?.repository;

  return { repository, loading, error };
};
export default useRepository;
