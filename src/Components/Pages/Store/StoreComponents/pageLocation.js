import React, { Component } from 'react'
import '../../../../CSS/pageLocation.css'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'



class PageLocation extends Component {


    constructor(props) {
        super(props)
        this.state = {
            div: 'navLink'
        }

    }




    componentDidMount() {

    
        document.getElementById(this.props.location.pathname).setAttribute("class", 'navLinkSelected')

    }


    onClick = (value) => {

        this.props.history.push(value)
    }

    checkoutClick = (value) => {

        this.props.history.push(value)

        if(this.props.distributionSelection.length === 0) { 
            window.alert('please select at least one distribution option')
            this.props.history.push('/shop/select-distribution-options')
        }
    
        else { 
    this.props.history.push(value)
    
            // props.history.push(`/shop/select-distribution-options`)
        }
    

    }

    render() {

        return (
            <div className='locationPageView'>




                <div onClick={() => this.onClick('/shop/select-package')} className={`${this.state.div}`} id='/shop/select-package'>Video Package</div>

                <div onClick={() => this.onClick('/shop/select-details')} className={`${this.state.div}`} id='/shop/select-details'> Duration</div>

                <div onClick={() => this.onClick('/shop/select-aspect-ratio')} className={`${this.state.div}`} id='/shop/select-aspect-ratio'>Aspect Ratio</div>

                <div onClick={() => this.onClick('/shop/select-style')} className={`${this.state.div}`} id='/shop/select-style'>Style | Music</div>

                <div onClick={() => this.onClick('/shop/select-font')} className={`${this.state.div}`} id='/shop/select-font'>Font</div>

                <div onClick={() => this.onClick('/shop/select-distribution-options')} className={`${this.state.div}`} id='/shop/select-distribution-options'>Distribution</div>

                <div onClick={() => this.checkoutClick('/shop/checkout')} className={`${this.state.div}`} id='/shop/checkout'>Checkout</div>

            </div>
        )



    }

}
const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(withRouter(PageLocation))
