import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DeviceContext } from "./utils/deviceContext";
import { SuspenseWithFallback } from "./utils/common";

const Movies = React.lazy(() => import("./containers/Movies"));
const Header = React.lazy(() => import("./components/Header"));
const TVShows = React.lazy(() => import("./containers/TVShows"));
const Home = React.lazy(() => import("./containers/Home"));
import("./utils/firebase").then((firebaseUtil) => {
  firebaseUtil.initApp();
});

const App = () => {
  const { device } = React.useContext(DeviceContext);
  return (
    <DeviceContext.Provider
      value={{
        device: /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          navigator.userAgent.toLowerCase()
        )
          ? "mobile"
          : "desktop",
      }}
    >
      <div className="App">
        <Router>
          <SuspenseWithFallback>
            <Header />
            <div style={{ paddingTop: device === "mobile" ? "80px" : "65px" }}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/movies">
                  <Movies />
                </Route>
                <Route exact path="/tv shows">
                  <TVShows />
                </Route>
              </Switch>
            </div>
          </SuspenseWithFallback>
        </Router>
      </div>
    </DeviceContext.Provider>
  );
};

export default App;
