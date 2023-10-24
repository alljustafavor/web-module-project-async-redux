import { GET_ZIP_PENDING, GET_ZIP_REJECTED, GET_ZIP_SUCCESS } from "../actions"

const initialState = {
    loading: false,
    info: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ZIP_SUCCESS:
            const newState = {
                ...state,
                info: action.payload,
                loading: false
            }
            console.log(newState)
            return newState
        case GET_ZIP_PENDING:
            return {
                ...state,
                loading: true,
            }
        case GET_ZIP_REJECTED:
            return {
                ...state,
                info: {},
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;