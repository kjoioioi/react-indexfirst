import React from 'react';
import ReactDOM from 'react-dom';


class ForgetPassword extends React.Component{

  render(){
    return(
         <form>
         <br></br> 
         <p>Enter the detail to retrive Password</p>
        <label for="Username">Username:</label><br></br>
        <input type="text" id="Username" name = "Username" value=""></input><br></br><br></br>
        <label for = "Mobile_no">Mobile Number:</label><br></br>
        <input type = "Number" id = "Mobile_no" name = "Mobile_no" value = ""></input><br></br><br></br>
        <label for = "Connection_no">Connection No:</label><br></br>
        <input type = "Number" id = "Connection_no" name = "Connection_no" value = ""></input><br></br><br></br>
        <input type = "submit" value="Create Password"></input>
        </form>
    )
  } 
}

export default ForgetPassword