import { render, screen } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      render(<RepositoryListContainer repositories={repositories} />);
      const repositoryItems = screen.getAllByTestId('repositoryItem');
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
      const fullName = screen.getAllByTestId('fullName');
      const [firstFullName, secondFullName] = fullName;
      const description = screen.getAllByTestId('description');
      const [firstDescription, secondDescription] = description;
      const language = screen.getAllByTestId('language');
      const [firstLanguage, secondLanguage] = language;
      const forksCount = screen.getAllByTestId('forksCount');
      const [firstForksCount, secondForksCount] = forksCount;
      const stargazersCount = screen.getAllByTestId('stargazersCount');
      const [firstStargazersCount, secondStargazersCount] = stargazersCount;
      const ratingAverage = screen.getAllByTestId('ratingAverage');
      const [firstRatingAverage, secondRatingAverage] = ratingAverage;
      const reviewCount = screen.getAllByTestId('reviewCount');
      const [firstReviewCount, secondReviewCount] = reviewCount;

      expect(firstRepositoryItem).toHaveTextContent('jaredpalmer/formik');
      expect(secondRepositoryItem).toHaveTextContent(
        'async-library/react-async'
      );

      expect(firstFullName).toHaveTextContent('jaredpalmer/formik');
      expect(secondFullName).toHaveTextContent('async-library/react-async');

      expect(firstDescription).toHaveTextContent(
        'Build forms in React, without the tears'
      );
      expect(secondDescription).toHaveTextContent(
        'Flexible promise-based React data loader'
      );

      expect(firstLanguage).toHaveTextContent('TypeScript');
      expect(secondLanguage).toHaveTextContent('JavaScript');

      expect(firstForksCount).toHaveTextContent('1.6k');
      expect(secondForksCount).toHaveTextContent('0.1k');

      expect(firstStargazersCount).toHaveTextContent('21.9k');
      expect(secondStargazersCount).toHaveTextContent('1.8k');

      expect(firstRatingAverage).toHaveTextContent('88');
      expect(secondRatingAverage).toHaveTextContent('72');

      expect(firstReviewCount).toHaveTextContent('3');
      expect(secondReviewCount).toHaveTextContent('3');
    });
  });
});
