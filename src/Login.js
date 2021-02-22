import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'


class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      Username : ""
      
    }
  }



  render(){
    return(
      <div class = "username">
      
      <form>
        <label for="Username">Username:</label><br></br>
        <input type="text" id="Username" name = "Username" value=""></input><br></br><br></br>
        <label for = "Password">Password:</label><br></br>
        <input type = "text" id = "Password" name = "Password" value=""></input><br></br><br></br>
        <input type = "submit" value="Login"></input>
        

        
      </form>
      </div>
    )
  }
}
export default Login