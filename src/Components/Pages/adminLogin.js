import React, {Component} from 'react'

import loginStyles from '../../CSS/login.module.css'
import axios from 'axios'


export default class AdminLogin extends Component { 

    constructor(){
        super()

        this.state={
            userName:'',
            password:''

        }
    }


    handleChange= (name, value) => { 
        this.setState({
            [name]: value
        })
    }



    loginSubmit = () => {
        const { userName, password } = this.state
        axios.post('/auth/userlogin', { userName, password }).then(response => {
            console.log(response)
          this.setState({
            loginEmail: '',
            loginPassword: '',
            
    
          })

          this.props.history.push('/adminLanding')
    
        }).catch((err) => {
          alert('Email or Password Incorrect')
        })
      }

     
    render(){
        return(
            <> 
            <div className={loginStyles.body}>
                <input placeholder ='User Name' onChange={e => this.handleChange('userName', e.target.value)} /> 
                <input placeholder ='Password' onChange={e => this.handleChange('password', e.target.value)} /> 
                <button onClick={this.loginSubmit}>Log In</button>
            </div>

            </> 
        )
    }

}