import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://cryptic-meadow-06802.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
       
        if (user.email) {

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
   

      <div className="mt3">
        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
        <input onChange={this.onEmailChange}className="pa2 input-resset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mt3">
        <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
        <input onChange= {this.onPasswordChange} className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="mt3">
    <input 
    onClick={this.onSubmitSignIn}
    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
    type="submit" value="Signin"/>
    <p onClick={()=> this.props.onRouteChange('Register')} className = "center f7 link din black db pointer grow"> Register</p>
    </div>
  </div>
</article>
		);

}
}

export default Signin;