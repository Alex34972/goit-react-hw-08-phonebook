import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/operations';
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
    <>
      <h1 className="regTitle">Register Page </h1>

      <form className="regForm" autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={s.textField}
        />

        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={s.textField}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className={s.textField}
        />
        <button className={s.button} type="submit">
          Register
        </button>
      </form>
    </>
  );
}
export default RegisterForm;
