const initialState = {
    isAuthenticated: false,
    user:null,
    error:null,
    loading:false
}


const authReducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return{
                ...state,
                isAuthenticated:false, 
                user: action.payload,
                error: state.error,
                loading: true,
            }
        case "LOGIN_FAILURE":
            return{
                ...state,
                isAuthenticated:false,
                user:null,
                error: action.payload,
                loading: false,
            }
        case "LOGIN_SUCCESS":
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload,
                error:null,
                loading:false
            }
    }
}

export {initialState, authReducer}