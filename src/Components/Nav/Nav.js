import React, { Component } from 'react'
import navStyles from '../../CSS/nav.module.css'
import {Link} from 'react-router-dom'
import Logo from '../Images/logo.PNG'

export default class Nav extends Component {
    render() {
        return (
            <>
            <nav>
               <Link to='/'>
                <img className={navStyles.logo} src={Logo} alt='logo' /> 
                </Link>
               
                <Link to='/podcasts'>
                <div className={navStyles.link}>
                    Podcasts
                </div>
                </Link>
                
                <Link to=''>
                <div className={navStyles.link}>
                    Events
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