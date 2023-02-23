import { Provider } from "react-redux";
import Cards from "./components/Cards";
import Sum from "./components/Sum";
import store from "./store/index";
function App() {
  return (
    <Provider store={store}>
      <div className="mt-5 container mx-auto items-center">
        <Cards />
        <Sum />
      </div>
    </Provider>
  );
}

export default App;
