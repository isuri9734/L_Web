import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// views without layouts

// import Landing from "views/Cultivate.js";
import Index from "views/Index.js";
import Mobile_app from "views/MobileApp.js";
import Cultivate from "views/Cultivate.js";
//import Diseases from "views/Diseases";
import About from "views/About";
import SignUp from "views/sign_up";
import SignIn from "views/sign_in";
import AddDetails from "views/add_details";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} /> */}
      {/* add routes without layouts */}
      <Route path="/cultivate" exact component={Cultivate} />
      <Route path="/mobileapp" exact component={Mobile_app} />
      {/* <Route path="/diseases" exact component={Diseases} /> */}
      <Route path="/about" exact component={About} />
      <Route path="/sign_up" exact component={SignUp} />
      <Route path="/sign_in" exact component={SignIn} />
      <Route path="/add_details" exact component={AddDetails} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
