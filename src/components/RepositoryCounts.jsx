import Text from './Text';
import { StyleSheet, View } from 'react-native';

const RepositoryInfo = ({ repositories }) => {
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
  return (
    <View style={styles.flexItem}>
      <View style={styles.stars}>
        <Text style={styles.text} fontWeight="bold">
          {(repositories.stargazersCount / 1000).toFixed(1)}k
        </Text>
        <Text style={styles.text} color="textSecondary">
          Stars
        </Text>
      </View>
      <View style={styles.forks}>
        <Text style={styles.text} fontWeight="bold">
          {(repositories.forksCount / 1000).toFixed(1)}k
        </Text>
        <Text style={styles.text} color="textSecondary">
          Forks
        </Text>
      </View>
      <View style={styles.reviews}>
        <Text style={styles.text} fontWeight="bold">
          {repositories.reviewCount}
        </Text>
        <Text style={styles.text} color="textSecondary">
          Reviews
        </Text>
      </View>
      <View style={styles.raiting}>
        <Text style={styles.text} fontWeight="bold">
          {repositories.ratingAverage}
        </Text>
        <Text style={styles.text} color="textSecondary">
          Raiting
        </Text>
      </View>
    </View>
  );
};
export default RepositoryInfo;
