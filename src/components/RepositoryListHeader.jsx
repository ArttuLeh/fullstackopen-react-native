import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';

const RepositoryListHeader = ({ handleValueChange, selectedValue }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    pickerStyles: {
      width: 300,
      height: 'auto',
    },
  });

  return (
    <View style={styles.container}>
      <Picker
        style={styles.pickerStyles}
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
      >
        <Picker.Item label="Lastest repositories" value="lastest" />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
      </Picker>
    </View>
  );
};
export default RepositoryListHeader;
