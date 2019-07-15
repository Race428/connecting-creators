import React from 'react'
import style from '../../CSS/packageDisplay.module.css'
// import {updatePackageSelection} from '../../Redux/Reducer'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


function PackageDiplay (props) { 

   
   


    

    
    return <div className={style.pageView}>

<h1>{props.packageSelection}</h1>
    
    </div>
}








const mapStateToProps = state=> {
    return {
        ...state
    }
}



export default connect(mapStateToProps)(withRouter(PackageDiplay))
