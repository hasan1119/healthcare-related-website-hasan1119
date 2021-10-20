import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import PageNotFound from "./pages/PageNotFound.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import AuthProvider from "./contexts/AuthProvider.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Reset from './pages/Reset.js'
import HomeContainer from "./components/HomeContainer.js";
import Doctors from "./pages/Doctors.js";
import ServiceDetails from "./pages/ServiceDetails.js";
import PrivateRoute from "./privateRoute/PrivateRoute.js";

function App() {
  return (
    <AuthProvider>
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

            <Route path="/reset">
              <Reset></Reset>
            </Route>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>

            <PrivateRoute path="/service/:key">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
