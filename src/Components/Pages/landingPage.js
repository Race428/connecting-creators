/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import axios from 'axios';
import landingStyles from '../../CSS/landingPage.module.css'
import hero from '../Images/pic.JPG'
import {updatePodcasts} from '../../Redux/Reducer'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


class LandingPage extends Component {




 componentDidMount(){
    axios.get('/api/podcasts/getall').then((res => {
      
       this.props.updatePodcasts(res.data)
    
    }))
 }



    render() {
      

        return (
            <>
            
           <h1>Connecting Creators is a community where creatives can network, learn, and grow.</h1>
           
           <div className={landingStyles.imageBox}>
            <img className={landingStyles.mike} src='https://www.arohatours.co.nz/media/1645/banner_queenstown-g.jpg?mode=crop&height=700&width=1920&quality=80' alt='mike' /> 
            <caption> <a  href='https://www.instagram.com/trumylin/'target='_blank'>@trumylin</a> and <a  href='https://www.instagram.com/kensingtoncharles/'target='_blank'>@kensingtoncharles</a>  at the base of Mount Bukhansan, South Korea</caption>
            </div>
            </>
        )
    }

}



const mapStateToProps =state=> {
    return {
        ...state 
    }
}

const mapDispatchToProps = {
    updatePodcasts
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LandingPage))
