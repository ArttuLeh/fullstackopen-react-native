import { StyleSheet, View } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  flexItem: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    flexGrow: 1,
  },
  stars: {
    marginLeft: 20,
    marginRight: 20,
  },
  forks: {
    marginLeft: 20,
    marginRight: 20,
  },
  reviews: {
    marginLeft: 20,
    marginRight: 20,
  },
  raiting: {
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    textAlign: 'center',
  },
});

const RepositoryInfo = ({ repository }) => {
  return (
    <View style={styles.flexItem}>
      <View testID="stargazersCount" style={styles.stars}>
        <Text style={styles.text} fontWeight="bold">
          {(repository.stargazersCount / 1000).toFixed(1)}k
        </Text>
        <Text style={styles.text} color="textSecondary">
          Stars
        </Text>
      </View>
      <View testID="forksCount" style={styles.forks}>
        <Text style={styles.text} fontWeight="bold">
          {(repository.forksCount / 1000).toFixed(1)}k
        </Text>
        <Text style={styles.text} color="textSecondary">
          Forks
        </Text>
      </View>
      <View testID="reviewCount" style={styles.reviews}>
        <Text style={styles.text} fontWeight="bold">
          {repository.reviewCount}
        </Text>
        <Text style={styles.text} color="textSecondary">
          Reviews
        </Text>
      </View>
      <View testID="ratingAverage" style={styles.raiting}>
        <Text style={styles.text} fontWeight="bold">
          {repository.ratingAverage}
        </Text>
        <Text style={styles.text} color="textSecondary">
          Raiting
        </Text>
      </View>
    </View>
  );
};
export default RepositoryInfo;
