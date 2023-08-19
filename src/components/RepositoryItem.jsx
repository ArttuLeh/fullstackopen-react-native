import { Text, View } from 'react-native';

const RepositoryItem = ({ repositories }) => {
  console.log(repositories.fullName);
  return (
    <View>
      <Text>Name: {repositories.fullName}</Text>
      <Text>Description: {repositories.description}</Text>
      <Text>Language: {repositories.language}</Text>
      <Text>Stars: {repositories.stargazersCount}</Text>
      <Text>Forks: {repositories.forksCount}</Text>
      <Text>Reviews: {repositories.reviewCount}</Text>
      <Text>Raiting: {repositories.ratingAverage}</Text>
    </View>
  );
};
export default RepositoryItem;
