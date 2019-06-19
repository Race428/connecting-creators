import React, { Component } from 'react'
import axios from 'axios';
import landingStyles from '../../CSS/landingPage.module.css'




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

               
            </>
        )
    }

}