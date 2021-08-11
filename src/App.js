import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import { InfoBar } from "./components/InfoBar";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/locations">
          <Locations />
        </Route>
      </Switch>
    </Router>
  );
}
