import React, { Component } from 'react'
import style from '../../../CSS/packageSelect.module.css'
import PackageDisplay from '../../PackageStore/packageDisplay'
import { updatePackageSelection } from '../../../Redux/Reducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import  { Link} from 'react-router-dom'


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
        if(this.props.packageSelection.length > 0) { 
            var name = `${this.props.packageSelection}`
 
    this.setState({
        [name]: style.selected,
        selected: `${name}`
    })
   
    }
}
    
    componentDidUpdate = () => { 
        this.props.updatePackageSelection(this.state.selected)
    }
    package1Select = () => {
        this.setState({
            package1: style.selected,
            package2: 'package2',
            package3: 'package3',
            selected: 'package1'
        });

       
  


    }
    package2Select = () => {
        this.setState({
            package1: 'package1',
            package2: style.selected,
            package3: 'package3',
            selected: 'package2'

        });
     

        
    }


    package3Select = () => {
        this.setState({
            package1: 'package1',
            package2: 'package2',
            package3: style.selected,
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
                        <PackageDisplay />
                        <div className={style.optionContainer}>
                            <h2>Select Video Package</h2>


                            <div id={`${this.state.package1}`} className={style.option}

                                onClick={this.package1Select}

                            >Video Series</div>

                            <div id={`${this.state.package2}`} className={style.option}
                                onClick={this.package2Select}

                            >Podcast</div>

                            <div id={`${this.state.package3}`}
                                onClick={this.package3Select}
                                className={style.option}>YouTube</div>

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

const mapStateToProps =state=> {
    return {
        ...state 
    }
}


const mapDispatchToProps = {
    updatePackageSelection
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Step1))
