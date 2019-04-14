import React, { Component } from 'react';


import Header from './Layout/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Header/>
            <Route exact path="/dashboard" component={Dashboard}/>

            
        </div>
      </Router>
      
    );
  }
}

export default App;
