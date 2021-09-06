import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { getContactList } from '../../redux/selectors';
import { useEffect } from 'react';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactList);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.ContactList}>
      {contacts.map(
        ({ id, name, number }) =>
          name.length > 0 &&
          number.length > 0 && (
            <li className={s.contact} key={id}>
              {name}: {number}
              <button
                className={s.contactBtn}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ),
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
export default ContactList;
