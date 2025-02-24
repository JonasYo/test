import { RouteObject } from "react-router-dom";

export type CustomRouteObject = RouteObject & {
  auth: boolean;
};
