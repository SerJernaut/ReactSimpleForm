import React from 'react';
import './App.css';
import styles from './formStyles.css'
import PasswordInput from './components/PasswordInput';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userData: {  firstName: '',
        lastName: '',
        email: '',
        password: ''},
        isValidData: {
          isValidFirstName: false,
          isValidLastName: false,
          isValidEmail: false,
          isValidPassword: false
        }
    }
  }

  handleChange = e => {
    const {target: {name, value}} = e;

    this.setState({
      userData: {...this.state.userData,
        [name]: value,

      },


                  });
    this.validateInput(name, value);
  }

  sendRequest = () => {
    const options = {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-type': 'application/json'
      }
    }
    fetch('http://192.168.0.106:3000/authorization/sign_up', options)
      .then(response => response.json())
      .then (user => {
        this.setState({
                        user,
                      });
        sessionStorage.setItem('USER', JSON.stringify(user));
      } );

  }

    validateInput = (fieldName, value) => {
      switch(fieldName) {
        case 'email':

        case 'password':


        case 'firstName'   :

        case 'lastName':

        default:
          break;
      }
    }


  handleSubmit = (e) =>{
    e.preventDefault();
    this.sendRequest();
  }

  render() {
    const {userData: {
      email, password, firstName, lastName
    }} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" value={email} name="email" placeholder="email" onChange={this.handleChange}/>
        <input type="text" value={firstName} name="firstName" placeholder="firstName" onChange={this.handleChange}/>
        <input type="text" value={lastName} name="lastName" placeholder="lastName" onChange={this.handleChange}/>
        <PasswordInput value={password} value={password} onChange={this.handleChange}/>
        <input type="submit" value="sign up"/>
      </form>
    )
  }

}

export default App;
