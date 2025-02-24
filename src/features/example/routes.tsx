import PageLayout from "../../components/PageLayout";
import { CustomRouteObject } from "../../types/router";
import ExampleCounter from "./components/ExampleComponent";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Example from "./pages/ExamplePage";
import Home from "./pages/Home";
import Service from "./pages/Service";

// auth field is used to determine whether a route should be rendered as public or private
// auth: true => PrivateRoute, auth:false => PublicRoute
const routes: CustomRouteObject[] = [
  {
    auth: false,
    path: "/",
    element: <PageLayout />,
    children: [
      {
        // path: "/home",
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  },
  {
    auth: false,
    path: "/example",
    element: <Example />,
    children: [{ path: "counter", element: <ExampleCounter /> }],
  },
];

export default routes;
