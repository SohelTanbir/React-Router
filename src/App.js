import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PostDetails from './components/PostDetails/PostDetails';



function App() {
  return(
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
               <Link to="/about">About</Link>
            </li>
            <li>
               <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/post/:id">
            <PostDetails/>
          </Route>
        </Switch>


      </Router>
    </div>
  )
}

export default App;
