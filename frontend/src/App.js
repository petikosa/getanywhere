import React from 'react';
import './styles/App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Landing from './components/landing/Landing';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
