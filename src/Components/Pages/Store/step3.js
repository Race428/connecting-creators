import React, { Component } from 'react'
import style from '../../../CSS/stepOne.module.css'
import '../../../CSS/store.css'
import PackageDisplay from '../Store/StoreComponents/packageDisplay'

import { updateRatioSelection } from '../../../Redux/Reducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PageLocation from '../Store/StoreComponents/pageLocation'



//add redux to update state with each new selection through the process. 

class Step3 extends Component {



    constructor() {
        super()
        this.state = {
            option1: 'option1',
            option2: 'option2',
            option3: 'option3',
        }


    }

    componentDidMount() {
        if (this.props.ratioSelection.length > 0) {
            var name = `${this.props.ratioSelection}`
            this.setState({
                [name]: style.selected,
                selected: `${name}`
            })


        }
        else { 
            this.setState({
                option1:'selected',
                selected:'option1'
            })
        }
     

    }

    componentDidUpdate = () => {
        this.props.updateRatioSelection(this.state.selected)

    }
    option1Select = async () => {
        await this.setState({
            option1: 'selected',
            option2: 'option2',
            option3: 'option3',
            selected: 'option1'
        });
    }



    option2Select = async () => {
        await this.setState({
            option1: 'option1',
            option2: 'selected',
            option3: 'option3',
            selected: 'option2'
        })
    

    }


    option3Select = () => {
        this.setState({
            option1: 'option1',
            option2: 'option2',
            option3: 'selected',
            selected: 'option3'

        });





    }





   





    render() {

        return (
            <>
                <div className={style.pageView}>
                    <div className={style.pageLocation}>
                        <PageLocation />

                    </div>

                    <div className={style.selections}>

                        <div className={style.currentDisplayContainer}>

                            <div className={style.currentDisplay}>

                                {
                                    this.state.selected === 'option1' ?
                                        <img src='https://s3-us-west-1.amazonaws.com/achesonco/1920x.png' alt='fs' id='option1-image' name='option1-image' className={style.step1Image} /> :
                                        <></>
                                }

                                {
                                    this.state.selected === 'option2' ?
                                        <img src='https://s3-us-west-1.amazonaws.com/achesonco/1440p.png' alt='fs' id='option2-image' name='option2-image' className={style.step1Image} /> :
                                        <> </>

                                }



                                {
                                    this.state.selected === 'option3' ?
                                        <img src='https://s3-us-west-1.amazonaws.com/achesonco/4k.png' alt='fs' id='option3-image' name='option3-image' className={style.step1Image} /> :
                                        <> </>
                                }


                            </div>


                        </div>
                        <div className={style.optionContainer}>


                            <div className={style.optionButtons}>
                                <h4>Pick Aspect Ratio</h4>


                                <div id={`${this.state.option1}`} className='option1'

                                    onClick={this.option1Select}

                                >1920 x 1080</div>

                                <div id={`${this.state.option2}`} className='option2'
                                    onClick={this.option2Select}

                                >Wider - 1440p</div>

                                <div id={`${this.state.option3}`}
                                    onClick={this.option3Select}
                                    className='option3' >Widest - 4K</div>


                            </div>

                            <div className={style.optionDescription}>


                            
                            </div>



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
    updateRatioSelection
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Step3))
