import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Menu, PaperProvider } from 'react-native-paper';

const styles = StyleSheet.create({
  menu: {
    justifyContent: 'center',
    alignItems: 'start',
    backgroundColor: 'white',
    marginTop: 4,
    marginBottom: 4,
    width: 130,
    height: 46,
    borderRadius: 25,
  },
});

const SortingMenu = ({ setSelectedValue }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View style={styles.menu}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button style={styles.button} onPress={openMenu}>
              Select an item..
            </Button>
          }
        >
          <Menu.Item
            onPress={() => {
              setSelectedValue('lastest');
              closeMenu(true);
            }}
            title="Lastest repositories"
          />
          <Menu.Item
            onPress={() => {
              setSelectedValue('highest');
              closeMenu(true);
            }}
            title="Highest rated repositories"
          />
          <Menu.Item
            onPress={() => {
              setSelectedValue('lowest');
              closeMenu(true);
            }}
            title="Lowest rated repositories"
          />
        </Menu>
      </View>
    </PaperProvider>
  );
};
export default SortingMenu;
