import React from "react";
import "./styles.css";
import {Switch,Route} from "react-router-dom";
import Setting from "./pages/setting";
import Home from "./pages/home";
import Add from "./pages/add";

export default function App() {
  return (
 <Switch>
  <Route path="/home" component={Home}/>
 <Route path="/add" component={Add}/>

 <Route path="/setting" component={Setting}/>
 </Switch>
  );
}
