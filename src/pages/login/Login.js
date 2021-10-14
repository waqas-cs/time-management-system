import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Login.module.css'
import { useDispatch } from 'react-redux';
import allActions from '../../redux/actions'
import { useHistory } from 'react-router';

const Login = () => {

    const dispatch = useDispatch();
    const history = useHistory()
    
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })
    const clickHandler = () => {
        dispatch(allActions.loginAction.fetchLogin(login))
        console.log(login)
        history.push("/dashboard")
    }

    return (
        <div className={styles.loginMain}>
            <div className="container">
                <div className={styles.loginMainWrap}>
                    <div className={styles.loginForm}>
                        <h3>Sign In</h3>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="floatingEmail" 
                            placeholder="Email"
                            value={login.email}
                            onChange={(e)=>setLogin({...login, email: e.target.value})}
                            />    
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="floatingPassword" 
                            value={login.password}
                            placeholder="Password"
                            onChange={(e)=>setLogin({...login, password: e.target.value})}
                            />
                        </div>
                            <button type="button" className="btn btn-primary"
                            onClick={clickHandler}
                            >Sign In</button>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
