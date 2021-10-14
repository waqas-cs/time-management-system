import axios from 'axios'

const fetchSignupUser = (signup, token)=> async (dispatch)=> {
const firstName = signup.firstName;
const lastName = signup.lastName;
const email = signup.email;
const password = signup.password;
const password_confirmation = signup.password_confirmation;
const userType = signup.userType

    console.log("Signup User Action Tokena and Signup = ",token,signup)
    
    dispatch(requestSignupUser())
  try {
    await axios
    .post(
        "http://34.210.129.167/api/users",
        {
          firstName,
          lastName,
          email,
          password,
          password_confirmation,
          userType,
        },
        {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }        
    )
    .then((res)=>{
          const signupUserData = res.data.user;
          console.log("response "+ JSON.stringify(signupUserData));
          dispatch({type: "FETCH_SIGNUPUSER_SUCCESS", payload:signupUserData})
      })
  }  
  
  catch (error) {
      dispatch({type:"FETCH_SIGNUPUSER_FAILURE", payload:error});
  }
}

const requestSignupUser = ()=>{
  return {
      type: "FETCH_SIGNUPUSER_REQUEST"
  }
}

// eslint-disable-next-line
export default {
    fetchSignupUser,
    requestSignupUser
}
