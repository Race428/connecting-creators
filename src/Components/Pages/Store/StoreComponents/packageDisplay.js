import React, {Component} from 'react'
import style from '../../../../CSS/packageDisplay.module.css'
// import {updatePackageSelection} from '../../Redux/Reducer'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateDetailSelection } from '../../../../Redux/Reducer';


function PackageDiplay(props) {
    const pages =['/shop/select-package','/shop/select-details','/shop/select-aspect-ratio', '/shop/select-style', '/shop/select-font', '/shop/select-distribution-options', '/shop/checkout' ]

const next = () => { 

  
    var x = pages.indexOf(props.location.pathname) + 1 
  

    if(props.fontSelection === 'option4') { 
        window.alert('please type in name of custom font')
    }

    else { 
props.history.push(pages[x])

        // props.history.push(`/shop/select-distribution-options`)
    }

    if(props.distributionSelection.length === 0) { 
        window.alert('please select at least one distribution option')
        props.history.push('/shop/select-distribution-options')
    }

    else { 
props.history.push(pages[x])

        // props.history.push(`/shop/select-distribution-options`)
    }



// props.history.push(pages[x])
// path is select-package. so x  = 0 
// if clicked, x should equal index 1 which is select-details 





}

// making a funtion that takes int he index of the path name that then adds one and this.props.history.push's to the next index. Do the same opposite for the back button 
    

    return <div className={style.pageView}>

        <div className={style.selectedOptionDetails}>




           <div  onClick={() => next()}className={style.button}>NEXT</div>
        </div>

    </div>
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(withRouter(PackageDiplay))






// {

//     props.packageSelection === 'package1' ?
//         <h1>You have selected Video Series Package</h1> :
//         <> </>

// }
// {
//     props.packageSelection === 'package2' ?
//         <h1>You have selected Podcast Package</h1> :
//         <> </>

// }

// {
//     props.packageSelection === 'package3' ?
//         <h1>You have selected YouTube Package</h1> :
//         <> </>

// }


// {
//     props.detailSelection === 'option1' ?
//         <h1>You have selected 3 Months</h1> :
//         <> </>

// }
// {
//     props.detailSelection === 'option2' ?
//         <h1>You have selected 6 Months</h1> :
//         <> </>

// }

// {
//     props.detailSelection === 'option3' ?
//         <h1>You have selected 12 Months</h1> :
//         <> </>




// }



// {
//     props.ratioSelection === 'option1' ?
//         <h1>You have selected 1920x1080</h1> :
//         <> </>

// }
// {
//     props.ratioSelection === 'option2' ?
//         <h1>You have selected Wider</h1> :
//         <> </>

// }

// {
//     props.ratioSelection === 'option3' ?
//         <h1>You have selected Largest</h1> :
//         <> </>




// }