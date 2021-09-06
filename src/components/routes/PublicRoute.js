import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as selectors from '../../redux/selectors';

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthenticated = useSelector(selectors.isAuthenticated);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
