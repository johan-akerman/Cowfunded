import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Locations from "./pages/Locations";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/butiker">
          <Locations />
        </Route>
      </Switch>
    </Router>
  );
}
