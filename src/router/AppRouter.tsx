import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import routes from "./routes";

const router = createBrowserRouter(
  routes.map((route) => {
    const { auth, element, ...rest } = route;
    if (auth) {
      return {
        ...rest,
        element: <PrivateRoute>{element}</PrivateRoute>,
      };
    }
    return {
      ...rest,
      element: <PublicRoute>{element}</PublicRoute>,
    };
  })
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
