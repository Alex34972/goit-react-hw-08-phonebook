import shortid from 'shortid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { getContactsItems } from '../../redux/selectors';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.error();
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const contacts = useSelector(state => getContactsItems(state));
  const handleAppend = () => {
    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts`);
      reset();
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  return (
    <>
      <Form className={s.forma}>
        <Form.Control
          className={s.inputForm}
          type="text"
          name="name"
          placeholder="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          id={nameInputId}
          onChange={handleChange}
        />

        <Form.Control
          className={s.inputForm}
          type="tel"
          name="number"
          placeholder="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          id={numberInputId}
          onChange={handleChange}
        />
        <Button
          size="sm"
          className={s.formBtn}
          type="button"
          onClick={handleAppend}
        >
          Add contact
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
