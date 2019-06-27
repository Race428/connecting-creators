import React, {Component} from 'react'

import loginStyles from '../../CSS/login.module.css'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';


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
          




            <Container className={loginStyles.body}component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <div className={loginStyles.paper}>
        <Avatar className={loginStyles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/* <form className={loginStyles.form} noValidate> */}
          <TextField
            className={loginStyles.text}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            // id="username"
            // label="UserName"
            placeholder='username'
            // name="username"
            autoFocus
            onChange={e => this.handleChange('userName', e.target.value)}
            
          />
          <TextField
            className={loginStyles.text}

            variant="outlined"
            margin="normal"
            required
            fullWidth
            placeholder='password'
            // name="password"
            // type="password"
            id="password"
            onChange={e => this.handleChange('password', e.target.value)}
        
          />
         
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={loginStyles.submit}
            onClick={e => this.loginSubmit()}
          >
            Sign In
          </Button>
         
        {/* </form> */}
      </div>
     
    </Container>
            </> 
        )
    }

}

