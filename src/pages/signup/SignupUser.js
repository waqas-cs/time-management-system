import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Signup.module.css'
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../redux/actions'
import { Link } from 'react-router-dom';


const SignupUser = () => {
    const dispatch = useDispatch()
    const loginData = useSelector(state => state.loginReducer)
    console.log("aaaaaaaaaaaaaaaa", loginData.postItems.token)
    let token = loginData.postItems.token;

    console.log("This is login Token " +token)


    const [signup, setSignup] = useState(
        {
            firstName: "",
            lastName: "", 
            email: "",  
            password: "", 
            password_confirmation: "", 
            userType: "user"
        }
    )
    
    const submitHandler = () => {
        dispatch(allActions.signupUserAction.fetchSignupUser(signup, token))
        console.log(signup)
    }
    return (
        <div className={styles.sigupMain}>
            <div className="container">
                <div className={styles.sigupMainWrap}>
                    <div className={styles.sigupForm}>
                        <h4>Create User Account</h4>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="floatingFirstname"
                            value={signup.firstName}
                            onChange={(e)=>setSignup({...signup, firstName: e.target.value})}
                            placeholder="First Name"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="floatingLastname" 
                            value={signup.lastName}
                            onChange={(e)=>setSignup({...signup, lastName: e.target.value})}
                            placeholder="Last Name"/>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="floatingEmail" 
                            value={signup.email}
                            onChange={(e)=>setSignup({...signup, email: e.target.value})}
                            placeholder="Email"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="floatingPassword" 
                            value={signup.password}
                            onChange={(e)=>setSignup({...signup, password: e.target.value})}
                            placeholder="Password"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="floatingConfirmPassword" 
                            value={signup.password_confirmation}
                            onChange={(e)=>setSignup({...signup, password_confirmation: e.target.value})}
                            placeholder="Confirm Password"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="floatingUserType" 
                            value={signup.userType}
                            onChange={(e)=>setSignup({...signup, userType: e.target.value})}
                            placeholder="User Type" disabled/>
                        </div>
                        <Link to="/dashboard">
                            <button type="button" 
                            onClick={submitHandler}
                            className="btn btn-primary">Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupUser
