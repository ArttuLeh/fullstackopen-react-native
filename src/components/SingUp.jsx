import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

import SingUpForm from './SingUpForm';
import useSingUp from '../hooks/useSingUp';
import useSingIn from '../hooks/useSingIn';

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be at least 5 characters')
    .max(30, 'Username can be max 30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password can be max 50 characters')
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Password does not match')
    .required('Password confirmation is required'),
});

export const SingUpContainer = ({ singUp, singIn, navigate }) => {
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await singUp({ username, password });
      console.log('data', data);
      const logIn = await singIn({ username, password });
      console.log('sing', logIn);
      navigate('/');
    } catch (e) {
      console.log('error', e);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SingUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SingUp = () => {
  const [singUp] = useSingUp();
  const [singIn] = useSingIn();
  const navigate = useNavigate();

  return (
    <SingUpContainer singUp={singUp} singIn={singIn} navigate={navigate} />
  );
};
export default SingUp;
