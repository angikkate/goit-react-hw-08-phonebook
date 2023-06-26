import { Formik, ErrorMessage, Form, Field } from 'formik';
import { object, string, number } from 'yup';

import {
  selectContacts,
  selectIsContactAdded
} from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'components/Spinner';
import { toast } from 'react-toastify';
import css from './ContactForm.module.css';

const schema = object({
  name: string().required(),
  number: number('please write a number').required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsContactAdded);
  const dispatch = useDispatch();

  const onFormSubmit = (values, { resetForm }) => {
    const loweredName = values.name.toLowerCase();
    
    if (contacts.find(contact => contact.name.toLowerCase() === loweredName)) {
      toast.error(`${values.name} is already exist in contacts`);
    } else if (contacts.find(contact => contact.number === values.number)) {
      toast.error(`${values.number} is already exist in contacts`);
    } else {
      dispatch(addContact(values)) &&
        toast.success(`${values.name} has been added to your contacts`) &&
        resetForm();
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onFormSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span className={css.span}>Name</span>
            <Field
              className={css.input}
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />
          </label>
          <label className={css.label}>
            <span className={css.span}>Number</span>
            <Field className={css.input}
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" component="div" />
          </label>
          <button className={css.button} type="submit" disabled={isLoading}>
            Add contact
            {isLoading && (
              <Spinner
                width={20}
                height={20}
                color="#3b5998"
                styles={{
                  position: 'absolute',
                  top: '50%',
                  marginTop: -10,
                  right: 6,
                }}
              />
            )}
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;