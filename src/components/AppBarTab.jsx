import { StyleSheet, View, Pressable } from 'react-native';
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
  },
});

const AppBarTab = ({ children }) => {
  return (
    <>
      <View style={styles.container}>
        {children}
        <View style={styles.text}>
          <Pressable>
            <Text color="header" fontWeight="bold" fontSize="subheading">
              Repositories
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};
export default AppBarTab;
