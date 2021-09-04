import PokeMemory from "../pages/PokeMemory";
import map from 'lodash/map';

export const configRoutes = [
    {
      name: 'Memory',
      path: "/",
      basePath: "/",
      component: PokeMemory,
      exact: true
    }
];

export const getRoutes = (basicRoutes) =>
  map(basicRoutes, ({ routes, path, basePath, ...route }) => ({
    path: `${path}`,
    basePath: `/${basePath}`,
    routes: getRoutes(routes),
    ...route,
  }))