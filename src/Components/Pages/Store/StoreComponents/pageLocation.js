import React from 'react'
import style from '../../../../CSS/pageLocation.module.css'
// import {updatePackageSelection} from '../../Redux/Reducer'

// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'


export default function PageLocation() {


    return <div className={style.pageView}>

        <div>Video Package</div>
        <div> Duration</div>
        <div>Aspect Ratio</div>
        <div>Style | Music</div>
        <div>Font</div>
        <div>Distribution</div>
        <div>Checkout</div>
    
    </div>
}

// const mapStateToProps = state => {
//     return {
//         ...state
//     }
// }

// export default connect(mapStateToProps)(withRouter(PageLocation))
