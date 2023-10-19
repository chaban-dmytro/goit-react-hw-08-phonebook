import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import { Button } from '@mui/material';

export default function LoginView() {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    console.log(values);
    dispatch(login(values));
  };

  // const validationSchema = Yup.object().shape({
  //   name: Yup.string()
  //     .min(3, 'Your name must be more than 3 symbols!')
  //     .max(50, 'Your name is too long')
  //     .matches(
  //       /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
  //       'Name may contain only letters'
  //     )
  //     .required('Please write your name'),
  //   email: Yup.string()
  //     .min(3, 'Your name must be more than 3 symbols!')
  //     .max(50, 'Your name is too long')
  //     .required('Please write your email'),
  //   password: Yup.string()
  //     .min(7, 'Your name must be more than 3 symbols!')
  //     .max(20, 'Your name is too long')
  //     .required('Please write your password'),
  // });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      // validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field id="email" name="email" type="email" />
        <ErrorMessage name="email" component="span" />

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" type="password" />
        <ErrorMessage name="password" component="span" />

        <Button type="submit" variant="contained">
          Log in
        </Button>
      </Form>
    </Formik>
  );
}
