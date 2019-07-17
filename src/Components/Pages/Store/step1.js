import React, { Component } from 'react'
import style from '../../../CSS/stepOne.module.css'
import '../../../CSS/store.css'
import PackageDisplay from '../../PackageStore/packageDisplay'
import { updatePackageSelection } from '../../../Redux/Reducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


//add redux to update state with each new selection through the process. 

class Step1 extends Component {



    constructor() {
        super()
        this.state = {
            package1: 'package1',
            package2: 'package2',
            package3: 'package3',
      
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

        }
    }

    componentDidUpdate = () => {
        this.props.updatePackageSelection(this.state.selected)
       
        if(this.state.package1 === 'selected'){
            console.log('hi')
            var y = document.getElementsByName('option1-image');
            y[0].setAttribute('id', 'option1-image-active');
    }
    else { 
        var y = document.getElementsByName('option1-image');
        y[0].setAttribute('id', 'option1-image');
    }



    if(this.state.package2 === 'selected'){
  
        var y = document.getElementsByName('option2-image');
        y[0].setAttribute('id', 'option2-image-active');
}
else { 
    var y = document.getElementsByName('option2-image');
    y[0].setAttribute('id', 'option2-image');
}
     


if(this.state.package3 === 'selected'){
  
    var y = document.getElementsByName('option3-image');
    y[0].setAttribute('id', 'option3-image-active');
}
else { 
var y = document.getElementsByName('option3-image');
y[0].setAttribute('id', 'option3-image');
}
    }
    package1Select = async () => {
       await this.setState({
            package1: 'selected',
            package2: 'package2',
            package3: 'package3',
            selected: 'package1'
        });
    }



     package2Select = async () => {
        await this.setState({
            package1: 'package1',
            package2: 'selected',
            package3: 'package3',
            selected: 'package2'

        });

      
      

    }


    package3Select = () => {
        this.setState({
            package1: 'package1',
            package2: 'package2',
            package3: 'selected',
            selected: 'package3'

        });
       




    }





    handleSubmit = (event) => {
        event.preventDefault();


        alert(`You chose the ${this.state.size} pizza.`);
    }





    render() {



        return (
            <>
                <div className={style.pageView}>
                    <div className={style.pageLocation}></div>
                    <div className={style.selections}>

                        <div className={style.currentDisplayContainer}>

                            <div className={style.currentDisplay}>


                                <img src='https://images.unsplash.com/photo-1526660690293-bcd32dc3b123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='fs' id='option1-image' name='option1-image' />
                                <img src='https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='fs' id='option2-image' name='option2-image' />

                              
                                <img src=' https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='fs' id='option3-image' name='option3-image' />
                               
                            </div>


                            <PackageDisplay />
                        </div>
                        <div className={style.optionContainer}>


                            <div className={style.optionButtons}>
                                <h2>Select Video Package</h2>


                                <div id={`${this.state.package1}`} className='option1'

                                    onClick={this.package1Select}

                                >Video Series</div>

                                <div id={`${this.state.package2}`} className='option2'
                                    onClick={this.package2Select}

                                >Podcast</div>

                                <div id={`${this.state.package3}`}
                                    onClick={this.package3Select}
                                    className='option3' >YouTube</div>


                            </div>

                            <div className={style.optionDescription}>



                            </div>

                            <Link to='/shop/select-details'>
                                <button onClick={this.reset}>Next Step</button>
                            </Link>

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
    updatePackageSelection
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Step1))
