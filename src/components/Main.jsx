import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SingIn from './SingIn';
import SingleRepositoryItem from './SingleRepositoryItem';

const Main = () => {
  const styles = StyleSheet.create({
    main: {
      backgroundColor: theme.main.backgroundColor,
      flexGrow: 1,
      flexShrink: 1,
    },
  });
  return (
    <View style={styles.main}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/singin" element={<SingIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/:id" element={<SingleRepositoryItem />} />
      </Routes>
    </View>
  );
};

export default Main;
