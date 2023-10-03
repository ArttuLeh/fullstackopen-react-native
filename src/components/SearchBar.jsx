import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'white',
  },
});

const SearchBar = ({ setSearchQuery }) => {
  return (
    <Searchbar
      style={styles.searchBar}
      placeholder="Search"
      onChangeText={(query) => setSearchQuery(query)}
    />
  );
};
export default SearchBar;
