import React, { Component } from 'react'
import axios from 'axios';
import podcastStyles from '../../CSS/podcastPage.module.css'
import Footer from '../footer'




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
                    {/* <div className={podcastStyles.podcastTitle}>{element.title}</div> */}

                    {/* <div classname={podcastStyles.content}>{element.content}</div> */}

                    <div className={podcastStyles.podcastVideoWrapper}>
                        <iframe className={podcastStyles.podcastVideo} title={element.title} src={element.url}
                            height='345'
                            width='420' allowFullScreen>

                        </iframe>
                    </div>
                    <div className={podcastStyles.podcastDescription}>{element.description}</div>

                </div>
            </>
        })

        return (
            <>
                <div className={podcastStyles.pageView}>

                    <div className={podcastStyles.titleText}>
                        <h1>Connecting Creators Podcast Series</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim eros eget urna accumsan luctus. Nulla porta lectus nisl, id vehicula lectus porttitor eget. Proin sagittis pharetra leo. Sed vehicula nulla id ultricies rutrum. Nam fringilla, nibh nec egestas ullamcorper, quam nulla vestibulum urna, nec gravida dolor odio quis diam. Quisque vel tristique ipsum, non scelerisque ipsum. Nunc et rutrum augue, ac pharetra dui. Morbi lobortis massa arcu, a ultrices magna tempus quis. Morbi id lorem nec mauris blandit consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in turpis accumsan, iaculis tortor vitae, laoreet sem.</p>
                    </div>


                    <div className={podcastStyles.podcastContainer}>
                        {podcasts}
                    </div>
                    <Footer />
                </div>

            </>
        )
    }

}