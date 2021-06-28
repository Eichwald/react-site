import './App.css';
import React, { Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FetchTab from './tabs/PostsTab.js';
import '@fontsource/roboto';
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
              <Tabs value={location.pathname} centered>
                <Tab label="Posts" value="/" component={Link} to={allTabs[0]} />
                <Tab label="Albums" value="/albums" component={Link} to={allTabs[1]} />
              </Tabs>
              <Switch>
                <Route path={allTabs[1]} component={AlbumsTab}/>
                <Route path={allTabs[0]} component={PostsTab}/>
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </Router>
  );
}

function PostsTab() {
  return <FetchTab url = 'https://jsonplaceholder.typicode.com/posts'/>;
}
function AlbumsTab() {
  return <FetchTab url = 'https://jsonplaceholder.typicode.com/albums'/>;
}


export default App;





