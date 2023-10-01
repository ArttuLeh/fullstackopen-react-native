import { useMutation } from '@apollo/client';
import { DELETE_REVIEW, GET_CURRENT_USER } from '../graphql/queries';

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async ({ id }) => {
    const data = await mutate({
      variables: { deleteReviewId: id },
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
  return [deleteReview, result];
};
export default useDeleteReview;
