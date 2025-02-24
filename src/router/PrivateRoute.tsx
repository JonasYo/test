import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

// NOTE: _props is passed to remove the typescript error in AppRouter for public and private routes
// Stackoverflow Links:
// https://stackoverflow.com/questions/55129942/typescript-styled-component-error-type-children-string-has-no-properti
// https://stackoverflow.com/questions/68434985/ts2559-type-children-element-has-no-properties-in-common-with-type-i

type PrivateRouteProps = PropsWithChildren;
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  // TODO: Add basic structure for private routes like navbar, sidebar etc here
  return (
    <>
      {sessionStorage.getItem("access_token") ? (
        children
      ) : (
        // Redirect to login component
        <Navigate to="/auth/signin" />
      )}
    </>
  );
};

export default PrivateRoute;
