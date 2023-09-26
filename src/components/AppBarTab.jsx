import { Pressable, StyleSheet, View } from 'react-native';
import { Link, useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';

import useAuthStorage from '../hooks/useAuthStorage';
import Text from './Text';
import theme from '../theme';
import useCurrentUser from '../hooks/useCurrentUser';

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.appBarText.paddingTop,
    paddingLeft: theme.appBarText.paddingLeft,
    paddingBottom: theme.appBarText.paddingBottom,
    flexDirection: theme.appBarText.flexDirection,
  },
  text: {
    paddingRight: 15,
  },
});

const AppBarTab = () => {
  const loggedIn = useCurrentUser(false);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  console.log('loggedIn', loggedIn.userData);

  const logOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/');
  };

  return (
    <View style={styles.container}>
      <Link to="/">
        <Text
          style={styles.text}
          color="header"
          fontWeight="bold"
          fontSize="subheading"
        >
          Repositories
        </Text>
      </Link>
      {loggedIn.userData ? (
        <>
          <Link to="/createreview">
            <Text
              style={styles.text}
              color="header"
              fontWeight="bold"
              fontSize="subheading"
            >
              Create a review
            </Text>
          </Link>
          <Link to="myreview">
            <Text
              style={styles.text}
              color="header"
              fontWeight="bold"
              fontSize="subheading"
            >
              My review
            </Text>
          </Link>
          <Pressable onPress={logOut}>
            <Text
              style={styles.text}
              color="header"
              fontWeight="bold"
              fontSize="subheading"
            >
              Sing out
            </Text>
          </Pressable>
        </>
      ) : (
        <>
          <Link to="/singin">
            <Text
              style={styles.text}
              color="header"
              fontWeight="bold"
              fontSize="subheading"
            >
              Sing in
            </Text>
          </Link>
          <Link to="/singup">
            <Text
              style={styles.text}
              color="header"
              fontWeight="bold"
              fontSize="subheading"
            >
              Sing up
            </Text>
          </Link>
        </>
      )}
    </View>
  );
};
export default AppBarTab;
