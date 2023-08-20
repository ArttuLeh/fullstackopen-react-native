import { ScrollView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';

const AppBar = () => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: theme.container.backgroundColor,
    },
  });
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab />
      </ScrollView>
    </View>
  );
};

export default AppBar;
