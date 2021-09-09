import ContactForm from '../../components/contactForm';
import Filter from '../../components/filter';
import { useSelector } from 'react-redux';
import ContactList from '../../components/contactList';
import Loader from '../../components/loader/Loader';
import { getContactsLoading, getUserName } from '../../redux/selectors';

export default function Phonebook() {
  const name = useSelector(getUserName);
  const isLoading = useSelector(getContactsLoading);
  return (
    <div>
      <h2>
        Phonebook <b>{name}</b>
      </h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
}
