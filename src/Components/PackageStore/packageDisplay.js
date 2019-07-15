import React from 'react'
import style from '../../CSS/packageDisplay.module.css'
// import {updatePackageSelection} from '../../Redux/Reducer'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


function PackageDiplay (props) { 

    console.log( props.packageSelection)
    return <div className={style.pageView}>

{
    props.packageSelection === 'package1' ? 
<h1>You have selected Package 1</h1> :
<> </> 

}
{
    props.packageSelection === 'package2' ? 
<h1>You have selected Package 2</h1> :
<> </> 

}

{
    props.packageSelection === 'package3' ? 
<h1>You have selected Package 3</h1> :
<> </> 

}


{
    props.detailSelection === 'detail1' ? 
<h1>You have selected detail 1</h1> :
<> </> 

}
{
    props.detailSelection === 'detail2' ? 
<h1>You have selected detail 2</h1> :
<> </> 

}

{
    props.detailSelection === 'detail3' ? 
<h1>You have selected detail 3</h1> :
<> </>




}
    
    </div>
}

const mapStateToProps = state=> {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(withRouter(PackageDiplay))
