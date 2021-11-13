import "./App.css";
import { VerticalMenu, Dashboard } from "./components";
import { mobileDevice } from "./utils";

const App = () => {
  const isMobile = mobileDevice();

  return (
    <>
      <div className="row">
        {!isMobile && (
          <div className="col-2 vertical-menu">
            <VerticalMenu />
          </div>
        )}
        <div className="col dashboard">
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default App;
