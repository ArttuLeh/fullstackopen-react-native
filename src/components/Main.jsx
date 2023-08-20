import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';

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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
