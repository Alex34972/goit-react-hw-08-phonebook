import Container from './components/container';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import registerForm from './components/registerForm';
import Phonebook from './Phonebook';
import { Switch } from 'react-router';
import PublicRoute from './components/routes/PublicRoute';

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <PublicRoute path="/" exact component={HomeView} />
        <PublicRoute
          path="/register"
          component={registerForm}
          restricted
          redirectTo="/contacts"
        />
      </Switch>
      <Phonebook />
    </Container>
  );
}

export default App;
