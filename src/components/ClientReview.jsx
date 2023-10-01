import { View, StyleSheet, FlatList, Pressable, Alert } from 'react-native';
import { useNavigate } from 'react-router-native';

import useCurrentUser from '../hooks/useCurrentUser';
import useDeleteReview from '../hooks/useDeleteReview';
import ReviewItem from './ReviewItem';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  flexContainer: {
    display: 'flex',
    backgroundColor: 'white',
    padding: 5,
  },
  flexItem: {
    flexDirection: 'row',
  },
  pressableRepository: {
    backgroundColor: theme.colors.primary,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    height: 40,
    width: '45%',
    borderRadius: 3,
  },
  pressableDelete: {
    backgroundColor: 'red',
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    height: 40,
    width: '45%',
    borderRadius: 3,
  },
  text: {
    textAlign: 'center',
    paddingTop: 10,
    color: theme.colors.header,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const Buttons = ({ reviews }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();

  const handleDelete = () => {
    const id = reviews.id;

    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        { text: 'DELETE', onPress: () => deleteReview({ id }) },
        {
          text: 'CANCEL',
          onPress: () => console.log('canceled'),
        },
      ]
    );
  };

  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItem}>
        <Pressable
          style={styles.pressableRepository}
          onPress={() => {
            navigate(`/${reviews.repositoryId}`);
          }}
        >
          <Text fontWeight="bold" fontSize="body" style={styles.text}>
            View repository
          </Text>
        </Pressable>
        <Pressable style={styles.pressableDelete} onPress={handleDelete}>
          <Text fontWeight="bold" fontSize="body" style={styles.text}>
            Delete review
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const ClientReview = () => {
  const { userData } = useCurrentUser(true);

  const reviews = userData
    ? userData.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <>
          <ReviewItem review={item} />
          <Buttons reviews={item} />
        </>
      )}
      keyExtractor={reviews.id}
    />
  );
};
export default ClientReview;
