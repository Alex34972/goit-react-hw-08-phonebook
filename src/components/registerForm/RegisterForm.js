import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './RegisterForm.module.css';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'email':
        setEmail(e.currentTarget.value);
        break;
      case 'password':
        setPassword(e.currentTarget.value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Fill all fields!');
      return;
    }
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Form className={s.registForm} autoComplete="off" onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        name="name"
        placeholder="Username"
        value={name}
        onChange={handleChange}
        className={s.textField}
      />
      <Form.Control
        type="email"
        name="email"
        placeholder="Enter email"
        value={email}
        onChange={handleChange}
        className={s.textField}
      />
      <Form.Control
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
        className={s.textField}
      />
      <Button className={s.button} type="submit">
        Register
      </Button>
    </Form>
  );
}
export default RegisterForm;
