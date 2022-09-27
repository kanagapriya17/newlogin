import React from "react";


import{Link} from "react-router-dom";



class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      email: '',  
      password: '',
    };
    this.handleEvent = this.handleEvent.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handlePass = this.handlePass.bind(this)
    //this.handleSubmit = this.handleSubmit.bind(this)
    


  
    }
    
   
  //handleSubmit(event) {
  //console.log('sucess')
    //Try to call a REST API call with the username and password
  //alert('USERNAME: '+ this.state.username+" YOUR EMAIL IS:"+ this.state.email+" YOUR PASSWORD IS:" +this.state.password)



  
  
    
  //}
    
  //event.preventDefault();
  
  

    
  

handleEvent(event) {

    const newemail = event.target.value
    this.setState({
      email: newemail
    });
    console.log(this.state.email)
  }


  handleName(event) {

    const newuser = event.target.value
    this.setState({
    username: newuser
    });
    console.log(this.state.username)
  }
  handlePass(event) {

    const newpass = event.target.value
    this.setState({
      password: newpass
    });
    console.log(this.state.password)
  }

  render() {

  
  return (
    
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
        
          <h3 className="Auth-form-title">Sign In</h3>
          <li><Link to="/buton" activeStyle={{color:"red"}}>button page</Link></li>

 
          <div className="form-group mt-3">
          <label>username</label>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="username"
              onChange={this.handleName}
              />
            <label value={this.state.username}></label>
            </div>
            

          <div className="form-group mt-3">
             <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={this.handleEvent}
            />
            <label value={this.state.email}></label>
          </div>


          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={this.handlePass}
            />
             <label value={this.state.password}></label>
            </div>

          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-warning" >
            <Link to="/tab">SUBMIT</Link>
            
              
            </button>
          </div>
          
          <p className="forgot-password text-right mt-2">
            Forgot <a href='#'>password?</a>
          </p>
        </div>
      </form>
    </div>
  )
  }
}




export default LoginForm;
