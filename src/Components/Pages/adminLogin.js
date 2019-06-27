import React, { Component } from 'react'
import axios from 'axios'
import loginStyles from '../../CSS/login.module.css'
import Logo from '../Images/logo.PNG'


export default class AdminLogin extends Component {

  constructor() {
    super()

    this.state = {
      userName: '',
      password: ''

    }
  }


  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }



  loginSubmit = () => {
    const { userName, password } = this.state
    axios.post('/auth/userlogin', { userName, password }).then(response => {
      console.log(response)
      this.setState({
        userName: '',
        password: '',


      })

      this.props.history.push('/adminLanding')

    }).catch((err) => {
      alert('Email or Password Incorrect')
    })
  }



  render() {
    return (
      <>

        <div className={loginStyles.view}>

       
          <div className={loginStyles.login}>
          <img src={Logo} alt='logo' />
            <input className={loginStyles.input}
            placeholder='User Name' onChange={e => this.handleChange('userName', e.target.value)} />
            <input className={loginStyles.input} 
            placeholder='Password' onChange={e => this.handleChange('password', e.target.value)} />

            <button onClick={e => this.loginSubmit()}>Login</button>

          </div>

        </div>
      </>
    )
  }

}
