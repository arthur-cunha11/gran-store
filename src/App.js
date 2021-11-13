import "./App.css";
import { VerticalMenu, Dashboard } from "./components";
import { mobileDevice } from "./utils";

const App = () => {
  const isMobile = mobileDevice();

  return (
    <div className="wrapper">
      <div className="row">
        {!isMobile && (
          <div className="col-2">
            <VerticalMenu />
          </div>
        )}
        <div className="col">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
