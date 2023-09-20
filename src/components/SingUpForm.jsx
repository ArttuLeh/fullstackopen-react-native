import { View, Pressable, StyleSheet } from 'react-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const SingUpForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
    },
    pressable: {
      backgroundColor: theme.colors.primary,
      margin: 10,
      height: 40,
      borderRadius: 3,
    },
    text: {
      color: 'white',
      textAlign: 'center',
      padding: 10,
    },
  });
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        secureTextEntry={true}
        name="password"
        placeholder="Password"
      />
      <FormikTextInput
        secureTextEntry={true}
        name="passwordConfirm"
        placeholder="Password confirmation"
      />
      <Pressable style={styles.pressable} onPress={onSubmit}>
        <Text fontWeight="bold" fontSize="body" style={styles.text}>
          Sing up
        </Text>
      </Pressable>
    </View>
  );
};
export default SingUpForm;
