import Container from './components/container';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import Phonebook from './Phonebook';
import { Switch } from 'react-router';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <PublicRoute path="/" exact component={HomeView} />
        <PublicRoute
          path="/register"
          component={RegisterForm}
          restricted
          redirectTo="/contacts"
        />
        <PublicRoute
          path="/login"
          component={LoginForm}
          restricted
          redirectTo="/contacts"
        />
        <PrivateRoute
          path="/contacts"
          component={Phonebook}
          redirectTo="/login"
        />
      </Switch>
    </Container>
  );
}

export default App;
