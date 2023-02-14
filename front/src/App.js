import Inspiration from "./pages/inspiration/Inspiration";
import Profile from "./pages/profile/Profile";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";

import {BrowserRouter as Router, Switch,Route,Redirect,} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/Login">
          <Login/>
        </Route>
        <Route path="/SignUp">
          <SignUp/>
        </Route>
        <Route path="/Inspiration">
          <Inspiration/>
        </Route>
        <Route path="/Profile/:username">
          <Profile/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
