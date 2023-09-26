import SortingMenu from './SortingMenu';
import SearchBar from './SearchBar';

const RepositoryListHeader = ({ setSelectedValue, setSearchQuery }) => {
  return (
    <>
      <SearchBar setSearchQuery={setSearchQuery} />
      <SortingMenu setSelectedValue={setSelectedValue} />
    </>
  );
};
export default RepositoryListHeader;
