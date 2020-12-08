import React from 'react';

class Register extends React.Component {
  constructor(props){
    super(props)
    this.state={
      email: '',
      Password: '',
      name: ''

    }
  }
  onEmailChange = (event) =>{
    this.setState({email: event.target.value})
  }

  onNameChange = (event) =>{
    this.setState({name: event.target.value})
  }

   onPasswordChange = (event) =>{
    this.setState({password: event.target.value})
  }

     onSubmitRegister = () => {
    fetch('https://cryptic-meadow-06802.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })

      .then(response => response.json())
      .then(user => {
           if (!this.state.email ||!this.state.name||!this.state.password){
      return alert('blank entry')
            }
          if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      
      })
  }


  
  render(){
    return(
   
		<article className="br1 shadow-5 ba dark-gray b--black-10 mv4 w-200 w-100 m w-25-l mw7 center">
  <div action="sign-up_submit" method="get" acceptCharset="utf-8">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
   <legend className = "f1 fw5 ph0 mh0">Register</legend>
   <div className="mt3">
        <label className="db fw4 lh-copy f6" for="Name">Name</label>
        <input onChange={this.onNameChange}
        className="pa2 input-resset ba bg-transparent w-100 measure" type="text" name="name"  id="name"/>
      </div>

      <div className="mt3">
        <label className="db fw4 lh-copy f6" for="email-address">Email address</label>
        <input onChange={this.onEmailChange}
        className="pa2 input-resset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mt3">
        <label className="db fw4 lh-copy f6" for="password">Password</label>
        <input onChange={this.onPasswordChange}
        className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="mt3">
    <input 
    onClick={this.onSubmitRegister}
    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
    type="submit" value="Register"/>
   
    </div>
  </div>
</article>
)
		
}
}

export default Register;