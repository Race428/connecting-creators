import React, { Component } from 'react'
import navStyles from '../../CSS/nav.module.css'
import {Link} from 'react-router-dom'
// import Logo from '../Images/logo.PNG'

export default class Nav extends Component {
   
   
    render() {
        return (
            <>

           
            <nav>
               <Link to='/'>
                <img className={navStyles.logo} src='https://achesonco.s3-us-west-1.amazonaws.com/BlackConnecting.png ' alt='logo' /> 
                </Link>
               
                <Link to='/podcasts'>
                <div className={navStyles.link}>
                    Interviews
                </div>
                </Link>
                
                <Link to='/shop/select-package'>
                <div className={navStyles.link}>
                    Shop
                </div>
                </Link>
               
                {/* <Link to=''>
                <div className={navStyles.link}>
                    About 
                </div>
                </Link> */}

            </nav>
            </>

        )
    }
}