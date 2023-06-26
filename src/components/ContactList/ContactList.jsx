import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectFilteredContacts, selectIsContactsFetching } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import css from './ContactList.module.css';
import ContactItem from '../ContactItem';
import Spinner from '../Spinner';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsContactsFetching);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Spinner width={80} height={80} styles={{ margin: '0 auto' }} />
      ) : (
        <ul className={css.itemList}>
          {contacts.map(({ id, name, number }) => {
            return (
              <li className={css.item} key={id}>
                <ContactItem
                    id={id}
                    name={name}
                    number={number}
                />
              </li>
            );
          })}
        </ul>
      )}  
    </>    
  );
}

export default ContactList;