import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const SearchBar = ({ setSearchQuery }) => {
  const styles = StyleSheet.create({
    searchBar: {
      backgroundColor: 'white',
    },
  });

  return (
    <Searchbar
      style={styles.searchBar}
      placeholder="Search"
      onChangeText={(query) => setSearchQuery(query)}
    />
  );
};
export default SearchBar;
