import { Provider } from "react-redux";
import './App.scss';
import { store } from "./app/store";
import AntThemeConfig from "./components/AntThemeConfig.tsx";
import "./lib/i18n.ts";
import AppRouter from "./router/AppRouter";

// NOTE: Here, we can add all the globl providers for redux etc
function App() {
  return (
    <Provider store={store}>
      <AntThemeConfig>
        <AppRouter />
      </AntThemeConfig>
    </Provider>
  );
}

export default App;
