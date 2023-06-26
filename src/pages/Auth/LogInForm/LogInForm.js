import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logIn } from 'redux/auth/auth-operations';
import { selectError } from 'redux/auth/auth-selectors';

import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import { toast } from 'react-toastify';
import css from '../index.module.css';

const schema = object({
  email: string().email().required(),
  password: string().required(),
});

const initialValues = { email: '', password: '' };

const LogInForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    error && toast.error('User not found, please try again');
  }, [error]);

  const onFormSubmit = values => {
    dispatch(logIn(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onFormSubmit}
    >
      <form className={css.form}>
        <label className={css.label}>
          Email
          <input className={css.input} type="email" name="email" required />
          <ErrorMessage name="email" component="div" />
        </label>

        <label className={css.label}>
          Password
          <input className={css.input} type="password" name="password" required />
          <ErrorMessage name="password" component="div" />
        </label>

        <button className={css.button} type="submit">log in</button>
      </form>
    </Formik>
  );
};

export default LogInForm;
