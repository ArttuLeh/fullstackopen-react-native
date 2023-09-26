import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useDebounce } from 'use-debounce';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import RepositoryListHeader from './RepositoryListHeader';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  header: {
    zIndex: 1,
    elevation: 1,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { setSelectedValue, setSearchQuery } = this.props;

    return (
      <RepositoryListHeader
        setSelectedValue={setSelectedValue}
        setSearchQuery={setSearchQuery}
      />
    );
  };

  render() {
    const { repositories, navigate } = this.props;
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={this.renderHeader}
        ListHeaderComponentStyle={styles.header}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigate(`/${item.id}`)}>
            <RepositoryItem repository={item} />
          </Pressable>
        )}
        keyExtractor={repositoryNodes.id}
      />
    );
  }
}

const RepositoryList = () => {
  const [selectedValue, setSelectedValue] = useState('lastest');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchQueryDebounce] = useDebounce(searchQuery, 500);
  const { repositories } = useRepositories(selectedValue, searchQueryDebounce);
  const navigate = useNavigate();

  return (
    <RepositoryListContainer
      repositories={repositories}
      navigate={navigate}
      setSelectedValue={setSelectedValue}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default RepositoryList;
