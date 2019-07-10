const initialState = { 

    podcasts: []

}

const UPDATE_PODCASTS = 'UPDATE_PODCASTS'

export function updatePodcasts(podcasts) { 
    return { 
        type: UPDATE_PODCASTS,
        payload: podcasts
    }
}

function Reducer(state = initialState, action) { 
    switch(action.type) {
        case UPDATE_PODCASTS:
        return { ...state, podcasts:action.payload}
        default: 
        return state
    }
}
export default Reducer