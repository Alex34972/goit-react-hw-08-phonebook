import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import s from './LoginForm.module.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    switch (e.currentTarget.name) {
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
    if (email.trim() === '' || password.trim() === '') {
      alert('Fill all fields!');
      return;
    }
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <Form className={s.loginForm} autoComplete="off" onSubmit={handleSubmit}>
      <Form.Control
        type="email"
        name="email"
        placeholder="Enter email"
        value={email}
        onChange={handleChange}
        className={s.textField}
        label="E-mail"
      />

      <Form.Control
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
        className={s.textField}
        label="Password"
      />
      <Button className={s.button} type="submit">
        Login
      </Button>
    </Form>
  );
}
export default LoginForm;
