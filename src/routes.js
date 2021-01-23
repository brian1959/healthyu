import React from "react";
import { Switch, Route } from "react-router-dom";

import About from './Components/About/about';
import Dine from './Components/Dine/dine';
import Feast from './Components/Feast/feast';
import Founder from './Components/About/aboutfounder';
import Free from './Components/Free/free';
import Home from "./Components/Home/home";
import Immune from "./Components/Immune/immune";
import Nibble from './Components/Nibble/nibble';
import NutritionCoaching from './Components/NutritionCoaching/nutritioncoaching';
import SLV from './Components/SLV/slv';
import Snack from './Components/Snack/snack';
import Stories from './Components/Stories/stories';
import Women from './Components/AllAccess/women';
import Men from './Components/AllAccess/men';
import Pickyeaters from './Components/Pickyeaters/pickyeaters';
import Vegan from './Components/AllAccess/vegan';
import Recipes from './Components/AllAccess/recipes';
import Pregnancy from './Components/AllAccess/pregnancy';
import Level50 from './Components/AllAccess/level50';
import Foryourfamily from './Components/AllAccess/foryourfamily';
import Foodfocus from './Components/AllAccess/foodfocus';
import Environment from './Components/AllAccess/environment';
import Autoimmune from './Components/AllAccess/autoimmune';
import Profile from './Components/Member/member';


export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About}/>
    <Route path="/aboutourfounder" component={Founder}/> 
    <Route path="/dine" component={Dine} />
    <Route path="/feast" component={Feast} />
    <Route path="/immune" component={Immune} />
    <Route path="/nibble" component={Nibble} />
    <Route path="/nutrition" component={NutritionCoaching} />
    <Route path="/resources" component={Free}/>
    <Route path="/slv" component={SLV}/>
    <Route path="/snack" component={Snack} />
    <Route path="/stories" component={Stories}/>
    <Route path="/autoimmune" component={Autoimmune}/>
    <Route path="/environment" component={Environment}/>
    <Route path="/foodfocus" component={Foodfocus}/>
    <Route path="/foryourfamily" component={Foryourfamily}/>
    <Route path="/level50" component={Level50}/>
    <Route path="/men" component={Men}/>
    <Route path="/pregnancy" component={Pregnancy}/>
    <Route path="/recipes" component={Recipes}/>
    <Route path="/vegan" component={Vegan}/>
    <Route path="/women" component={Women}/>
    <Route path="/pickyeaters" component={Pickyeaters}/>
    <Route path="/member" component={Profile}/>

  </Switch>
);