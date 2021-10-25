import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact={true}>
                        <Navigation showLogo={true}/>
                        <Home/>
                    </Route>
                    <Route path="/about" exact={true}>
                        <Navigation showLogo={false}/>
                        <About/>
                    </Route>
                    <Route path="/aboutUs" exact={true}>
                        <Navigation showLogo={false}/>
                        <AboutUs/>
                    </Route>
                    <Route path="/contact" exact={true}>
                        <Navigation showLogo={false}/>
                        <Contact/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
