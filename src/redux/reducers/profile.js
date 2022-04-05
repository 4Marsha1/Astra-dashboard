import { FETCH_USER_DETAILS } from "../actions/types"

const initialState = {
    user: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_DETAILS:
            return {
                user: action.payload
            }
        default: return state;
    }
}

export default reducer;