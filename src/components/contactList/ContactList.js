import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { getContactList } from '../../redux/selectors';
import { useEffect } from 'react';
import { IoIosCall } from 'react-icons/io';
import { BsFillTrashFill } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactList);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(
        ({ id, name, number }) =>
          name.length > 0 &&
          number.length > 0 && (
            <li className={s.contact} key={id}>
              <IoIosCall className={s.icons} />
              {name}: {number}
              <Button
                size="sm"
                variant="danger"
                className={s.contactBtn}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                <BsFillTrashFill />
              </Button>
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
