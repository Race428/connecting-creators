import React, { Component } from 'react'
import style from '../../../CSS/stepOne.module.css'
import '../../../CSS/store.css'
import PackageDisplay from '../Store/StoreComponents/packageDisplay'

import { updateFontSelection } from '../../../Redux/Reducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PageLocation from '../Store/StoreComponents/pageLocation'



//add redux to update state with each new selection through the process. 

class Step5 extends Component {



    constructor() {
        super()
        this.state = {
            selected: 'none',
            defaultValue: 'Please type in desired font'

        }


    }

    componentDidMount() {
    
        if (this.props.fontSelection.length > 0) {
            var name = `${this.props.fontSelection}`
            this.setState({
                selected: name,
                placeHolder: name,
                defaultValue: name

            })


        }
        else {
            this.setState({
                selected: 'None',
                defaultValue: 'Please type in desired font'

            })



        }
    }

    componentDidUpdate = () => {
        this.props.updateFontSelection(this.state.selected)

    }


    fontType = (value) => {
        this.setState({
            selected: value
        })
    }




    nextPage = () => {
        if (this.state.selected === 'option4') {
            window.alert('please type in name of custom font')
        }

        else {
            this.props.history.push(`/shop/select-distribution-options`)
        }
    }



   


    render() {

        return (
            <>
                <div className={style.pageView}>
                    <div className={style.pageLocation}>
                        <PageLocation />

                    </div>
                    <div className={style.selections}>
          

                      <div className={style.inputContainer}>
                          <h1>Please Type in Your Desired Font</h1>
                        

                          
                        <input  placeholder={this.state.defaultValue} onChange={e => this.fontType(e.target.value)} />
                        </div>


                    </div>
                    <div className={style.pageLocation}>
                        <PackageDisplay />

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
    updateFontSelection
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Step5))
