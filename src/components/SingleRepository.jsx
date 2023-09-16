import { useParams } from 'react-router-native';
import { View, Pressable, StyleSheet, Linking } from 'react-native';

import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import Text from './Text';
import theme from '../theme';

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  if (loading) {
    return <Text>loading..</Text>;
  }

  const styles = StyleSheet.create({
    flexContainer: {
      display: 'flex',
      backgroundColor: 'white',
      padding: 5,
    },
    pressable: {
      backgroundColor: theme.colors.primary,
      margin: 5,
      height: 40,
      borderRadius: 3,
    },
    text: {
      color: 'white',
      textAlign: 'center',
      padding: 10,
    },
  });

  return (
    <>
      <RepositoryItem repository={repository} />
      <View style={styles.flexContainer}>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            Linking.openURL(repository.url);
          }}
        >
          <Text fontWeight="bold" fontSize="body" style={styles.text}>
            Open in GitHub
          </Text>
        </Pressable>
      </View>
    </>
  );
};
export default SingleRepository;
