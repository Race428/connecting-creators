import React, { Component } from 'react'
import footerStyles from '../CSS/footer.module.css'
import {Link} from 'react-router-dom'
import Insta from './Images/insta.webp'

export default class Footer extends Component {
    render() {
        return (
            <>
            <div className={footerStyles.footer}>
            
               <Link to='/'>
                <img className={footerStyles.logo} src='https://static1.squarespace.com/static/5c10a2cafcf7fd0f32a876a7/t/5c79ae4d71c10b7dcaa7d564/1548658214654/' alt='logo' /> 
                </Link>
               
                <a href='https://instagram.com/connectingcreators?igshid=1texewb30au8'>
                <div className={footerStyles.link}>
                    <img id={footerStyles.icon} src={Insta} alt ='instagram' /> 
                    @connectingcreators
                </div>
                </a>
                
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

         
            </div>
            </>

        )
    }
}