import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Section from '../../components/Section';

const PhoneBook = () => {
  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>  
    
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default PhoneBook;
