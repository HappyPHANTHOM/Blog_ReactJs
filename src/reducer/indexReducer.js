const initialState = {
    users: [],
    detail: [],
    posts:[]
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state,
                users : action.payload
            }
        case 'GET_DETAIL':
            return{
                ...state,
                detail: action.payload
            }
        case 'GET_POSTS':
            return{
                ...state,
                posts: action.payload
            }
        default: return state;
    }
}

export default rootReducer;