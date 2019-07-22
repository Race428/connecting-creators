import React, { Component } from 'react'
import style from '../../../CSS/stepOne.module.css'
import '../../../CSS/store.css'
import PackageDisplay from '../Store/StoreComponents/packageDisplay'

import { updateDistributionSelection } from '../../../Redux/Reducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PageLocation from '../Store/StoreComponents/pageLocation'

// import { Link } from 'react-router-dom'


//add redux to update state with each new selection through the process. 

class Step6 extends Component {



    constructor() {
        super()
        this.state = {
            option1: false,
            option2: false,
            option3: false,
            option4: false,
            selectedOptions: []
        }


    }

    componentDidMount() {
        if (this.props.distributionSelection.length > 0) {
            var name = this.props.distributionSelection
            var lastIndex = this.props.distributionSelection.length-1
            
          
          for(let i = 0; i<name.length; i++){

            var element = name[i]
           
          
            this.setState({
                [element]: true,
              selectedOptions: name,
            })


          }
          
          this.setState({
              selected: this.props.distributionSelection[lastIndex]
          })

        } 
        else { 
            this.setState({
                option1:true,
                selectedOptions:['option1'],
                selected: 'option1'
            })
        }
       

    }

    componentDidUpdate = () => {
      
        this.props.updateDistributionSelection(this.state.selectedOptions)

    }






    ratio1Select = async () => {
        await this.setState({
            option1: !this.state.option1,
            selected: 'option1'
        });

        if (this.state.option1 === true) {

            var arr = [...this.state.selectedOptions, 'option1']
            //   var array= arr.push('option1')

            this.setState({
                selectedOptions: arr
            })
        } else {
            var array = [...this.state.selectedOptions]
            var index = array.indexOf('option1')
            if (index !== -1) array.splice(index, 1)
            this.setState({
                selectedOptions: array
            })


        }


    }



    ratio2Select = async () => {
        await this.setState({
            option2: !this.state.option2,
            selected: 'option2'

        });

        if (this.state.option2 === true) {

            var arr = [...this.state.selectedOptions, 'option2']
            //   var array= arr.push('option1')

            this.setState({
                selectedOptions: arr
            })

        } else {
            var array = [...this.state.selectedOptions]
            var index = array.indexOf('option2')
            if (index !== -1) array.splice(index, 1)
            this.setState({
                selectedOptions: array
            })


        }


    }


    ratio3Select = async () => {
        await this.setState({
            option3: !this.state.option3,
            selected: 'option3'


        });

        if (this.state.option3 === true) {

            var arr = [...this.state.selectedOptions, 'option3']
            //   var array= arr.push('option1')

            this.setState({
                selectedOptions: arr
            })
        } else {
            var array = [...this.state.selectedOptions]
            var index = array.indexOf('option3')
            if (index !== -1) array.splice(index, 1)
            this.setState({
                selectedOptions: array
            })


        }

    }

    ratio4Select = async () => {
        await this.setState({
            option4: !this.state.option4,
            selected: 'option4'


        });

        if (this.state.option4 === true) {

            var arr = [...this.state.selectedOptions, 'option4']
            //   var array= arr.push('option1')

            this.setState({
                selectedOptions: arr
            })
        } else {
            var array = [...this.state.selectedOptions]
            var index = array.indexOf('option4')
            if (index !== -1) array.splice(index, 1)
            this.setState({
                selectedOptions: array
            })


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

                                {
                                    this.state.selected === 'option1' && this.state.selectedOptions.includes('option1') ?
                                        <img src='https://image.flaticon.com/icons/png/512/124/124010.png' alt='fs' id='option1-image' name='option1-image' /> :
                                        <></>

                                }

                                {
                                    this.state.selected === 'option2' && this.state.selectedOptions.includes('option2') ?
                                        <img src='https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300' alt='fs' id='option2-image' name='option2-image' /> :
                                        <> </>

                                }



                                {
                                    this.state.selected === 'option3' && this.state.selectedOptions.includes('option3') ?
                                        <img src='http://www.monomosaic.com/assets/instagram_stories-3b6065d0bec7679f8d71542a66fd40ff.png' alt='fs' id='option3-image' name='option3-image' /> :

                                        <> </>
                                }
                                {
                                    this.state.selected === 'option4' && this.state.selectedOptions.includes('option4') ?
                                        <img src='https://i.gadgets360cdn.com/large/youtube_logo_new_official_1504077880072.jpg?output-quality=80' alt='fs' id='option3-image' name='option3-image' /> :

                                        <> </>
                                }




                            </div>


                            <PackageDisplay />
                        </div>
                        <div className={style.optionContainer}>


                            <div className={style.optionButtons}>
                                <h2>Select Your Distribution</h2>

                                {
                                    this.state.option1 ?
                                        <div id='selected' className='option1'

                                            onClick={this.ratio1Select}

                                        >Facebook</div> :
                                        <div id={`${this.state.option1}`} className='option1'

                                            onClick={this.ratio1Select}

                                        >Facebook</div>
                                }
   {
                                    this.state.option2 ?
                                    <div id='selected' className='option2'

                                    onClick={this.ratio2Select}

                                >Instagram</div>:
                                <div id={`${this.state.option2}`} className='option2'

                                onClick={this.ratio2Select}

                            >Instagram</div>
                                }
                               

                               {
                                    this.state.option3 ?
                                    <div id='selected' className='option3'

                                    onClick={this.ratio3Select}

                                >Instagram Stories</div>:
                                <div id={`${this.state.option3}`} className='option3'

                                onClick={this.ratio3Select}

                            >Instagram Stories</div>
                                }
                               



                               {
                                    this.state.option4 ?
                                    <div id='selected' className='option4'

                                    onClick={this.ratio4Select}

                                >YouTube Highlights</div>:
                                <div id={`${this.state.option4}`} className='option4'

                                onClick={this.ratio4Select}

                            >YouTube Highlights</div>
                                }
                               


                            </div>




                            <div className={style.optionDescription}>



                              

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
    updateDistributionSelection
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Step6))
