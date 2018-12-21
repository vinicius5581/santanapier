import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Santana Pier</h1>
            <Route path="/about/" component={About} />
            <Route path="/contact/" component={Contact} />
          </header>          
        </div>        
      </Router>
    );
  }
}

export default App;
