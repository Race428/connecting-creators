import React, { Component } from 'react'
import style from '../../../CSS/stepOne.module.css'
import '../../../CSS/store.css'
import PackageDisplay from '../Store/StoreComponents/packageDisplay'

import { updatePackageSelection } from '../../../Redux/Reducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PageLocation from '../Store/StoreComponents/pageLocation'
import BottomBar from '../Store/StoreComponents/bottomBar'
//add redux to update state with each new selection through the process. 

class Step1 extends Component {



    constructor(props) {
        super(props)
        this.state = {
            option: 'option1',
            option2: 'option2',
            option3: 'option3',
            // selected:'package1'

            // selected:''
        }


    }



    componentDidMount() {


        if (this.props.packageSelection.length > 0) {
            var name = `${this.props.packageSelection}`
            this.setState({
                [name]: style.selected,
                selected: `${name}`
            })


        } else {
            this.setState({
                option1: 'selected',
                selected: 'option1'
            })
        }




    }

    componentDidUpdate = () => {
        this.props.updatePackageSelection(this.state.selected)

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
                                        <img src='https://images.unsplash.com/photo-1526660690293-bcd32dc3b123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='fs' id='option1-image' name='option1-image' className={style.step1Image} /> :
                                        <></>
                                }

                                {
                                    this.state.selected === 'option2' ?
                                        <img src='https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='fs' id='option2-image' name='option2-image' className={style.step1Image} /> :
                                        <> </>

                                }



                                {
                                    this.state.selected === 'option3' ?
                                        <img src=' https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='fs' id='option3-image' name='option3-image' className={style.step1Image} /> :
                                        <> </>
                                }


                            </div>


                        </div>
                        <div className={style.optionContainer}>


                            <div className={style.optionButtons}>
                                <h4>Select Video Package</h4>


                                <div id={`${this.state.option1}`} className='option1'

                                    onClick={this.option1Select}

                                >Video Series</div>

                                <div id={`${this.state.option2}`} className='option2'
                                    onClick={this.option2Select}

                                >Podcast</div>

                                <div id={`${this.state.option3}`}
                                    onClick={this.option3Select}
                                    className='option3' >YouTube</div>


                            </div>

                            <div className={style.optionDescription}>


                                {
                                    this.state.selected === 'option1' ?
                                        <div className={style.description}>
                                            <h3>Our series package includes:</h3>
                                            <ul>
                                                <li>- 10 to 20 minute videos</li>
                                                <li>- 3 videographers</li>

                                            </ul>
                                        </div> :
                                        <></>
                                }

                                {
                                    this.state.selected === 'option2' ?
                                        <div className={style.description}>
                                            <h3>Our Podcast package includes:</h3>
                                            <ul>
                                                <li>- 20 to 60 minute interviews</li>
                                                <li>- Podcast studio for filiming</li>
                                                <li>- 2 videographers</li>
                                            </ul>
                                        </div> :
                                        <> </>

                                }



                                {
                                    this.state.selected === 'option3' ?
                                        <div className={style.description}>
                                            <h3>Our Youtube package includes:</h3>
                                            <ul>
                                                <li>- 5 to 10 minute videos</li>
                                                <li>- Basic studeio set up</li>
                                                <li>- Vlog style or educational channel</li>
                                            </ul>
                                        </div> :
                                        <> </>
                                }
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
    updatePackageSelection
  
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Step1))
