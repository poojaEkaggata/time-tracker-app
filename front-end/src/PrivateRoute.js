import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, isAuthenticated }) => 
{
  return isAuthenticated ? ( <Route element={element} /> ) : ( <Navigate to="/" replace /> );
};

export default PrivateRoute;

/* import React from 'react';
import { Route } from 'react-router-dom';
const PrivateRoute = ({ element: Element, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      loggedIn ? (
        <Element {...props} />
      ) : 
      null
    }
  />
);
export default PrivateRoute; */
