import Inspiration from "./pages/inspiration/Inspiration";
import Profile from "./pages/profile/Profile";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";

import {BrowserRouter as Router, Switch,Route,Redirect,} from "react-router-dom";
import {AuthContext} from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ?<Home/> : <SignUp/>}
        </Route>

        <Route path="/Login">{user ? <Redirect to ="/" /> : <Login/>}</Route>

        <Route path="/SignUp">
          {user ? <Redirect to="/"/> : <SignUp/>}
        </Route>

        <Route path="/Inspiration">
          {user ? <Redirect to="/"/> : <Inspiration/>}
        </Route>
        
        <Route path="/Profile/:username">
          <Profile/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
