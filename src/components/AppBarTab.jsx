import { StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: theme.container.height,
    backgroundColor: theme.container.backgroundColor,
  },
  text: {
    paddingTop: theme.containerText.paddingTop,
    paddingLeft: theme.containerText.paddingLeft,
    flexDirection: 'row',
  },
  singIn: {
    paddingLeft: 10,
  },
});

const AppBarTab = ({ children }) => {
  return (
    <>
      <View style={styles.container}>
        {children}
        <View style={styles.text}>
          <Link to="/">
            <Text color="header" fontWeight="bold" fontSize="subheading">
              Repositories
            </Text>
          </Link>
          <Link to="/singin">
            <Text
              style={styles.singIn}
              color="header"
              fontWeight="bold"
              fontSize="subheading"
            >
              Sing In
            </Text>
          </Link>
        </View>
      </View>
    </>
  );
};
export default AppBarTab;
