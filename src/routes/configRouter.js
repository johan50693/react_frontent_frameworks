import PokeMemory from "../pages/PokeMemory";
import map from 'lodash/map';
import { Home } from "../pages/Home";
import { ConnectFour } from "../pages/ConnectFour";

export const configRoutes = [
    {
      name: 'Memory',
      path: "/",
      basePath: "/",
      component: PokeMemory,
      exact: true
    },
    {
      name: 'Home',
      path: "/home",
      basePath: "/home",
      component: Home,
      exact: true
    },
    {
      name: 'ConnectFour',
      path: "/connectfour",
      basePath: "/connectfour",
      component: ConnectFour,
      exact: true
    },
];

export const getRoutes = (basicRoutes) =>
  map(basicRoutes, ({ routes, path, basePath, ...route }) => ({
    path: `${path}`,
    basePath: `/${basePath}`,
    routes: getRoutes(routes),
    ...route,
  }))