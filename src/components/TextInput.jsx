import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
  },
  error: {
    borderColor: '#d73a4a',
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, error ? styles.error : false, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
