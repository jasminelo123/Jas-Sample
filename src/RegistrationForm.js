import React from 'react';
import WelcomeBanner from './WelcomeBanner';

class Register extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Submitted');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
    
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
        else{
            alert("Password match. You've Successfully Created an Account");
            window.location.href = "./WelcomeNewUser";
        }
   
      } 
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }

render(){
return(     <div className="row1">
<div  className="column1">
  <div className="App-Banner">
  <WelcomeBanner/>
  </div>
</div>
<div  className="column1">
  <div className="App-registration">
    <div class="form-container">
          <center><h2>Registration Form</h2></center>
        <div id="message"></div>
        <div id="message1"></div>
     <form name="registration" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="column">
              <input className="input-field" 
              type="text" pattern="[a-zA-Z]*$" placeholder="First Name" name="firstname" id="firstname" required/>
               <i className="fa fa-user icon"></i>
            </div>
            <div className="column">
              <input className="input-field" type="text"  pattern="[a-zA-Z]*$" placeholder="Last Name" name="lastname" id="lastname" required/>
              <i className="fa fa-user icon"></i>
            </div>
          </div>
        
          <div className="row">
            <div className="column">
              <input className="input-field" type="text"  pattern=".{6,}" title="Must be 6 character long" placeholder="Username" id="username" name="username" required/>
               <i className="fa fa-user icon"></i>
            </div>
            <div className="column">
              <input className="input-field" type="number"  pattern="[0-9]{11,}" title="11 digits only"  placeholder="Phone Number" name="phonenumber" required/>
              <i className="fa fa-phone icon"></i>
            </div>
          </div>
        
           <div className="row">
            <div className="column">
              <input className="input-field" type="email"   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                     title="must contain email address format with @" placeholder="Your E-mail Address" name="email" required/>
               <i className="fa fa-envelope icon"></i>
               
              <div className="text-danger">{this.state.errors.email}</div>
            </div>
          </div>
        
         <div className="row">
            <div className="column">
              <select className="input-field" name="gender" id="gender">
                  <option value="gender">Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
            </div>
            <div className="column">
              <input className="input-field" type="date" placeholder="Date of Birth" name="bday" required/>
              <i className="fa fa-birthday-cake icon"></i>
            </div>
          </div>
        
           <div className="row">
     
            <div className="column">
              <input className="input-field" type="password"
              value={this.state.input.password}
              onChange={this.handleChange} placeholder="Password" id="password" name="password" required/>
               <i className="fa fa-lock icon"></i>
               <div className="text-danger">{this.state.errors.password}</div>
            </div>
            <div className="column">
              <input className="input-field" type="password"
               value={this.state.input.confirm_password}
               onChange={this.handleChange}
                placeholder="Confirm Password" id="conpass" name="confirm_password" required/>
              <i className="fa fa-lock icon"></i>
              <div className="text-danger">{this.state.errors.confirm_password}</div>
            </div>
        </div>
         <div className="row">
              <input className="btn-submit" type="submit" name="submit" value="Submit" />   
        </div>
      </form>
    </div>
    </div>
      </div>
    </div> 
  );
}
}

export default Register;
