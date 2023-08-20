import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';

const Main = () => {
  const styles = StyleSheet.create({
    main: {
      backgroundColor: theme.main.backgroundColor,
    },
  });
  return (
    <View style={styles.main}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
