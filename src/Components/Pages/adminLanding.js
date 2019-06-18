import React, {Component} from 'react'
import axios from 'axios'
import adminStyles from '../../CSS/adminLanding.module.css'



export default class LandingPage extends Component { 

    constructor(){
        super()

        this.state={
            podcastToggle: false,
            blogToggle: false,
            title: '',
            description: '',
            content:'',
            url:'',
            date:''
        }
    }

    async componentDidMount() {
       

        // const session = await axios.get('/checkSession') 
        
        //     console.log(session)

        //     if( session.data.admin === true){
        //         console.log('ok')
        //     }
        //     else{
        //         this.props.history.push('/')
        //     }

    }
          
        
    buttonToggle = (name, value)=> {
        this.setState({[name]: value})
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
            date:this.state.date

        }).then(res => { 
            console.log('went through', res)
        })
        this.setState({
            title: '',
            description:'',
            content:'',
            url: '',
            date:''
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
            description:'',
            content:'',
            url: '',
            date: ''
        })
    }
    
    render(){
        return(
            <> 
            {
                !this.state.podcastToggle ?
                <button onClick={()=> {this.buttonToggle('podcastToggle', !this.state.podcastToggle)}}>Click To Add Podcast</button>:
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
                <button onClick={()=> {this.buttonToggle('blogToggle', !this.state.blogToggle)}}>Click To Add Blog</button>:
               <div className={adminStyles.blogInput}>
                   <input className={adminStyles.inputs} placeholder='Blog Title' onChange={e => this.handleChange('title', e.target.value)} /> 
                   <input className={adminStyles.inputs} placeholder='Blog Description' onChange={e => this.handleChange('description', e.target.value)} /> 
                   <input className={adminStyles.inputs} placeholder='Blog Content' onChange={e => this.handleChange('content', e.target.value)} /> 
                   <input className={adminStyles.inputs} placeholder='Blog URL' onChange={e => this.handleChange('url', e.target.value)} /> 
                   <input className={adminStyles.inputs} type='date' name='Posting Date' placeholder='Date of Posting' onChange={e => this.handleChange('date', e.target.value)} /> 
                   <button onClick={this.blogUpload}>Upload Blog</button>
               </div> 
            }



            </> 
        )
    }

}