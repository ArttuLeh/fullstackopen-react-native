import { StyleSheet, View, Pressable } from 'react-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const CreateReviewForm = ({ onSubmit }) => {
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
    formikText: {
      height: 100,
    },
  });
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput
        style={styles.formikText}
        name="text"
        placeholder="Review"
        multiline
      />
      <Pressable style={styles.pressable} onPress={onSubmit}>
        <Text fontWeight="bold" fontSize="body" style={styles.text}>
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};
export default CreateReviewForm;
