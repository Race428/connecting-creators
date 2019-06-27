import React, { Component } from 'react'
import axios from 'axios'
import adminStyles from '../../CSS/adminLanding.module.css'



export default class adminLandingPage extends Component {

    constructor() {
        super()

        this.state = {
            podcastToggle: false,
            blogToggle: false,
            title: '',
            description: '',
            content: '',
            url: '',
            date: '',
            podcasts: []
        }
    }


    componentDidMount() {


        axios.get('/api/podcasts/getall').then((res => {
            this.setState({
                podcasts: res.data
            })
        }))


    }




    buttonToggle = (name, value) => {
        this.setState({ [name]: value })
    }


    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }



    podcastUpload = () => {
        this.setState({
            podcastToggle: !this.state.podcastToggle
        })
        axios.post('/api/podcasts/upload', {
            title: this.state.title,
            description: this.state.description,
            content: this.state.content,
            url: this.state.url,
            date: this.state.date

        }).then(res => {
            console.log('went through', res)
        })
        this.setState({
            title: '',
            description: '',
            content: '',
            url: '',
            date: ''
        })
    }




    blogUpload = () => {


        this.setState({
            blogToggle: !this.state.blogToggle
        })
        axios.post('/api/blog/upload', {
            title: this.state.title,
            description: this.state.description,
            content: this.state.content,
            url: this.state.url,
            date: this.state.date
        }).then(res => {
            console.log('went through', res)
        })
        this.setState({
            title: '',
            description: '',
            content: '',
            url: '',
            date: ''
        })
    }




    deletePost = (podcast_id) => {
        axios.delete(`/api/podcast/delete/${podcast_id}`).then(
            (res) => {
                res.sendStatus(200)
            }
        )

        this.props.history.push('/adminLanding')


        // this.componentDidUpdate = () => {
        //     axios.get('/api/podcasts/getall').then((res => {
        //         this.setState({
        //             podcasts: res.data
        //         })
        //     }))
        // }
    }





    render() {
        const podcasts = this.state.podcasts.map((element) => {
            return <div className={adminStyles.dashPod}>
                <h3>{element.title}</h3>
                <button className={adminStyles.deletePodcast} onClick={e => this.deletePost(element.podcast_id)}>X</button>
            </div>
        })


        return (
            <>
                <div className={adminStyles.pageView}>
                    <div className={adminStyles.dashHead}> <h2>Admin Dashboard</h2>
                    </div>
                    <div className={adminStyles.dashboard}>

                        <div className={adminStyles.podcastContainer}>
                            <p>Podcast Titles</p>
                            {podcasts}
                        </div>
                    </div>

                    {/* Conditional turnary */}
                    <div>
                        {
                            !this.state.podcastToggle ?
                                <button onClick={() => { this.buttonToggle('podcastToggle', !this.state.podcastToggle) }}>Click To Add Podcast</button> :
                                <div className={adminStyles.podcastInput}>
                                    <input className={adminStyles.inputs} placeholder='Podcast Title' onChange={e => this.handleChange('title', e.target.value)} />
                                    <input className={adminStyles.inputs} placeholder='Podcast Description' onChange={e => this.handleChange('description', e.target.value)} />
                                    <input className={adminStyles.inputs} placeholder='Podcast Content' onChange={e => this.handleChange('content', e.target.value)} />
                                    <input className={adminStyles.inputs} placeholder='Podcast URL' onChange={e => this.handleChange('url', e.target.value)} />
                                    <input className={adminStyles.inputs} type='date' name='Posting Date' placeholder='Date of Posting' onChange={e => this.handleChange('date', e.target.value)} />
                                    <button onClick={this.podcastUpload}>Upload Podcast</button>
                                </div>
                        }
                        {
                            !this.state.blogToggle ?
                                <button onClick={() => { this.buttonToggle('blogToggle', !this.state.blogToggle) }}>Click To Add Blog</button> :
                                <div className={adminStyles.blogInput}>
                                    <input className={adminStyles.inputs} placeholder='Blog Title' onChange={e => this.handleChange('title', e.target.value)} />
                                    <input className={adminStyles.inputs} placeholder='Blog Description' onChange={e => this.handleChange('description', e.target.value)} />
                                    <input className={adminStyles.inputs} placeholder='Blog Content' onChange={e => this.handleChange('content', e.target.value)} />
                                    <input className={adminStyles.inputs} placeholder='Blog URL' onChange={e => this.handleChange('url', e.target.value)} />
                                    <input className={adminStyles.inputs} type='date' name='Posting Date' placeholder='Date of Posting' onChange={e => this.handleChange('date', e.target.value)} />
                                    <button onClick={this.blogUpload}>Upload Blog</button>
                                </div>
                        }
                    </div>


                </div>
            </>
        )
    }

}