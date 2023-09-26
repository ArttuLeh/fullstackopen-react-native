import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (selectedValue, searchQuery) => {
  switch (selectedValue) {
    case 'lastest':
      selectedValue = {
        orderBy: 'CREATED_AT',
        orderDirection: 'DESC',
      };
      break;
    case 'highest':
      selectedValue = {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'DESC',
      };
      break;
    case 'lowest':
      selectedValue = {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'ASC',
      };
      break;
    default:
      selectedValue;
  }

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: selectedValue.orderBy,
      orderDirection: selectedValue.orderDirection,
      searchKeyword: searchQuery,
    },
  });

  if (loading) {
    return 'Loading..';
  }

  const repositories = data.repositories;

  return { repositories, loading, error };
};

export default useRepositories;
