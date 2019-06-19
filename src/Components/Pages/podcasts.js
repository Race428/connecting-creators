import React, { Component } from 'react'
import axios from 'axios';
import podcastStyles from '../../CSS/podcastPage.module.css'




export default class Podcasts extends Component {

    constructor() {
        super()

        this.state = {
            podcasts: []
        }
    }


    async componentWillMount() {
        await axios.get('/api/podcasts/getall').then((res => {
            this.setState({
                podcasts: res.data
            })
        }))
    }
    render() {
        const podcasts = this.state.podcasts.map((element, index) => {
            return <>
                <div className={podcastStyles.podcast} key={index}>
                    <div className={podcastStyles.podcastTitle}>{element.title}</div>
                    <div className={podcastStyles.podcastDescription}>{element.description}</div>
                    <div classname={podcastStyles.content}>{element.content}</div>
                   
                    <div className={podcastStyles.podcastVideoWrapper}>
                        <iframe className={podcastStyles.podcastVideo} title={element.title} src={element.url}
                        height ='345'
                        width = '420' allowFullScreen>
                        
                        </iframe>
                    </div>

                </div>
            </>
        })

        return (
            <>
            <div className={podcastStyles.pageView}>
                {podcasts}
                </div>
            </>
        )
    }

}