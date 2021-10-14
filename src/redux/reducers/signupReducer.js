const initialState={
    postItems:[],
    loading: false,
    error:null,
}

const signupReducer=(state=initialState, action)=>{
    switch(action.type){
        case "FETCH_REGISTER_REQUEST":
            return{
                ...state, 
                loading:true,
                error:null,
            }
        case "FETCH_REGISTER_SUCCESS":
            return{
                ...state,
                loading:false,
                postItems:action.payload
            }  
        case "FETCH_REGISTER_FAILURE":
            return{
                ...state,
                loading:false,
                error:action.payload
            }   
        default :
        return state;       
    }
}

export default signupReducer;