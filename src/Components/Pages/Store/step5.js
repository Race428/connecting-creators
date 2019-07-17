import React, { Component } from 'react'
import style from '../../../CSS/stepOne.module.css'
import '../../../CSS/store.css'
import PackageDisplay from '../../PackageStore/packageDisplay'
import { updateFontSelection } from '../../../Redux/Reducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


//add redux to update state with each new selection through the process. 

class Step3 extends Component {



    constructor() {
        super()
        this.state = {
            ratio1: 'ratio1',
            ratio2: 'ratio2',
            ratio3: 'ratio3',
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
        console.log(this.state.selected)

    }

    componentDidUpdate = () => {
        this.props.updateFontSelection(this.state.selected)

    }
    ratio1Select = async () => {
        await this.setState({
            ratio1: 'selected',
            ratio2: 'ratio2',
            ratio3: 'ratio3',
            selected: 'ratio1'
        });
    }



    ratio2Select = async () => {
        await this.setState({
            ratio1: 'ratio1',
            ratio2: 'selected',
            ratio3: 'ratio3',
            selected: 'ratio2'

        });




    }


    ratio3Select = () => {
        this.setState({
            ratio1: 'ratio1',
            ratio2: 'ratio2',
            ratio3: 'selected',
            selected: 'ratio3'

        });





    }





   





    render() {

        return (
            <>
                <div className={style.pageView}>
                    <div className={style.pageLocation}></div>
                    <div className={style.selections}>

                        <div className={style.currentDisplayContainer}>

                            <div className={style.currentDisplay}>

                                {
                                    this.state.selected === 'ratio1' ?
                                        <img src='https://s3-us-west-1.amazonaws.com/achesonco/1920x.png' alt='fs' id='option1-image' name='option1-image' /> :
                                        <></>
                                      
                                }

                                {
                                    this.state.selected === 'ratio2' ?
                                        <img src='https://s3-us-west-1.amazonaws.com/achesonco/1440p.png' alt='fs' id='option2-image' name='option2-image' /> :
                                        <> </>

                                }



                                {
                                    this.state.selected === 'ratio3' ?
                                        <img src='https://s3-us-west-1.amazonaws.com/achesonco/4k.png' alt='fs' id='option3-image' name='option3-image' /> :
                                       
                                        <> </>
                                }


                            </div>


                            <PackageDisplay />
                        </div>
                        <div className={style.optionContainer}>


                            <div className={style.optionButtons}>
                                <h2>Select Your Aspect Ratio</h2>


                                <div id={`${this.state.ratio1}`} className='option1'

                                    onClick={this.ratio1Select}

                                >1920 x 1018</div>

                                <div id={`${this.state.ratio2}`} className='option2'
                                    onClick={this.ratio2Select}

                                >Slightly Wider</div>

                                <div id={`${this.state.ratio3}`}
                                    onClick={this.ratio3Select}
                                    className='option3' >Widest (21x9)</div>


                            </div>

                            <div className={style.optionDescription}>


                                {/* {
                                    this.state.selected === 'ratio1' ?
                                        <div className={style.description}>
                                            <h3>Our series package includes:</h3>
                                            <ul>
                                                <li>- 10 to 20 minute videos</li>
                                                <li>- 3 videographers</li>
                                                
                                            </ul>
                                         </div>:
                                        <></>
                                }

                                {
                                    this.state.selected === 'ratio2' ?
                                    <div className={style.description}>
                                    <h3>Our Podcast package includes:</h3>
                                    <ul>
                                        <li>- 20 to 60 minute interviews</li>
                                        <li>- Podcast studio for filiming</li>
                                        <li>- 2 videographers</li>
                                    </ul>
                                 </div>:
                                        <> </>

                                }



                                {
                                    this.state.selected === 'ratio3' ?
                                    <div className={style.description}>
                                    <h3>Our Youtube package includes:</h3>
                                    <ul>
                                        <li>- 5 to 10 minute videos</li>
                                        <li>- Basic studeio set up</li>
                                        <li>- Vlog style or educational channel</li>
                                    </ul>
                                 </div>:
                                        <> </>
                                } */}

                                {
                                    this.state.selected ?
                                        <Link to='/shop/select-details'>
                                            <button className={style.button} onClick={this.reset}>Next Step</button>
                                        </Link> :
                                        <></>
                                }

                            </div>



                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Step3))
