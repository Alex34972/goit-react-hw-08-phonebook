import { Suspense, lazy } from 'react';
import Container from './components/container';
import AppBar from './components/AppBar';
import Loader from './components/loader/Loader';
import { Switch } from 'react-router';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const PhonebookView = lazy(() => import('./views/PhoneBookView/Phonebook'));

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Suspense fallback={<Loader />}>
          <PublicRoute path="/" exact component={HomeView} />
          <PublicRoute
            path="/register"
            component={RegisterView}
            restricted
            redirectTo="/contacts"
          />
          <PublicRoute
            path="/login"
            component={LoginView}
            restricted
            redirectTo="/contacts"
          />
          <PrivateRoute
            path="/contacts"
            component={PhonebookView}
            redirectTo="/login"
          />
        </Suspense>
      </Switch>
    </Container>
  );
}

export default App;
