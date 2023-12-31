import { View, StyleSheet } from 'react-native';

import RepositoryCounts from './RepositoryCounts';
import RepositoryInfo from './RepositoryInfo';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    backgroundColor: 'white',
    padding: 10,
  },
});

const RepositoryItem = ({ repository }) => {
  return (
    <View testID="repositoryItem" style={styles.flexContainer}>
      <RepositoryInfo repository={repository} />
      <RepositoryCounts repository={repository} />
    </View>
  );
};
export default RepositoryItem;
