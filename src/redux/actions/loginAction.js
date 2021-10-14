import axios from 'axios'


const fetchLogin = (login)=> async (dispatch)=> {
    const email = login.email;
    const password = login.password;
    
  dispatch(requestLogin())
  try {
    await axios.post("http://34.210.129.167/api/login", {
        email, password
    }).then((res)=>{
      const loginData = res.data;
      console.log(res.data)
      dispatch({type: "FETCH_LOGIN_SUCCESS", payload:loginData})
      
      })
  }  
  
  catch (error) {
      dispatch({type:"FETCH_LOGIN_FAILURE", payload:error});
  }
}

const requestLogin = ()=>{
  return {
      type: "FETCH_LOGIN_REQUEST"
  }
}
const requestLogout = ()=>{
  return {
      type: "FETCH_LOGOUT_REQUEST"
  }
}
 const exportedObjects={
  fetchLogin,
  requestLogin,
  requestLogout
 }

export default exportedObjects
