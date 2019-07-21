const initialState = {

    podcasts: [],
    packageSelection: 'option1',
    detailSelection: 'option1',
    ratioSelection: 'option1',
    styleSelection: 'option1',
    musicSelection:'music1',
    fontSelection: 'option1',
    distributionSelection: ['option1'],
    price: 0


}

const UPDATE_PODCASTS = 'UPDATE_PODCASTS'
const UPDATE_PACKAGE_SELECTION = 'UPDATE_PACKAGE_SELECTION'
const UPDATE_DETAIL_SELECTION = 'UPDATE_DETAIL_SELECTION'
const UPDATE_RATIO_SELECTION = 'UPDATE_RATIO_SELECTION'
const UPDATE_STYLE_SELECTION = 'UPDATE_STYLE_SELECTION'
const UPDATE_MUSIC_SELECTION = 'UPDATE_MUSIC_SELECTION'

const UPDATE_FONT_SELECTION = 'UPDATE_FONT_SELECTION'
const UPDATE_DISTRIBUTION_SELECTION = 'UPDATE_DISTRIBUTION_SELECTION'
const UPDATE_PRICE = 'UPDATE_PRICE'







export function updatePodcasts(podcasts) {
    return {
        type: UPDATE_PODCASTS,
        payload: podcasts
    }
}
export function updatePackageSelection(packageSelection) {
    return {
        type: UPDATE_PACKAGE_SELECTION,
        payload: packageSelection
    }
}
export function updateDetailSelection(detailSelection) {
    return {
        type: UPDATE_DETAIL_SELECTION,
        payload: detailSelection
    }
}

export function updateRatioSelection(ratioSelection) {
    return {
        type: UPDATE_RATIO_SELECTION,
        payload: ratioSelection
    }
}

export function updateStyleSelection(styleSelection) {
    return {
        type: UPDATE_STYLE_SELECTION,
        payload: styleSelection
    }
}
export function updateMusicSelection(musicSelection) {
    return {
        type: UPDATE_MUSIC_SELECTION,
        payload: musicSelection
    }
}


export function updateFontSelection(fontSelection) {
    return {
        type: UPDATE_FONT_SELECTION,
        payload: fontSelection
    }
}
export function updateDistributionSelection(distributionSelection) {
    return {
        type: UPDATE_DISTRIBUTION_SELECTION,
        payload: distributionSelection
    }
}

export function updatePrice(price) {
    return {
        type: UPDATE_PRICE,
        payload: price
    }
}

function Reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PODCASTS:
            return {
                ...state, podcasts: action.payload
            }
        case UPDATE_PACKAGE_SELECTION:
            return {
                ...state,
                packageSelection: action.payload
            }
        case UPDATE_DETAIL_SELECTION:
            return {
                ...state,
                detailSelection: action.payload
            }
        case UPDATE_RATIO_SELECTION:
            return {
                ...state,
                ratioSelection: action.payload
            }
        
            case UPDATE_STYLE_SELECTION:
            return {
                ...state,
                styleSelection: action.payload
            }

            case UPDATE_MUSIC_SELECTION:
                return {
                    ...state,
                    musicSelection: action.payload
                }
    
        case UPDATE_FONT_SELECTION:
            return {
                ...state,
                fontSelection: action.payload
            }
        case UPDATE_DISTRIBUTION_SELECTION:
            return {
                ...state,
                distributionSelection: action.payload
            }
            case UPDATE_PRICE:
                return {
                    ...state,
                    price: action.payload
                }

        default:
            return state
    }
}
export default Reducer