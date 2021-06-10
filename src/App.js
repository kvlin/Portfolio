import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './pages/Main';
import CV from './pages/CV';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact >
            <Main/>
          </Route>
          <Route path="/cv">
            <CV/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>  
  );
}

export default App;
