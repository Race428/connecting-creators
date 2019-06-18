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
        await axios.get('/api/podcasts/getall').then((res => {
            this.setState({
                podcasts: res.data
            })
        }))
    }
    render() {
        const podcasts = this.state.podcasts.map((element, index) => {
            return <>
                <div className={landingStyles.podcast} key={index}>
                    {/* <div>{element.title}</div> */}
                    <div>{element.description}</div>
                    {/* <div>{element.content}</div> */}
                    <video title ={landingStyles.title}width="560" height="315" src={element.url}frameborder="0" ></video>
                    <div>{element.url}</div>
                    <div>{element.date}</div>
                </div>
            </>
        })

        return (
            <>
<iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
                {podcasts}
            </>
        )
    }

}