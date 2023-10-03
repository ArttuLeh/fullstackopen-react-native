import { View, Image, StyleSheet } from 'react-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  flexItemA: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  flexItemB: {
    flexDirection: 'column',
    flexShrink: 1,
    flexGrow: 1,
  },
  language: {
    backgroundColor: theme.colors.primary,
    marginBottom: 10,
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5,
  },
  fullName: {
    paddingBottom: 10,
  },
  description: {
    paddingBottom: 10,
  },
});

const RepositoryInfo = ({ repository }) => {
  return (
    <View style={styles.flexItemA}>
      <Image style={styles.image} source={{ uri: repository.ownerAvatarUrl }} />
      <View style={styles.flexItemB}>
        <View testID="fullName" style={styles.fullName}>
          <Text fontWeight="bold">{repository.fullName}</Text>
        </View>
        <View testID="description" style={styles.description}>
          <Text color="textSecondary">{repository.description}</Text>
        </View>
        <View testID="language" style={styles.language}>
          <Text color="header">{repository.language}</Text>
        </View>
      </View>
    </View>
  );
};
export default RepositoryInfo;
