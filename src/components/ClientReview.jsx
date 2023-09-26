import { View, StyleSheet, FlatList } from 'react-native';

import useCurrentUser from '../hooks/useCurrentUser';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ClientReview = () => {
  const { userData } = useCurrentUser(true);

  const reviews = userData
    ? userData.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={reviews.id}
    />
  );
};
export default ClientReview;
