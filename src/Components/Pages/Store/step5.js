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
            option1: 'option1',
            option2: 'option2',
            option3: 'option3',
            option4: 'option4'
        }


    }

    componentDidMount() {
        if (this.props.fontSelection.length > 0) {
            var name = `${this.props.fontSelection}`
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
        this.props.updateFontSelection(this.state.selected)

    }
    ratio1Select = async () => {
        await this.setState({
            option1: style.selected,
            option2: 'option2',
            option3: 'option3',
            option4: 'option4',
            selected: 'option1',
        });
    }



    ratio2Select = async () => {
        await this.setState({
            option1: 'option1',
            option2: style.selected,
            option3: 'option3',
            option4: 'option4',
            selected: 'option2',

        });




    }


    ratio3Select = () => {
        this.setState({
            option1: 'option1',
            option2: 'option2',
            option3: style.selected,
            selected: 'option3',
            option4: 'option4',

        });


    }

    ratio4Select = () => {
        this.setState({
            option1: 'option1',
            option2: 'option2',
            option3: 'option3',
            option4: 'toggle',
            selected: 'option4',

        });


    }

    fontType = (value) => { 
        this.setState({
            option1: 'option1',
            option2: 'option2',
            option3: 'option3',
            option4: 'toggle',
            selected: value,
        })
    }




nextPage = () => { 
    if(this.state.selected === 'option4') { 
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

                        <div className={style.currentDisplayContainer}>

                            <div className={style.currentDisplay}>


 only have 1 font option have it be the custom 
                                {
                                    this.state.selected === 'option1' ?
                                        <h1 className={style.font1}>
                                            Thank you for using Connecting Creators! We appreacite your business.
                                </h1> :
                                        <></>

                                }

                                {
                                    this.state.selected === 'option2' ?
                                        <h1 className={style.font2}>
                                            Thank you for using Connecting Creators! We appreacite your business.
                                </h1> :
                                        <> </>

                                }



                                {
                                    this.state.selected === 'option3' ?
                                        <h1 className={style.font3}>
                                            Thank you for using Connecting Creators! We appreacite your business.
                                      </h1> :

                                        <> </>
                                }


                                {
                                    this.state.option4 === 'toggle' ?
                                        < div className={style.fontCustom}>
                                            <img src='https://s3-us-west-1.amazonaws.com/achesonco/googlefontexample.png' alt='fs' id='option3-image' name='option3-image' />
                                            <h2>Use this example. Search Google Fonts and find the name of your desired font. Insert the name of the font into the input.</h2>
                                            <h2>Please select a font from <a href='https://fonts.google.com/' target="_blank" rel="noopener noreferrer">Google Fonts </a>
                                                and insert the name of desired font in the space below.
                                            </h2>

                                            <input onChange={e => this.fontType(e.target.value)} placeholder='insert font name here' />
                                        </div>
                                        :

                                        <> </>
                                }

                              

                            </div>


                            <PackageDisplay />
                        </div>
                        <div className={style.optionContainer}>


                            <div className={style.optionButtons}>
                                <h2>Select Your Font</h2>


                                <div id={`${this.state.option1}`} className='option1'

                                    onClick={this.ratio1Select}

                                >Heebo</div>

                                <div id={`${this.state.option2}`} className='option2'
                                    onClick={this.ratio2Select}

                                >Lora</div>

                                <div id={`${this.state.option3}`}
                                    onClick={this.ratio3Select}
                                    className='option3' >Barriecito</div>


                            <div id={`${this.state.option4}`}
                                onClick={this.ratio4Select}
                                className='option4'>
                                Custom Font
                                    </div>

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
                                       
                                       
                                      
                                            <button className={style.button} onClick={this.nextPage}>Next Step</button>
                                        :
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Step5))
