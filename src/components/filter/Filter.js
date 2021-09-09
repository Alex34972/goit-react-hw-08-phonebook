import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/actions';
import Form from 'react-bootstrap/Form';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const onFilter = event => dispatch(filterContacts(event.target.value));

  return (
    <Form className={s.filterBox}>
      <Form.Label className={s.filter}>Find contacts by name :</Form.Label>
      <Form.Control
        className={s.filterInput}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={onFilter}
      />
    </Form>
  );
};

export default Filter;
