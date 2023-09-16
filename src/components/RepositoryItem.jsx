import { View, StyleSheet } from 'react-native';
import RepositoryCounts from './RepositoryCounts';
import RepositoryInfo from './RepositoryInfo';

const RepositoryItem = ({ repository }) => {
  const styles = StyleSheet.create({
    flexContainer: {
      display: 'flex',
      backgroundColor: 'white',
      padding: 10,
    },
  });
  return (
    <View testID="repositoryItem" style={styles.flexContainer}>
      <RepositoryInfo repository={repository} />
      <RepositoryCounts repository={repository} />
    </View>
  );
};
export default RepositoryItem;
