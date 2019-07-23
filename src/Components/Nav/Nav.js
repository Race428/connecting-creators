import React, { Component } from 'react'
import navStyles from '../../CSS/nav.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import Logo from '../Images/logo.PNG'

class Nav extends Component {

    componentDidMount() {



    }
    render() {
        return (
            <>


                <nav>

                    <div className={navStyles.topRow}>
                        <Link to='/podcasts'>
                            <div className={navStyles.link}>
                                Interviews
                             </div>
                        </Link>

                        <Link to='/shop/select-package'>
                            <div className={navStyles.link}>
                                Shop
                </div>
                        </Link>
                    </div>
                    <div className={navStyles.templeMill}>
                        <Link className={navStyles.link} to='/'>
                            <img className={navStyles.logo} src='https://s3-us-west-1.amazonaws.com/achesonco/temple.png ' alt='logo' />
                        </Link>
                    </div>


                    {/* <Link to=''>
                <div className={navStyles.link}>
                    About 
                </div>
                </Link> */}

                </nav>
            </>

        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Nav)
