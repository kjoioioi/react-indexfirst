import React from 'react';
import ReactDOM from 'react-dom';




class CreatePassword extends React.Component{
  render(){
   return(
     <form>
     <label for = "Password">Create password:</label><br></br>
      <input type = "text" id = "Password" name = "Password" value=""></input><br></br><br></br>
      <label for = "Password">Retype-Password:</label><br></br>
      <input type = "text" id = "Password" name = "Password" value=""></input><br></br><br></br>
      <input type = "submit" value="Login"></input>
      </form>
   )

  }
}
export default CreatePassword