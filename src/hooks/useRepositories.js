import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
  switch (variables.orderBy) {
    case 'lastest':
      variables.orderBy = {
        sortValue: 'CREATED_AT',
        orderDirection: 'DESC',
      };
      break;
    case 'highest':
      variables.orderBy = {
        sortValue: 'RATING_AVERAGE',
        orderDirection: 'DESC',
      };
      break;
    case 'lowest':
      variables.orderBy = {
        sortValue: 'RATING_AVERAGE',
        orderDirection: 'ASC',
      };
      break;
    default:
      variables.orderBy;
  }

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      first: variables.first,
      orderBy: variables.orderBy.sortValue,
      orderDirection: variables.orderBy.orderDirection,
      searchKeyword: variables.searchKeyword,
    },
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        orderBy: variables.orderBy.sortValue,
        orderDirection: variables.orderBy.orderDirection,
        searchKeyword: variables.searchKeyword,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
