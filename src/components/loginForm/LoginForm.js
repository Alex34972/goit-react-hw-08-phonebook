import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/operations';

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
    <>
      <h1 className="logTitle">Login Page</h1>
      <form className={s.loginForm} autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={s.textField}
          label="E-mail"
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className={s.textField}
          label="Password"
        />
        <button className={s.button} type="submit">
          Login
        </button>
      </form>
    </>
  );
}
export default LoginForm;
