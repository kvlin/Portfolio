import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './pages/Main';
import CV from './pages/CV';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'
import SkillsBrief from './components/SkillsBrief';

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact >
            <SkillsBrief/>
            <Main/>
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
