const initialState = {

    podcasts: [],
    packageSelection: '',
    detailSelection: '',
    ratioSelection: '',
    styleSelection: [],
    fontSelection: '',
    distributionSelection: [],


}

const UPDATE_PODCASTS = 'UPDATE_PODCASTS'
const UPDATE_PACKAGE_SELECTION = 'UPDATE_PACKAGE_SELECTION'
const UPDATE_DETAIL_SELECTION = 'UPDATE_DETAIL_SELECTION'
const UPDATE_RATIO_SELECTION = 'UPDATE_RATIO_SELECTION'
const UPDATE_STYLE_SELECTION = 'UPDATE_STYLE_SELECTION'
const UPDATE_FONT_SELECTION = 'UPDATE_FONT_SELECTION'
const UPDATE_DISTRIBUTION_SELECTION = 'UPDATE_DISTRIBUTION_SELECTION'






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

export function updateFontSelection(fontSelection) {
    return {
        type: UPDATE_STYLE_SELECTION,
        payload: fontSelection
    }
}
export function updateDistributionSelection(distributionSelection) {
    return {
        type: UPDATE_STYLE_SELECTION,
        payload: distributionSelection
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

        default:
            return state
    }
}
export default Reducer