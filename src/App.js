import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './pages/Main';
import CV from './pages/CV';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/cv"  component={CV} />
        <Route path="/contact"  component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
