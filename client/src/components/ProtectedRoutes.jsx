// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
//   const { user } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (!user) {
//           return <Redirect to="/login" />;
//         }

//         if (roles && roles.indexOf(user.role) === -1) {
//           return <Redirect to="/" />;
//         }

//         return <Component {...props} />;
//       }}
//     />
//   );
// };

// export default ProtectedRoute;
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';

// const ProtectedRoute = ({ children, roles }) => {
//   const { user } = useContext(AuthContext);

//   if (!user || !roles.includes(user.role)) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default ProtectedRoute;
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
        user && roles.includes(user.role) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
