import React, { Component } from 'react'
import style from '../../../CSS/stepOne.module.css'
import '../../../CSS/store.css'
import PackageDisplay from '../Store/StoreComponents/packageDisplay'
import { updateStyleSelection, updateMusicSelection } from '../../../Redux/Reducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PageLocation from '../Store/StoreComponents/pageLocation'




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
          
        }


    }

    componentDidMount =  async() => {
        if (this.props.styleSelection.length > 0) {
            var style = `${this.props.styleSelection}`
          await  this.setState({
                [style]: 'selected',
                selected: `${style}`
            })
        
            this.props.updateStyleSelection(this.state.selected)



        }
        else { 
           await this.setState({
                option1:'selected',
                selected:'option1'
            })
         this.props.updateStyleSelection(this.state.selected)

        }


        if (this.props.musicSelection.length > 0) {
            var music = `${this.props.musicSelection}`
          await  this.setState({
                [music]: 'selected',
                musicSelected: `${music}`
            })
      this.props.updateMusicSelection(this.state.musicSelected)



        }
        else { 
           await this.setState({
                music1:'selected',
                musicSelected:'music1'
            })
       this.props.updateMusicSelection(this.state.musicSelected)

        }
        


    }

    componentDidUpdate = () => {

      
    }

  







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
                    <div className={style.pageLocation}>
                    <PageLocation />

                    </div>
                    <div className={style.selections}>

                        <div className={style.currentDisplayContainer}>

                            <div className={style.currentDisplay}>

                                {
                                    this.state.selected === 'option1' ?
                                        <img src='https://www.denverpost.com/wp-content/uploads/2018/11/traffic_Denver_rj_09808.jpg?w=817' alt='fs' id='option1-image' name='option1-image'  className={style.step1Image} /> :
                                        <></>

                                }

                                {
                                    this.state.selected === 'option2' ?
                                        <img src='https://media.cntraveller.in/wp-content/uploads/2018/09/Tokyo-Shibuya-neon-lights-866x487.jpg' alt='fs' id='option2-image' name='option2-image'  className={style.step1Image} /> :
                                        <> </>

                                }



                                {
                                    this.state.selected === 'option3' ?
                                        <img src='https://www.tripsavvy.com/thmb/M26q7v-vfonPlL7Zb-2D6wyMeBs=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/space-needle-and-mt-rainier-at-dusk-in-seattle-965903630-5c3f86694cedfd0001316b8d.jpg' alt='fs' id='option3-image' name='option3-image'  className={style.step1Image} /> :

                                        <> </>
                                }


                            </div>


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










>
                                

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
    updateStyleSelection,
    updateMusicSelection
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Step4))
