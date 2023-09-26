import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SingIn from './SingIn';
import SingleRepositoryItem from './SingleRepositoryItem';
import CreateReview from './CreateReview';
import SingUp from './SingUp';
import ClientReview from './ClientReview';

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.main.backgroundColor,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.main}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/singin" element={<SingIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/:id" element={<SingleRepositoryItem />} exact />
        <Route path="/createreview" element={<CreateReview />} />
        <Route path="/singup" element={<SingUp />} exact />
        <Route path="/myreview" element={<ClientReview />} exact />
      </Routes>
    </View>
  );
};

export default Main;
