import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './style.css'
import {browserHistory} from "react-router";
import { useHistory } from "react-router-dom";
import Login from './Login'
import {push} from 'react-router-redux';
import PropTypes from 'prop-types';
import Register from './Register'
import ForgetPassword from './ForgetPassword'
import createHistory from 'history';
import { routerReducer, routerMiddleware } from 'react-router-redux';


class Contact extends React.Component {
    


  render(){
    return(
  <><><h class="mass">TNEB online portal</h><br></br>
<p>Welcome !!!</p>

<Router>
<ul class = "decorationnone">
<li>
<Link to="/" />
</li>


<div class = "register">

<Route exact path="/" component={Login} />
<br></br>
<li>
<Link to = "/ForgetPassword" >ForgetPassword</Link>
</li>
<Route path = "/ForgetPassword" component = {ForgetPassword} />
<p>Not a user:</p>
<li>
<Link to = "/Register" >Register</Link>
</li>
<Route path = "/Register" component = {Register} />
</div>
</ul>
</Router></>
</>
    )

  } 
}


ReactDOM.render(<Contact />, document.getElementById("root"));