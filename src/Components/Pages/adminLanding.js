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
        try {
            console.log(session)
            session.data.admin ? 
            await this.props.updateUser(session.data.admin) :
            await this.props.updateUser(session.data.user)
        } catch {
            this.props.history.push('/')
        }

        if(this.props.companyId) {
           this.setState({
               admin: true
           }) 
        } else {
            this.setState ({
                user: true
            })
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