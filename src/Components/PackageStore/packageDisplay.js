import React from 'react'
import style from '../../CSS/packageDisplay.module.css'
// import {updatePackageSelection} from '../../Redux/Reducer'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


function PackageDiplay(props) {


    return <div className={style.pageView}>
        <div className={style.currentPackageDisplay}>
        {


//the issue i need to fix is to have the page kknow when the page switches, that way it can show videos only based on the selection, or other detials and not have to have 1000 turnarys with all the details. Maybe do a state change where option 1 on each page sends the diffrent value to redux. Or do a redux store update on what page you are currenty on and have a conditional render based on the page, and then do one based on if option 1 /2/3 is selected. then i can hard code what each option for each number is. 


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



        </div>


        <div className={style.selectedOptionDetails}>
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

    </div>
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(withRouter(PackageDiplay))
