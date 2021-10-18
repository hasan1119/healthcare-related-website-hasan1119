import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import PageNotFound from "./pages/PageNotFound.js";
import Footer from "./components/footer/Footer.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import AuthProvider from "./contexts/AuthProvider.js";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeContainer from "./components/homeContainer/HomeContainer.js";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <HomeContainer></HomeContainer>
          </Route>
          <Route exact path="/home">
            <HomeContainer></HomeContainer>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
