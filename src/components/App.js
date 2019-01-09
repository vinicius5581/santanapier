import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Social from './Social';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Santana Pier</h1>
            <p>Amazon seller</p>
            <Route path="/about/" component={About} />
            <Route path="/contact/" component={Contact} />
            <Route path="/social/" component={Social} />
          </header>       
          <footer className="App-footer">
            <p>501 Delancey St. #110 - San Francisco - CA - 94107</p>
            <p>(415) 312-5802</p>
          </footer>   
        </div>        
      </Router>
    );
  }
}

export default App;
