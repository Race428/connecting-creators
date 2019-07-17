const initialState = {

    podcasts: [],
    packageSelection: '',
    detailSelection: '',
    ratioSelection: '',


}

const UPDATE_PODCASTS = 'UPDATE_PODCASTS'
const UPDATE_PACKAGE_SELECTION = 'UPDATE_PACKAGE_SELECTION'
const UPDATE_DETAIL_SELECTION = 'UPDATE_DETAIL_SELECTION'
const UPDATE_RATIO_SELECTION = 'UPDATE_RATIO_SELECTION'



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

        default:
            return state
    }
}
export default Reducer