/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import axios from 'axios';
import landingStyles from '../../CSS/landingPage.module.css'
import hero from '../Images/pic.JPG'
import { updatePodcasts } from '../../Redux/Reducer'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class LandingPage extends Component {




    componentDidMount() {
        axios.get('/api/podcasts/getall').then((res => {

            this.props.updatePodcasts(res.data)

        }))
    }



    render() {


        return (
            <>
                <div className={landingStyles.pageView}>
                    <h1>Connecting Creators is a community where creatives can network, learn, and grow.</h1>

<div>
                    {/* <iframe  className={landingStyles.video}  src="https://www.youtube.com/embed/5ebz0NIGgOc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /> 
                 */}

                    </div>
                   

                 


                </div>
            </>
        )
    }

}



const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = {
    updatePodcasts
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LandingPage))
