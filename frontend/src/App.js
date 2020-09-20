import React from 'react';
import './styles/App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Landing from './components/landing/Landing';

function App() {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
