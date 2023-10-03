import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Custom PrivateRoute component to protect routes
const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
