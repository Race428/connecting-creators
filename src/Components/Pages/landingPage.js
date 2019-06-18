import React, {Component} from 'react'
import axios from 'axios';




export default class LandingPage extends Component { 

    constructor(){
        super()

        this.state={
            podcasts:[]
        }
    }


    async componentDidMount(){
        await axios.get('/api/podcasts/getall').then((res => { 
            this.setState({
                podcasts: res.data
            })
        }))
    }
    render(){
        const podcasts = this.state.podcasts.map((element, index) => { 
            return   <>
            <div>{element.title}</div>
            <div>{element.description}</div>
            <div>{element.content}</div>
            <div>{element.url}</div>
            <div>{element.date}</div>
            </>
        })

        return(
            <> 
            This is the landing Page
            {podcasts}
            </> 
        )
    }

}