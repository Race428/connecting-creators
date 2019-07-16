import React, { Component } from 'react'
import style from '../../../CSS/stepOne.module.css'
import PackageDisplay from '../../PackageStore/packageDisplay'
import { updateDetailSelection } from '../../../Redux/Reducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link} from 'react-router-dom'


//add redux to update state with each new selection through the process. 

class Step2 extends Component {



    constructor() {
        super()
        this.state = {
            detail1: 'detail1',
            detail2: 'detail2',
            detail3: 'detail3',
            // selected: ''
        }


    }

    componentDidMount() { 
        console.log(this.props)
        if(this.props.detailSelection.length > 0) { 
            var name = `${this.props.detailSelection}`
 
    this.setState({
        [name]: style.selected,
        selected: `${name}`

    })
   
    }
}

    componentDidUpdate = () => {
        this.props.updateDetailSelection(this.state.selected)
    }
    package1Select = () => {
        this.setState({
            detail1: style.selected,
            detail2: 'detail2',
            detail3: 'detail3',
            selected: 'detail1'
        });





    }
    package2Select = () => {
        this.setState({
            detail1: 'detail1',
            detail2: style.selected,
            detail3: 'detail3',
            selected: 'detail2'

        });



    }


    package3Select = () => {
        this.setState({
            detail1: 'detail1',
            detail2: 'detail2',
            detail3: style.selected,
            selected: 'detail3'

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
                            <h2>Select Your Details</h2>


                            <div id={`${this.state.detail1}`} className={style.option}

                                onClick={this.package1Select}

                            >Detail 1</div>

                            <div id={`${this.state.detail2}`} className={style.option}
                                onClick={this.package2Select}

                            >Detail 2</div>

                            <div id={`${this.state.detail3}`}
                                onClick={this.package3Select}
                                className={style.option}>Detail 3</div>

                            <Link to='/shop/select-package'>
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
    updateDetailSelection
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Step2))
