import { FlatList, StyleSheet, View } from 'react-native';
import { useParams } from 'react-router-native';

import useRepository from '../hooks/useRepository';
import SingleRepository from './SingleRepository';
import ReviewItem from './ReviewItem';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const Repository = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  if (loading) {
    return <Text>loading..</Text>;
  }

  const reviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <SingleRepository repository={repository} />}
    />
  );
};
export default Repository;
