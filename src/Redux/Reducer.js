const initialState = {

    podcasts: [],
    packageSelection: '',
    detailSelection: ''

}

const UPDATE_PODCASTS = 'UPDATE_PODCASTS'
const UPDATE_PACKAGE_SELECTION = 'UPDATE_PACKAGE_SELECTION'
const UPDATE_DETAIL_SELECTION = 'UPDATE_DETAIL_SELECTION'


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

        default:
            return state
    }
}
export default Reducer