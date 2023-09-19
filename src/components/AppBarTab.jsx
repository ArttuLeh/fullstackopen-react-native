import { Pressable, StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';
import { useApolloClient } from '@apollo/client';

import useSingOut from '../hooks/useSingOut';
import useAuthStorage from '../hooks/useAuthStorage';
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
  const loggedIn = useSingOut();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  console.log('loggedIn', loggedIn.loggedIn);

  const logOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <Link to="/">
        <Text color="header" fontWeight="bold" fontSize="subheading">
          Repositories
        </Text>
      </Link>
      {loggedIn.loggedIn ? (
        <Link to="/createreview">
          <Text
            style={styles.text}
            color="header"
            fontWeight="bold"
            fontSize="subheading"
          >
            Create a Review
          </Text>
        </Link>
      ) : null}
      <Link to="/singin">
        {loggedIn.loggedIn === null ? (
          <Text
            style={styles.text}
            color="header"
            fontWeight="bold"
            fontSize="subheading"
          >
            Sing In
          </Text>
        ) : (
          <Pressable onPress={logOut}>
            <Text
              style={styles.text}
              color="header"
              fontWeight="bold"
              fontSize="subheading"
            >
              Sing Out
            </Text>
          </Pressable>
        )}
      </Link>
    </View>
  );
};
export default AppBarTab;
