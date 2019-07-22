import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


import style from '../../../CSS/summary.module.css'

function Summary(props) {

    console.log(props)


    return <div className={style.pageView}>

        <div className={style.summaryContainer}>
            <h1 className={style.title}>Package Summary</h1>
            
            

        <div className={style.filler}>

        </div>
        </div>




    </div>


}


const mapStateToProps = state => {
    return {
        ...state
    }
}




export default connect(mapStateToProps)(withRouter(Summary))

