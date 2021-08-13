import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
      <Nav cat="tacos" dog="pizza"/>
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
            </Route>
          <Route path="/resume" exact>
            <Resume />
            </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
            </Route>
        </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
