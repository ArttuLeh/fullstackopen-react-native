import { StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.appBarText.paddingTop,
    paddingLeft: theme.appBarText.paddingLeft,
    paddingBottom: theme.appBarText.paddingBottom,
    flexDirection: theme.appBarText.flexDirection,
  },
  text: {
    paddingLeft: 10,
  },
});

const AppBarTab = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text color="header" fontWeight="bold" fontSize="subheading">
          Repositories
        </Text>
      </Link>
      <Link to="/singin">
        <Text
          style={styles.text}
          color="header"
          fontWeight="bold"
          fontSize="subheading"
        >
          Sing In
        </Text>
      </Link>
    </View>
  );
};
export default AppBarTab;
