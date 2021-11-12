import "./App.css";
import { VerticalMenu, Dashboard } from "./components";

const App = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <VerticalMenu />
        </div>
        <div className="col">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
