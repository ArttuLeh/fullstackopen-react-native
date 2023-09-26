import { useMutation } from '@apollo/client';

import { CREATE_REVIEW, GET_CURRENT_USER } from '../graphql/queries';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, rating, repositoryName, text }) => {
    const data = await mutate({
      variables: {
        review: {
          ownerName,
          rating: Number(rating),
          repositoryName,
          text,
        },
      },
      refetchQueries: [
        {
          query: GET_CURRENT_USER,
          variables: {
            includeReviews: true,
          },
        },
      ],
    });
    return data;
  };

  return [createReview, result];
};
export default useCreateReview;
