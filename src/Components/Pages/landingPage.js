/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import axios from 'axios';
import styles from '../../CSS/landingPage.module.css'
import hero from '../Images/pic.JPG'
import { updatePodcasts } from '../../Redux/Reducer'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class LandingPage extends Component {




    componentDidMount() {

    }


    play = () => { 
    document.getElementById(styles.coverImage).style.display.
    document.getElementById(styles.buttonShow).setAttribute('id', styles.fade)
    document.getElementById(styles.iframe).setAttribute('id', styles.play)



    }




    
    render() {


        return (
            <>
                <div className={styles.pageView}>
                    <h1 id={styles.title}>Tell Your Story Through Video.</h1>

                    <div>

                        <div id ={styles.coverImage} className={styles.coverImage}><img  src="https://static1.squarespace.com/static/5aa301a9b27e39ca4eddba98/5ba2fedf4ae237797f72ba56/5ba3017f0ebbe87a884fdebc/1537899852197/SizzleTHumbnail.JPG?format=750w"  alt ='cover'/></div>

                        <div  id ={styles.buttonShow}  onClick={this.play}>  </div>

                        
                        <div className={styles.buttonOpaque}> </div>


                        <iframe mozallowfullscreen="" allowfullscreen="" src="https://player.vimeo.com/video/289365725?wmode=opaque&amp;autoplay=1" width="640" webkitallowfullscreen=""  autoplay frameborder="0" height="360" id={styles.iframe}
                            title='hi'
                            ></iframe>


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
