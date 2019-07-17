import React from 'react'
import style from '../../CSS/packageDisplay.module.css'
// import {updatePackageSelection} from '../../Redux/Reducer'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


function PackageDiplay(props) {


    return <div className={style.pageView}>

        <div className={style.selectedOptionDetails}>
            {

                props.packageSelection === 'package1' ?
                    <h1>You have selected Video Series Package</h1> :
                    <> </>

            }
            {
                props.packageSelection === 'package2' ?
                    <h1>You have selected Podcast Package</h1> :
                    <> </>

            }

            {
                props.packageSelection === 'package3' ?
                    <h1>You have selected YouTube Package</h1> :
                    <> </>

            }


            {
                props.detailSelection === 'option1' ?
                    <h1>You have selected 3 Months</h1> :
                    <> </>

            }
            {
                props.detailSelection === 'option2' ?
                    <h1>You have selected 6 Months</h1> :
                    <> </>

            }

            {
                props.detailSelection === 'option3' ?
                    <h1>You have selected 12 Months</h1> :
                    <> </>




            }



            {
                props.ratioSelection === 'option1' ?
                    <h1>You have selected 1920x1080</h1> :
                    <> </>

            }
            {
                props.ratioSelection === 'option2' ?
                    <h1>You have selected Wider</h1> :
                    <> </>

            }

            {
                props.ratioSelection === 'option3' ?
                    <h1>You have selected Largest</h1> :
                    <> </>




            }
        </div>

    </div>
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(withRouter(PackageDiplay))
