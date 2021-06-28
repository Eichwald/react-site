import './App.css';
import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const allTabs = ['/', '/albums'];

  return (
    <Router>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname}>
                <Tab label="Item One" value="/" component={Link} to={allTabs[0]} />
                <Tab label="Item Two" value="/albums" component={Link} to={allTabs[1]} />
              </Tabs>
              <Switch>
                <Route path={allTabs[1]} render={() => <div>Tab 2</div>} />
                <Route path={allTabs[0]} render={() => <div>Tab 1</div>} />
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </Router>
  );
}

export default App;





