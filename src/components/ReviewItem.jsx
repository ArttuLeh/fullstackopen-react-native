import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  flexContainer: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    flexGrow: 1,
  },
  flexItem: {
    flexDirection: 'column',
    flexShrink: 1,
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    paddingTop: 5,
  },
  rating: {
    borderRadius: 25,
    height: 50,
    width: 50,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
  },
  ratingText: {
    alignSelf: 'center',
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    fontSize: 15,
  },
  date: {
    paddingTop: 5,
  },
});

const ReviewItem = ({ review }) => {
  const formatedDate = format(new Date(review.createdAt), 'dd.MM.yyyy');

  return (
    <View style={styles.flexContainer}>
      <View style={styles.rating}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.flexItem}>
        <View style={styles.user}>
          <Text fontWeight="bold">{review.user.username}</Text>
        </View>
        <View style={styles.date}>
          <Text>{formatedDate}</Text>
        </View>
        <View style={styles.text}>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};
export default ReviewItem;
