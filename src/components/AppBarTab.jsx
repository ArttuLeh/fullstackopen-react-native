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
  const singedIn = useSingOut();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  console.log('singedIN', singedIn.singedIn);

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
      <Link to="/singin">
        {singedIn.singedIn === null ? (
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
