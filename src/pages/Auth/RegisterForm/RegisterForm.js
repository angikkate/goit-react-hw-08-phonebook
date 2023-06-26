import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectError } from 'redux/auth/auth-selectors';
import { register } from 'redux/auth/auth-operations';

import { Formik, ErrorMessage, Form, Field } from 'formik';
import { object, string } from 'yup';

import { toast } from 'react-toastify';
import css from '../index.module.css';

const schema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required(),
});

const initialValues = { name: '', email: '', password: '' };

const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    error &&
      toast.error(
        'it seems that such a user already exists, try another email'
      );
  }, [error]);

  const onFormSubmit = values => {
    dispatch(register(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onFormSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name" required />
          <ErrorMessage name="name" component="div" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" required />
          <ErrorMessage name="email" component="div" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" required />
          <ErrorMessage name="password" component="div" />
        </label>
        <button className={css.button} type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
