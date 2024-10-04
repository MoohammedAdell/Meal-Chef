import "./App.css";
import Home from "./component/Home";
import { MealProvider } from "./component/MealContext";
function App() {
  return (
    <MealProvider>
      <Home />
    </MealProvider>
  );
}

export default App;
