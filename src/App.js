import "./App.css";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DeviceContext } from "./utils/deviceContext";
import { SuspenseWithFallback } from "./utils/common";

const Movies = React.lazy(() => import("./containers/Movies"));
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
        <Header />
        <div style={{ paddingTop: device === "mobile" ? "80px" : "65px" }}>
          <Router>
            <SuspenseWithFallback>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/movies">
                  <Movies />
                </Route>
                <Route exact path="/tv-shows">
                  <TVShows />
                </Route>
              </Switch>
            </SuspenseWithFallback>
          </Router>
        </div>
      </div>
    </DeviceContext.Provider>
  );
};

export default App;
