import React, {Component} from 'react'
import axios from 'axios'



export default class LandingPage extends Component { 

    constructor(){
        super()

        this.state={

        }
    }

    async componentDidMount() {
        // Dashboard component will need to grab session first

        const session = await axios.get('/checkSession') 
        
            console.log(session)

            if( session.data.admin === true){
                console.log('ok')
            }
            else{
                this.props.history.push('/')
            }
          

       
        
        // at this point, we would grab the job postings, applicants for
        // those job postings, and various bits of company info
    }
    render(){
        return(
            <> 
           this is the admin Landing
            </> 
        )
    }

}