import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";


import Index from "views/Index.js";
import Mobile_app from "views/MobileApp.js";
import CultivateCrop from "views/CultivateCrop.js";
import Method from "views/Method.js";
import Diseases from "views/Diseases";
import DiseaseCrop from "views/DiseaseCrop";
import About from "views/About";
//import SignUp from "views/sign_up";
//import SignIn from "views/sign_in";
import AddDetails from "views/add_details";
import BacterialSpot from "views/DiseaseFertilizer";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
     
      <Route path="/cultivatecrop" exact component={CultivateCrop} />
      <Route path="/method" exact component={Method} />
      <Route path="/mobileapp" exact component={Mobile_app} />
      <Route path="/diseases" exact component={Diseases} />
      <Route path="/diseasecrop" exact component={DiseaseCrop} />
      <Route path="/about" exact component={About} />
      {/* <Route path="/sign_up" exact component={SignUp} /> */}
      {/* <Route path="/sign_in" exact component={SignIn} /> */}
      <Route path="/add_details" exact component={AddDetails} />
      <Route path="/diseasefertilizer" exact component={BacterialSpot} />
      <Route path="/" exact component={Index} />
     
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
