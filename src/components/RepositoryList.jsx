import { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import RepositoryListHeader from './RepositoryListHeader';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  navigate,
  handleValueChange,
  selectedValue,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => (
        <RepositoryListHeader
          handleValueChange={handleValueChange}
          selectedValue={selectedValue}
        />
      )}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/${item.id}`)}>
          <RepositoryItem repository={item} />
        </Pressable>
      )}
      keyExtractor={repositoryNodes.id}
    />
  );
};

const RepositoryList = () => {
  const [selectedValue, setSelectedValue] = useState('lastest');
  const { repositories } = useRepositories(selectedValue);
  const navigate = useNavigate();

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      navigate={navigate}
      selectedValue={selectedValue}
      handleValueChange={handleValueChange}
    />
  );
};

export default RepositoryList;
