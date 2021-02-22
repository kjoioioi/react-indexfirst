import React from 'react';
import ReactDOM from 'react-dom';


export default class Register extends React.Component{
  render(){
    return(
        <div>
      <p>Registration Form</p>

      <form>
      <label for="Username">Username:</label><br></br>
      <input type="text" id="Username" name = "Username" value=""></input><br></br><br></br>
      <label for = "Password">Password:</label><br></br>
      <input type = "text" id = "Password" name = "Password" value=""></input><br></br><br></br>
      <label for = "Mobile_no">Mobile Number:</label><br></br>
      <input type = "Number" id = "Mobile_no" name = "Mobile_no" value = ""></input><br></br><br></br>
      <label for = "Connection_no">Mobile Number:</label><br></br>
      <input type = "Number" id = "Connection_no" name = "Connection_no" value = ""></input><br></br><br></br>
      <p> Address: </p>
       <label for="Lane">Address Lane 1:</label><br></br>
      <input type="text" id="Lane" name = "Lane" value=""></input><br></br><br></br>
       <label for="District">District:</label><br></br>
      <input type="text" id="District" name = "District" value=""></input><br></br><br></br>
      <input type = "submit" value="Login"></input>
      </form>
      </div>
    )
  }
}

