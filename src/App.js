import "./App.css";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import Movies from "./containers/Movies";
import TVShows from "./containers/TVShows";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/tv-shows">
            <TVShows />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
