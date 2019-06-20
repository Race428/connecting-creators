import React, { Component } from 'react'
import axios from 'axios';
import landingStyles from '../../CSS/landingPage.module.css'
import Mike from '../Images/mike.jpg'



export default class LandingPage extends Component {

    constructor() {
        super()

        this.state = {
            podcasts: []
        }
    }


    
    async componentDidMount() {
        await axios.get('/api/podcasts/getall')
    }
    render() {
      

        return (
            <>
            
           <h1>Connecting Creators is our website where we help those who are searching for a guide in the world of social media.</h1>
           
           <div className={landingStyles.imageBox}>
            <img className={landingStyles.mike} src={Mike} alt='mike' /> 
            <caption>Mike @mikerichy - Founder of Connecting Creators</caption>
            </div>
            </>
        )
    }

}