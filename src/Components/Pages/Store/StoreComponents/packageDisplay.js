import React, { Component } from 'react'
import style from '../../../../CSS/packageDisplay.module.css'
// import {updatePackageSelection} from '../../Redux/Reducer'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateDetailSelection } from '../../../../Redux/Reducer';


function PackageDiplay(props) {
    const pages = ['/shop/select-package', '/shop/select-details', '/shop/select-aspect-ratio', '/shop/select-style', '/shop/select-font', '/shop/select-distribution-options', '/shop/checkout']


//have redux already have everything in the choices
    const packagePrices = [700, 900,1200]

    const detailPrices = [0, 500, 1000]

    const ratioPrices = [0, 150, 300]

    const stylePrices = [0,0,100]

    const musicPrices = [0,0,0]

    const fontPrices = [0,0,0]

    const distributionPrices = [200,200,200,200]



const optionIndex = ['option1', 'option2','option3','option4']

    // packageIndexFunction= (props.packageSelectd){ 
    //     var indexItem = optionIndex.indexOf(value)
    //     const packagePrice = packagePrices[indexItem]
    //     console.log(packagePrice)
    // }

    //making it so that whatever is on props of each redux state gets the index and then is assosciated with the price in the specific array. 


    // find out how to do a compoenent did update and have it recognize a new redux state change


    const me = () => { 
        const me = <h1>Hi how are you</h1>
    }



    const next = () => {

        const y = props.location.pathname

        var x = pages.indexOf(props.location.pathname) + 1


        if (props.fontSelection === 'option4') {
            window.alert('please type in name of custom font')
        }

        else {
            props.history.push(pages[x])

            // props.history.push(`/shop/select-distribution-options`)
        }

        if (props.distributionSelection.length === 0 && y === '/shop/select-distribution-options') {
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




            <div className={style.button} onClick={() => next()}>NEXT</div>
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