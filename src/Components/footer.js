import React, { Component } from 'react'
import footerStyles from '../CSS/footer.module.css'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <>
            <nav>
               <Link to='/'>
                <img className={footerStyles.logo} src='https://static1.squarespace.com/static/5c10a2cafcf7fd0f32a876a7/t/5c79ae4d71c10b7dcaa7d564/1548658214654/' alt='logo' /> 
                </Link>
               
                <Link to='/podcasts'>
                <div className={footerStyles.link}>
                    Podcasts
                </div>
                </Link>
                
                <Link to=''>
                <div className={footerStyles.link}>
                    Store
                </div>
                </Link>
               
                <Link to=''>
                <div className={footerStyles.link}>
                    About 
                </div>
                </Link>

            </nav>
            </>

        )
    }
}