import { Formik } from 'formik';
import SingInForm from './SingInForm';

const initialValues = {
  name: '',
  password: '',
};
const SingIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SingInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};
export default SingIn;
