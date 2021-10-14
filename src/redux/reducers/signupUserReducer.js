const initialState={
    postItems:[],
    loading: false,
    error:null,
}

const signUpUserReducer=(state=initialState, action)=>{
    switch(action.type){
        case "FETCH_SIGNUPUSER_REQUEST":
            return{
                ...state,
                loading:true,
                error:null,
            }
        case "FETCH_SIGNUPUSER_SUCCESS":
            return{
                ...state,
                loading:false,
                postItems:action.payload
            }  
        case "FETCH_SIGNUPUSER_FAILURE":
            return{
                ...state,
                loading:false,
                error:action.payload
            }   
        default :
        return state;       
    }
}

export default signUpUserReducer;