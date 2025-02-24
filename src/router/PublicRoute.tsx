import { PropsWithChildren } from "react";

type PublicRouteProps = PropsWithChildren;
const PublicRoute = ({ children }: PublicRouteProps) => {
  //  TODO: Add base structure for public routes such as login page etc
  return <>{children}</>;
};

export default PublicRoute;
