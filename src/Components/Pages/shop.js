import React, { Component } from 'react'
import style from '../../CSS/store.module.css'




//add redux to update state with each new selection through the process. 

class Shop extends Component {

    constructor() {
        super()
        this.state = {
            selected:''
        }
    }



    handleChange = (value) => {
        this.setState({
            selected: value

        });
      
       console.log(document.getElementById(`${this.state.selected}`))

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


                         <div id='package1' className={style.option}
                         
                         onClick={e => this.handleChange('package1')}
                         
                         >Package 1</div>

                         <div id='package2' className={style.option}
                          onClick={e => this.handleChange('package2')}

                          >Package 2</div>

                         <div id='package3'
                          onClick={e => this.handleChange('package3')}
                         className={style.option}>Package 3</div>

                     




                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Shop