import React, { Component, useCallback } from 'react'
import style from '../../../CSS/stepOne.module.css'
import '../../../CSS/store.css'
import PackageDisplay from '../../PackageStore/packageDisplay'
import { updateStyleSelection, updateMusicSelection } from '../../../Redux/Reducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { object } from 'prop-types';


//add redux to update state with each new selection through the process. 

class Step4 extends Component {



    constructor() {
        super()
        this.state = {
            option1: 'option1',
            option2: 'option2',
            option3: 'option3',
            music1: 'music1',
            music2: 'music2',
            music3: 'music3',
            selected: '',
            musicSelected: ''
        }


    }

    componentDidMount() {
        if (this.props.styleSelection.length > 0) {
            var style = `${this.props.styleSelection}`
            this.setState({
                [style]: style.selected,
                selected: `${style}`
            })


        }

        if (this.props.musicSelection.length > 0) {
            var music = `${this.props.styleSelection}`
            this.setState({
                [music]: style.selected,
                musicSelected: `${music}`
            })


        }


    }

    componentDidUpdate = () => {
      
    }

    // list of gigs 
    // 6 - 12 months 
    // how much for each gig 

    // list of djs contractors you useCallback
    // what you pay each. 


    //








    option1Select = async () => {
        await this.setState({
            option1: 'selected',
            option2: 'option2',
            option3: 'option3',
            selected: 'option1',
        });

        this.props.updateStyleSelection(this.state.selected)

    }



    option2Select = async () => {
        await this.setState({
            option1: 'option1',
            option2: 'selected',
            option3: 'option3',
            selected: 'option2',

        });

        this.props.updateStyleSelection(this.state.selected)



    }


    option3Select = async () => {
        await this.setState({
            option1: 'option1',
            option2: 'option2',
            option3: 'selected',
            selected: 'option3',

        });
        this.props.updateStyleSelection(this.state.selected)

    }


    music1Select = async () => {
        await this.setState({
            music1: 'selected',
            music2: 'music2',
            music3: 'music3',
            musicSelected: 'music1',
        });
        this.props.updateMusicSelection(this.state.musicSelected)

    }



    music2Select = async () => {
       await  this.setState({
            music1: 'music1',
            music2: 'selected',
            music3: 'music3',
            musicSelected: 'music2',

        });
        this.props.updateMusicSelection(this.state.musicSelected)


    }


    music3Select =  async () => {
        await this.setState({
            music1: 'music1',
            music2: 'music2',
            music3: 'selected',
            musicSelected: 'music3',

        });
        this.props.updateMusicSelection(this.state.musicSelected)


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
                                    this.state.selected === 'option1' ?
                                        <img src='https://www.denverpost.com/wp-content/uploads/2018/11/traffic_Denver_rj_09808.jpg?w=817' alt='fs' id='option1-image' name='option1-image' /> :
                                        <></>

                                }

                                {
                                    this.state.selected === 'option2' ?
                                        <img src='https://media.cntraveller.in/wp-content/uploads/2018/09/Tokyo-Shibuya-neon-lights-866x487.jpg' alt='fs' id='option2-image' name='option2-image' /> :
                                        <> </>

                                }



                                {
                                    this.state.selected === 'option3' ?
                                        <img src='https://www.tripsavvy.com/thmb/M26q7v-vfonPlL7Zb-2D6wyMeBs=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/space-needle-and-mt-rainier-at-dusk-in-seattle-965903630-5c3f86694cedfd0001316b8d.jpg' alt='fs' id='option3-image' name='option3-image' /> :

                                        <> </>
                                }


                            </div>


                            <PackageDisplay />
                        </div>
                        <div className={style.optionContainer}>


                            <div className={style.optionButtons}>
                                <h2>Select Your Style and Color</h2>


                                <div id={`${this.state.option1}`} className='option1'

                                    onClick={this.option1Select}

                                >Denver</div>

                                <div id={`${this.state.option2}`} className='option2'
                                    onClick={this.option2Select}

                                >Tokyo</div>

                                <div id={`${this.state.option3}`}
                                    onClick={this.option3Select}
                                    className='option3'>Seattle</div>


                            </div>

                            <div className={style.optionDescription}>

                                <h2>Select Your Music</h2>


                                <div id={`${this.state.music1}`} className='option1'

                                    onClick={this.music1Select}

                                >Rap</div>

                                <div id={`${this.state.music2}`} className='option2'
                                    onClick={this.music2Select}

                                >Country</div>

                                <div id={`${this.state.music3}`}
                                    onClick={this.music3Select}
                                    className='option3'>Alt</div>











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
                                        <Link to='/shop/select-font'>
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
    updateStyleSelection,
    updateMusicSelection
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Step4))
