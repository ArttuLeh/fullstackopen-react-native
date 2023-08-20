import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const RepositoryInfo = ({ repositories }) => {
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
  return (
    <View style={styles.flexItemA}>
      <Image
        style={styles.image}
        source={{ uri: repositories.ownerAvatarUrl }}
      />
      <View style={styles.flexItemB}>
        <View style={styles.fullName}>
          <Text fontWeight="bold">{repositories.fullName}</Text>
        </View>
        <View style={styles.description}>
          <Text color="textSecondary">{repositories.description}</Text>
        </View>
        <View style={styles.language}>
          <Text color="header">{repositories.language}</Text>
        </View>
      </View>
    </View>
  );
};
export default RepositoryInfo;
