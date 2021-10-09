import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Login.module.css'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Link } from "react-router-dom";
import Signup from '../signup/Signup';



const Login = () => {
    
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })
    let email = login.email
    let password = login.password
    const history = useHistory();

    // useEffect(()=>{
    //     if(localStorage.getItem('user-info')){
    //         // history.push("/signin")
    //     }
    // }, [])

    const clickHander = async () => {
        console.log(login)
        // console.log(email, password) 
        // let item = {email, password} 
        // console.log(email, password)
        let result = await axios.post("http://34.210.129.167/api/login", {
            email, password
            // method: 'POST',
            // headers: {
            //     "content-type": "application/json",
            //     "Accept": 'application/json'
            // },
            // body:JSON.stringify(item)
        })

        .then(function (response) {
            console.log(response);
          })

        // result = await result.json();
        // localStorage.setItem("user-info", JSON.stringify(result))
        // history.push("/signin")
    }

    return (
        <div className={styles.loginMain}>
            <div className="container">
                <div className={styles.loginMainWrap}>
                    <div className={styles.loginForm}>
                        <h3>Sign In</h3>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingEmail" 
                            placeholder="name@example.com"
                            value={login.email}
                            onChange={(e)=>setLogin({...login, email: e.target.value})}
                            />
                            
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" 
                            value={login.password}
                            placeholder="Password"
                            onChange={(e)=>setLogin({...login, password: e.target.value})}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        {/* <Link to="/signin"> */}
                            <button type="button" className="btn btn-primary"
                            onClick={clickHander}
                            >Sign In</button>
                        {/* </Link> */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
