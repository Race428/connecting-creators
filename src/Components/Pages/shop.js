import React, { Component } from 'react'
import style from '../../CSS/store.module.css'




//add redux to update state with each new selection through the process. 

class Shop extends Component {

    constructor() {
        super()
        this.state = {
            package1: 'package1',
            package2: 'package2',
            package3: 'package3',
        }
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
                        <div className={style.packageDisplay}></div>
                        <div className={style.optionContainer}>
                            <h2>Select Your package</h2>


                            <div id={`${this.state.package1}`} className={style.option}

                                onClick={ this.package1Select}

                            >Package 1</div>

                            <div id={`${this.state.package2}`} className={style.option}
                                onClick={this.package2Select}

                            >Package 2</div>

                            <div id={`${this.state.package3}`}
                                onClick={this.package3Select}
                                className={style.option}>Package 3</div>

                            {/* <button onClick={this.reset}>Reset</button> */}





                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Shop