import React, { Component } from 'react'
import navStyles from '../../CSS/nav.module.css'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <>
            <nav>
               <Link to='/'>
                <img className={navStyles.logo} src='https://static1.squarespace.com/static/5c10a2cafcf7fd0f32a876a7/t/5c79ae4d71c10b7dcaa7d564/1548658214654/' alt='logo' /> 
                </Link>
               
                <Link to='/podcasts'>
                <div className={navStyles.link}>
                    Podcasts
                </div>
                </Link>
                
                <Link to=''>
                <div className={navStyles.link}>
                    Store
                </div>
                </Link>
               
                <Link to=''>
                <div className={navStyles.link}>
                    About 
                </div>
                </Link>

            </nav>
            </>

        )
    }
}