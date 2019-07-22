/* eslint-disable no-redeclare */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


import style from '../../../CSS/summary.module.css'


function Summary(props) {
    const { packageSelection, detailSelection, ratioSelection, styleSelection, musicSelection, fontSelection, distributionSelection } = props

    const packagePrices = ['Video Series', 'Podcast', 'YouTube']

    const detailPrices = ['3 Months', '6 Months', '12 Months']

    const ratioPrices = ['1920 x 1080', 'Wider - 1440p', 'Widest - 4k']

    const stylePrices = ['Denver', 'Tokyo', 'Seattle']

    const musicPrices = ['Rap', 'Country', 'Alt']



    const distributionPrices = ['Facebook', 'Instagram', 'Instagram Stories', 'YouTube Highlights']

    const totalPrice = []

    const distributionArray = []
    const optionIndex = ['option1', 'option2', 'option3', 'option4']
    const musicIndex = ['music1', 'music2', 'music3', 'music4']













    const packagePrice = () => {

        var indexItem = optionIndex.indexOf(packageSelection)
        var price = packagePrices[indexItem]
        totalPrice.push(price)

    }


    const detailPrice = () => {
        // console.log(detailSelection)
        var indexItem = optionIndex.indexOf(detailSelection)
        var price = detailPrices[indexItem]

        totalPrice.push(price)

    }

    const ratioPrice = () => {
        // console.log(detailSelection)
        var indexItem = optionIndex.indexOf(ratioSelection)
        var price = ratioPrices[indexItem]

        totalPrice.push(price)

    }
    const stylePrice = () => {
        // console.log(detailSelection)
        var indexItem = optionIndex.indexOf(styleSelection)
        var price = stylePrices[indexItem]

        totalPrice.push(price)

    }

    const musicPrice = () => {
        // console.log(detailSelection)
        var indexItem = musicIndex.indexOf(musicSelection)
        var price = musicPrices[indexItem]

        totalPrice.push(price)

    }

    const fontPrice = () => {
        // console.log(detailSelection)


        totalPrice.push(fontSelection)

    }


    const distributionPrice = () => {
        for (let i = 0; i < distributionSelection.length; i++) {

            var indexItem = optionIndex.indexOf(distributionSelection[i])
            var price = distributionPrices[indexItem]
            distributionArray.push(price)
        }
        console.log(distributionArray)
    }


    packagePrice()
    detailPrice()
    ratioPrice()
    stylePrice()
    musicPrice()
    fontPrice()
    distributionPrice()



    if (distributionArray.length === 1) {
        var distributionView = distributionArray[0]
    }
    if (distributionArray.length === 2) {
        var distributionView = distributionArray[0] + ', ' + distributionArray[1]
    }
    if (distributionArray.length === 3) {
        var distributionView = distributionArray[0] + ', ' + distributionArray[1] + ', ' + distributionArray[2]
    }
    if (distributionArray.length === 4) {
        var distributionView = distributionArray[0] + ', ' + distributionArray[1] + ', ' + distributionArray[2] + ', ' + distributionArray[3]
    }





    return <div className={style.pageView}>

        <div className={style.summaryContainer}>
         
            <div className={style.logo}>
                <img src ='https://s3-us-west-1.amazonaws.com/achesonco/BlackConnecting.png' alt ='logo'/>
            </div>
            <h1 className={style.title}>Package Summary</h1>
            <div className={style.container}> 
           
            <div className={style.selectionList}>
                <h1 id={style.label}>Video Package-</h1> <h1 id={style.value}>{totalPrice[0]}</h1>
            </div>
            <div className={style.selectionList}>
                <h1 id={style.label}>Duration-</h1> <h1 id={style.value}>{totalPrice[1]}</h1>
            </div>
            <div className={style.selectionList}>
                <h1 id={style.label}>Aspect Ratio</h1> <h1 id={style.value}>{totalPrice[2]}</h1>
            </div>
            <div className={style.selectionList}>
                <h1 id={style.label}>Style and Music</h1> <h1 id={style.value}>{totalPrice[3]} and {totalPrice[4]}</h1>
            </div>
            <div className={style.selectionList}>
                <h1 id={style.label}>Font</h1> <h1 id={style.value}>{totalPrice[5]}</h1>
            </div>
            <div className={style.selectionList}>
                <h1 id={style.label}>Distribution Selections</h1> <h1 id={style.value}>{distributionView}</h1>
            </div>



           


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

