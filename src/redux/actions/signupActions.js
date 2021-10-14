  import axios from 'axios'
  const fetchRegister = (signup)=> async (dispatch)=> {
      const firstName = signup.firstName;
      const lastName = signup.lastName;
      const email = signup.email;
      const password = signup.password;
     const password_confirmation = signup.password_confirmation;
    
    console.log("This is signUpAction testing = ",password_confirmation)

    dispatch(requestRegister())
    try {
        await axios.post("http://34.210.129.167/api/register", {
            firstName,lastName,email,password,password_confirmation
        }).then((res)=>{
            const registerData = res.data
            console.log(registerData);
            dispatch({type: "FETCH_REGISTER_SUCCESS", payload:registerData})
        })   
    }  
    
    catch (error) {
        dispatch({type:"FETCH_REGISTER_FAILURE", payload:error});
        
    }
}

const requestRegister = ()=>{
    return {
        type: "FETCH_REGISTER_REQUEST"
    }
}

const ExportObj={
    fetchRegister,
    requestRegister
}

export default ExportObj;
