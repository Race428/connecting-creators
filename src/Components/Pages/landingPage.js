/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import axios from 'axios';
import landingStyles from '../../CSS/landingPage.module.css'
import hero from '../Images/hero.JPG'



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
            <img className={landingStyles.mike} src={hero} alt='mike' /> 
            <caption> <a  href='https://www.instagram.com/trumylin/'target='_blank'>@trumylin</a> and <a  href='https://www.instagram.com/kensingtoncharles/'target='_blank'>@kensingtoncharles</a>  at the base of Mount Bukhansan, South Korea</caption>
            </div>
            </>
        )
    }

}