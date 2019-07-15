const initialState = { 

    podcasts: [],
    packageSelection: ''

}

const UPDATE_PODCASTS = 'UPDATE_PODCASTS'
const UPDATE_PACKAGE_SELECTION = 'UPDATE_PACKAGE_SELECTION'

export function updatePodcasts(podcasts) { 
    return { 
        type: UPDATE_PODCASTS,
        payload: podcasts
    }
}
export function updatePackageSelection(packageSelection) { 
    return  { 
        type: UPDATE_PACKAGE_SELECTION,
        payload: packageSelection
    }
}


function Reducer(state = initialState, action) { 
    switch(action.type) {
        case UPDATE_PODCASTS:
        return {
             ...state, podcasts: action.payload
        }
        case UPDATE_PACKAGE_SELECTION:
            return { 
                ...state,
                packageSelection: action.payload
            }

        default: 
        return state
    }
}
export default Reducer