import { renderRoutes } from "react-router-config";
import { configRoutes, getRoutes } from "../../routes";

function App() {
  return (
    renderRoutes(getRoutes(configRoutes))
  );
}

export default App;
