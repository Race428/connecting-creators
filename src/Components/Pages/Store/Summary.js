import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


import style from '../../../CSS/summary.module.css'

function Summary(props) {

console.log(props)


return <div className={style.pageView}>

    <h2>Package Summary</h2>



</div>


}


const mapStateToProps = state => {
    return {
        ...state
    }
}




export default connect(mapStateToProps)(withRouter(Summary))

