//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes, Route as RouteV6 } from 'react-router-dom';
import Home from "./AllPages/Home";
import Signup from './AllPages/Signup';
import Login from './AllPages/Login';
import Calendar from './AllPages/Calendar';

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Signup">Signup</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Calendar">Calendar</Link>
            </li>
          </ul>
        </nav>

        <Routes> {/* Use Routes here */}
          <RouteV6 path="/" element={<Home />} /> 
          <RouteV6 path="/Signup" element={<Signup />} /> 
          <RouteV6 path="/Login" element={<Login />} />
          <RouteV6 path="/Calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  );
}


/*function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllLinks />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}*/

{/*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

              <Route path="/" element={<AllLinks />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            
          </Route>

  */}

export default App;
